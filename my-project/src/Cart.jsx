import { useMemo } from "react";
import { useCart } from "./CartContext";
import ScrollReveal from "./ScrollReveal";

export default function Cart() {
  const { count, totalFormatted, lineItems, setQty, removeItem, clear } = useCart();

  const isEmpty = count === 0;

  const subhead = useMemo(() => {
    if (isEmpty) return "Your cart is empty.";
    return `${count} item${count === 1 ? "" : "s"} • Subtotal ${totalFormatted}`;
  }, [count, isEmpty, totalFormatted]);

  return (
    <section id="cart" className="bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">Cart</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Your order</h2>
              <p className="mt-2 text-gray-500">{subhead}</p>
            </div>

            <div className="flex items-center gap-3">
              {!isEmpty && (
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center justify-center gap-2 bg-white border border-orange-100 text-orange-700 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-orange-50 transition-colors"
                  onClick={clear}
                >
                  Clear cart
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {isEmpty ? (
              <ScrollReveal>
                <div className="rounded-3xl border border-orange-100 bg-amber-50 p-8 text-center">
                  <div className="text-5xl">🛒</div>
                  <p className="mt-3 text-gray-700 font-semibold">Add items from the menu to start your order.</p>
                </div>
              </ScrollReveal>
            ) : (
              <div className="space-y-4">
                {lineItems.map(({ id, item, qty, unitFormatted, lineFormatted }, idx) => (
                  <ScrollReveal key={id} delay={idx * 60}>
                    <div
                      className="rounded-3xl border border-orange-100 bg-white p-4 sm:p-5 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-orange-500/10 to-pink-500/10 border border-orange-100 flex items-center justify-center text-2xl">
                          {item.emoji}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            {unitFormatted} • {item.tag}
                          </p>
                          <p className="text-sm font-bold text-gray-900">Line: {lineFormatted}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-3">
                        <div className="inline-flex items-center rounded-2xl border border-orange-100 overflow-hidden">
                          <button
                            type="button"
                            className="px-3 py-2 text-gray-700 hover:bg-orange-50"
                            aria-label={`Decrease ${item.name}`}
                            onClick={() => setQty(id, qty - 1)}
                          >
                            -
                          </button>
                          <div className="px-4 py-2 text-gray-900 font-extrabold min-w-11 text-center">{qty}</div>
                          <button
                            type="button"
                            className="px-3 py-2 text-gray-700 hover:bg-orange-50"
                            aria-label={`Increase ${item.name}`}
                            onClick={() => setQty(id, qty + 1)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="text-sm font-bold text-orange-700 hover:text-orange-800"
                          onClick={() => removeItem(id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <ScrollReveal delay={120}>
              <div className="rounded-3xl border border-orange-100 bg-amber-50 p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-gray-900">Order summary</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Items</span>
                    <span className="font-bold">{count}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-bold">{totalFormatted}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Delivery</span>
                    <span className="font-bold">Free</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-orange-100 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">Total</span>
                    <span className="text-gray-900 font-extrabold text-xl">{totalFormatted}</span>
                  </div>
                  <button
                    type="button"
                    disabled={isEmpty}
                    className="mt-5 w-full bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Place order
                  </button>
                  <p className="mt-3 text-xs text-gray-500">Gbenga Eats</p>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </section>
  );
}


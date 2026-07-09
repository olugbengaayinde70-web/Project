import ScrollReveal from "./ScrollReveal";

export default function Track() {
  return (
    <section id="track" className="bg-amber-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">Track your order</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Get live delivery updates</h2>
              <p className="mt-2 text-gray-500 max-w-xl">Enter an order reference to see current status.</p>
            </div>

            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-3 bg-white border-2 border-orange-200 rounded-2xl px-4 py-3 shadow-sm">
                <span className="text-xl text-orange-400" aria-hidden>
                  🔎
                </span>
                <input
                  className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
                  placeholder="e.g. GBENGA-1827"
                />
                <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">
                  Track
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ScrollReveal>
            <div className="lg:col-span-2 rounded-3xl border border-orange-100 bg-white p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">Delivery progress</h3>
                  <p className="mt-1 text-sm text-gray-500">A realistic timeline for your order.</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-orange-50 border border-orange-100 px-4 py-2 text-xs font-bold text-orange-700">
                  Estimated: 18 min
                </span>
              </div>

              <ol className="mt-6 space-y-4">
                {[
                  { title: "Order confirmed", desc: "Restaurant received your order." },
                  { title: "Preparing meal", desc: "Chefs are cooking fresh." },
                  { title: "On the way", desc: "Rider picked up your meal." },
                  { title: "Delivered", desc: "Enjoy your food!" },
                ].map((step, idx) => (
                  <li key={step.title} className="flex gap-4">
                    <div
                      className={`mt-1 w-10 h-10 rounded-2xl border flex items-center justify-center text-lg font-extrabold ${
                        idx <= 2
                          ? "bg-linear-to-r from-orange-500 to-pink-500 border-orange-200 text-white"
                          : "bg-white border-orange-100 text-orange-600"
                      }`}
                      aria-hidden
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900">{step.title}</p>
                      <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl bg-amber-50 border border-orange-100 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-2xl">
                    🛵
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">Rider: Kelvin</p>
                    <p className="text-sm text-gray-500">Ketu, Lagos • 1 stop ahead</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="rounded-3xl border border-orange-100 bg-white p-6">
              <h3 className="text-lg font-extrabold text-gray-900">Contact</h3>
              <p className="mt-1 text-sm text-gray-500">If you need help, reach out to the rider.</p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-orange-100 bg-amber-50 p-4">
                  <p className="text-xs font-bold text-orange-700">Phone</p>
                  <p className="mt-1 text-gray-900 font-extrabold">+234 801 234 5678</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-amber-50 p-4">
                  <p className="text-xs font-bold text-orange-700">Delivery note</p>
                  <p className="mt-1 text-gray-700">Use the main gate entrance.</p>
                </div>

                <button className="w-full bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity">
                  Message rider
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


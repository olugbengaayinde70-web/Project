import React from "react";
import { useCart } from "./CartContext";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    name: "Spicy Jollof Bowl",
    description: "Smoky jollof rice with chicken, plantain & pepper sauce.",
    price: "₦6,500",
    tag: "Popular",
    image: "/doddo.png",
  },
  {
    name: "Crispy Suya Wrap",
    description: "Suya-spiced beef, fresh veggies, and creamy pepper mayo.",
    price: "₦5,200",
    tag: "Street Classic",
    image: "/suya.png",
  },
  {
    name: "Egusi Pepper Soup",
    description: "Rich egusi base, tender meat, and warming pepper soup notes.",
    price: "₦7,200",
    tag: "Chef’s Special",
    image: "/egussi.png",
  },
  {
    name: "Suya Fries",
    description: "Crispy fries tossed in suya spice & served with cold drink.",
    price: "₦4,800",
    tag: "New",
    image: "/spag.jpg",
  },
  {
    name: "Chicken Shawarma",
    description: "Grilled chicken, garlic sauce, and crunchy salad in a wrap.",
    price: "₦5,900",
    tag: "Fan Favorite",
    image: "/shawama.jpg",
  },
  {
    name: "Vanilla Milkshake",
    description: "Thick, creamy vanilla shake with a smooth finish.",
    price: "₦3,500",
    tag: "Chill",
    image: "/better.jpg",
  },
  {
    name: "Amala & Ewedu",
    description: "Traditional amala with ewedu soup, served with tender meat and pepper sauce.",
    price: "₦6,800",
    tag: "Classic",
    image: "/amalaa.png",
  },
  {
    name: "Beans & Dodo",
    description: "Tender stewed beans with crispy fried plantains and pepper sauce.",
    price: "₦5,500",
    tag: "Hearty",
    image: "/doddo.png",
  },
  {
    name: "fried rice & chicken",
    description: "fluffy fried rice with savory chicken, served with pepper sauce.",
    price: "₦6,000",
    tag: "Satisfying",
    image: "/ricee.jpg",
  },
];

export default function Menu() {
  const { addItem } = useCart();
  const [showAll, setShowAll] = React.useState(false);
  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section id="menu" className="bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">Browse today</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Menu picks for you</h2>
              <p className="mt-2 text-gray-500 max-w-xl">Fresh favorites from local restaurants—ready for fast delivery.</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
                <span className="text-orange-500">✨</span>
                <span className="text-sm font-medium text-gray-700">Popular</span>
              </div>

              <button
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity"
                type="button"
                onClick={() => setShowAll(true)}
                aria-label="View all menu items"
              >
                View all
                <span aria-hidden>→</span>
              </button>

              {showAll && (
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center justify-center gap-2 bg-white border border-orange-100 text-orange-700 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-orange-50 transition-colors"
                  onClick={() => setShowAll(false)}
                  aria-label="Show fewer menu items"
                >
                  Show less
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleItems.map((it, idx) => (
            <ScrollReveal key={it.name} delay={idx * 80}>
              <article className="group relative rounded-3xl border border-orange-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-orange-500/10 to-pink-500/10 border border-orange-100 flex items-center justify-center text-2xl">
                        <img
                          src={it.image}
                          alt={it.name}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-gray-900">{it.name}</h3>
                        <p className="mt-1 text-gray-500 text-sm">{it.description}</p>
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                      {it.tag}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-extrabold text-lg">{it.price}</p>
                      <p className="text-xs text-gray-400 mt-0.5">Estimated 18 min</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => addItem(it)}
                      className="bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-2xl hover:bg-gray-800 transition-colors"
                      aria-label={`Add ${it.name} to cart`}
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-orange-500/0 via-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240}>
          <div className="mt-10 bg-amber-50 border border-orange-100 rounded-3xl p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-orange-700">Need help deciding?</p>
              <p className="mt-1 text-gray-700 font-medium">Tell us your taste—we’ll recommend the best meals.</p>
            </div>
            <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity">
              Get recommendations
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


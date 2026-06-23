import React, { useEffect, useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";


const dishes = [
  {
    name: "Spicy Jollof Bowl",
    tag: "Nigerian Favorite",
    image: "/ricee.jpg",
    grad: "from-orange-500 to-pink-500"
  },
  {
    name: "Crispy Suya Wrap",
    tag: "Street Classic",
    image: "/suya.png",
    grad: "from-yellow-400 to-orange-500"
  },
  {
    name: "Egusi Pepper Soup",
    tag: "Chef's Special",
    image: "/egussi.png",
    grad: "from-green-400 to-cyan-500"
  },
  {
    name: "Shawarma",
    tag: "Street Delight",
    image: "/shawama.jpg",
    grad: "from-amber-400 to-orange-500"
  },
  {
    name: "Amala and ewedu",
    tag: "Traditional yoruba Delight",
    image: "/amalaa.png",
    grad: "from-amber-400 to-orange-500"
  },
  {
    name: "Beans and dodo",
    tag: "Southwest Delight",
    image: "/doddo.png",
    grad: "from-amber-400 to-orange-500"
  },
  {
    name: "Milkshake",
    tag: "Nigerian Delight",
    image: "/shake.jpg",
    grad: "from-amber-400 to-orange-500"
  },
  {
    name: "Spagetti",
    tag: "Nigerian family Delight",
    image: "/spag.jpg",
    grad: "from-amber-400 to-orange-500"
  },
  {
    name: "ice cream",
    tag: "Nigerian Delight",
    image: "/craem.jpg",
    grad: "from-amber-400 to-orange-500"
  },
  
  
  
  
];

const stats = [
  { value: "40k+", label: "Happy customers" },
  { value: "300+", label: "Restaurants" },
  // { value: "18min", label: "Avg delivery" },
];

export default function FoodDeliveryHero() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const dish = useMemo(() => dishes[active], [active]);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((p) => (p + 1) % dishes.length);
        setFading(false);
      }, 320);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const scrollToId = (id) => {
    setMobileOpen(false);
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 via-amber-50 to-white overflow-hidden relative font-sans yopp">
      <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-orange-400 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-pink-400 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-yellow-300 opacity-25 blur-2xl pointer-events-none" />

      <header className="sticky top-0 z-20">
        <div className="bg-amber-50/70 backdrop-blur supports-backdrop-filter:bg-amber-50/60 border-b border-orange-100">
          <div className="flex items-center justify-between px-6 md:px-8 py-4 relative">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌮</span>
              <span className="text-xl font-extrabold text-orange-600 tracking-tight">Gbenga</span>
              <span className="text-xl font-extrabold text-blue-400 tracking-tight">Eats</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
              <button className="hover:text-orange-600 transition-colors" onClick={() => scrollToId("#menu")}>
                Menu
              </button>
              <button className="hover:text-orange-600 transition-colors" onClick={() => scrollToId("#cart")}>
                Cart
              </button>
              <button className="hover:text-orange-600 transition-colors" onClick={() => scrollToId("#track")}>
                Track Order
              </button>
              <button className="hover:text-orange-600 transition-colors" onClick={() => scrollToId("#track")}> 
                Your Orders
              </button>
            </div>

            <div className="flex items-center gap-3">

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-orange-100 bg-white/70 hover:bg-white transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <span className="sr-only">Menu</span>
                <div className="w-5 h-5 relative">
                  <span
                    className={`absolute left-0 top-1/2 w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${
                      mobileOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-5 h-0.5 bg-gray-700 transition-opacity duration-200 ${
                      mobileOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${
                      mobileOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden border-t border-orange-100 transition-all duration-200 ${
              mobileOpen ? "max-h-72" : "max-h-0"
            }`}
            aria-hidden={!mobileOpen}
          >
            <div className="px-6 py-4 space-y-3">
              <nav className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                <button
                  className="px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-colors text-left"
                  onClick={() => scrollToId("#menu")}
                >
                  Menu
                </button>
                <button
                  className="px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-colors text-left"
                  onClick={() => scrollToId("#cart")}
                >
                  Cart
                </button>
                <button
                  className="px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-colors text-left"
                  onClick={() => scrollToId("#track")}
                >
                  Track Order
                </button>
                <button
                  className="px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-colors text-left"
                  onClick={() => scrollToId("#track")}
                >
                  Your Orders
                </button>
              </nav>

            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-10 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 text-sm text-orange-600 font-semibold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Delivering across Lagos to Abuja
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
                Food that hits{" "}
                <span
                  className={`bg-linear-to-r ${dish.grad} bg-clip-text text-transparent transition-all duration-300 inline-block ${
                    fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                  }`}
                >
                  different.
                </span>
              </h1>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed max-w-md">
                Your favourite local restaurants, delivered fast. From jollof to shawarma — we bring the heat and aroma straight to your door.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="flex items-center gap-3 bg-white border-2 border-orange-200 focus-within:border-orange-500 rounded-2xl px-4 py-3 max-w-md shadow-md shadow-orange-100 transition-colors">
              <span className="text-xl text-orange-400">📍</span>
              <input
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
                placeholder="Enter your delivery address..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">
                Find Food
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-orange-500">{s.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="relative flex items-center justify-center">
          <ScrollReveal>
            <div
              className={`relative w-72 h-80 rounded-3xl bg-white border-2 border-orange-100 shadow-2xl shadow-orange-200 overflow-hidden transition-all duration-300 ${
                fading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${dish.grad} opacity-10`} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-60%] w-66 h-65 rounded-full overflow-hidden select-none pointer-events-none">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>


              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4 border-t h-66px border-orange-100">
                <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">{dish.tag}</span>
                <p className="text-gray-900 font-bold text-lg mt-0.5">{dish.name}</p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    ★★★★★ <span className="text-gray-400 text-xs ml-1">4.9</span>
                  </div>
                  <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

             
              {/* <div className="absolute top-4 right-4 md:top-4 md:right-4">
                <ScrollReveal>
                  <div className="bg-white border-2 border-orange-100 rounded-2xl px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg shadow-orange-100 animate-bounce">
                    🛵 18 min away
                  </div>
                </ScrollReveal>
              </div> */}

              {/* <div className="absolute top-4 right-4 md:top-4 md:right-1">
                <ScrollReveal delay={80}>
                  <div className="bg-white border-2 border-pink-100 rounded-2xl px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg shadow-pink-100">
                    free delivery 
                  </div>
                </ScrollReveal>
              </div> */}

              <ScrollReveal delay={160}>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {dishes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setFading(true);
                        setTimeout(() => {
                          setActive(i);
                          setFading(false);
                        }, 300);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-6 bg-linear-to-r from-orange-500 to-pink-500"
                          : "w-1.5 bg-orange-200"
                      }`}
                      aria-label={`Show dish ${i + 1}`}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-orange-100 bg-white py-4 overflow-hidden">
        <div className="flex gap-16 animate-[marquee_18s_linear_infinite] whitespace-nowrap text-orange-400 text-sm uppercase tracking-widest font-bold">
          {[...Array(6)]
            .fill([
              "🍔 Burgers",
              "🍕 Pizza",
              "🍲 Soups",
              "🌯 Wraps",
              "🍣 Sushi",
              "🥗 Salads",
              "🍗 Grills",
              "🥤 Drinks",
            ])
            .flat()
            .map((item, i) => (
              <span key={i}>{item}</span>
            ))}
        </div>
      </div>

      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}


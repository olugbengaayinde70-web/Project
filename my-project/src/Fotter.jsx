import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Fotter() {
  return (
    <footer className="bg-white border-t-2 border-orange-100">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍲</span>
                <span className="text-xl font-extrabold text-orange-600 tracking-tight">Gbenga</span>
                <span className="text-xl font-extrabold text-blue-400 tracking-tight">Eats</span>
              </div>
              <p className="mt-3 text-gray-500 max-w-sm leading-relaxed">
                Local favorites delivered fast across Lagos & Abuja. Enjoy hot meals at your door.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600">
                  ✨
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600">
                  🛵
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600">
                  💛
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-orange-700 tracking-wide">Explore</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    { label: "Menu", href: "#menu" },
                    { label: "Cart", href: "#cart" },
                    { label: "Track Order", href: "#track" },
                    { label: "Your Orders", href: "#track" },
                  ].map((l) => (
                    <li key={l.label}>
                      <a className="text-gray-600 hover:text-orange-600 transition-colors" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-bold text-orange-700 tracking-wide">Support</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {["Help Center", "Returns", "Contact Us"].map((t) => (
                    <li key={t}>
                      <a className="text-gray-600 hover:text-orange-600 transition-colors" href="#">
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-orange-700 tracking-wide">Newsletter</p>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                Get food drops and promo updates. 
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  className="flex-1 bg-white border border-orange-100 rounded-2xl px-4 py-3 text-sm outline-none text-gray-800 placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                By subscribing, you agree to receive emails. Unsubscribe anytime.
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-orange-100 pt-6">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Gbenga Eats. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a key={s} href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}


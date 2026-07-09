import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

export default function Landing() {
  React.useEffect(() => {
    if (window.location.hash === "#hero") {
      const el = document.querySelector("#hero");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white relative">
      <div className="absolute top-4 right-6 z-30 flex items-center gap-3">
        <Link to="/login" className="text-sm font-medium text-gray-700 px-3 py-2 rounded-2xl hover:bg-orange-50">Login</Link>
        <Link to="/login" className="text-sm font-bold bg-linear-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-2xl shadow">Sign in</Link>
      </div>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Delicious food, delivered fast</h2>
            <p className="mt-4 text-gray-600">Discover local favorites and new flavors. Order from restaurants near you and get it delivered in minutes.</p>

            <div className="mt-6 flex gap-3">
              <Link to="/login" className="inline-block bg-linear-to-r from-orange-500 to-pink-500 text-white font-bold px-6 py-3 rounded-2xl shadow">Get started</Link>
              <a href="#menu" className="inline-block border border-orange-100 text-orange-600 font-semibold px-5 py-3 rounded-2xl">See menu</a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white border border-orange-100 rounded-3xl shadow">
              <h3 className="font-bold text-lg">Fast delivery</h3>
              <p className="text-sm text-gray-500 mt-1">Hot meals arrive quickly with our optimized delivery network.</p>
            </div>
            <div className="p-6 bg-white border border-orange-100 rounded-3xl shadow">
              <h3 className="font-bold text-lg">Secure payments</h3>
              <p className="text-sm text-gray-500 mt-1">Multiple payment options and secure checkout.</p>
            </div>
            <div className="p-6 bg-white border border-orange-100 rounded-3xl shadow">
              <h3 className="font-bold text-lg">Top restaurants</h3>
              <p className="text-sm text-gray-500 mt-1">Handpicked partners serving the best local dishes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

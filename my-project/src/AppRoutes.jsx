import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./Hero";
import Menu from "./Menu";
import Cart from "./Cart";
import Track from "./Track";
import Fotter from "./Fotter";
import Login from "./Login";

function RequireAuth({ children, allowedRoles }) {
  const auth = (() => {
    try {
      const raw = localStorage.getItem("demoAuth");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  if (!auth?.role) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(auth.role)) return <Navigate to="/login" replace />;
  return children;
}

function UserHome() {
  return (
    <>
      <Hero />
      <Menu />
      <Cart />
      <Track />
      <Fotter />
    </>
  );
}

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white border border-orange-100 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Admin Dashboard</h1>
              <p className="mt-2 text-gray-600">Demo admin dashboard: manage users, restaurants, orders, and reports.</p>
            </div>
            <div className="text-sm font-bold text-orange-600 bg-orange-50 border border-orange-100 rounded-2xl px-4 py-2">
              Role: Admin
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Dashboard", desc: "Overview & KPIs" },
              { title: "Managing Users", desc: "Create, remove, and view users" },
              { title: "Restaurants", desc: "Approve and manage restaurants" },
              { title: "Orders", desc: "View and update order statuses" },
              { title: "Reports", desc: "Sales and delivery reports" },
              { title: "Settings", desc: "Admin preferences (demo)" },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-orange-100 bg-amber-50 p-5">
                <p className="text-lg font-extrabold text-gray-900">{c.title}</p>
                <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
                <div className="mt-4">
                  <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-2 rounded-2xl shadow-sm shadow-orange-200 hover:opacity-90 transition-opacity">
                    Open (demo)
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3 flex-wrap">
            <button
              className="bg-white border border-orange-100 text-orange-700 text-sm font-bold px-5 py-2.5 rounded-2xl hover:bg-orange-50 transition-colors"
              onClick={() => {
                localStorage.removeItem("demoAuth");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
            <button
              className="bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-sm shadow-orange-200 hover:opacity-90 transition-opacity"
              onClick={() => {
                
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
        element={
          <RequireAuth allowedRoles={["user", "admin"]}>
            <UserHome />
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AdminDashboard />
          </RequireAuth>
        }
      />

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}


import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const raw = localStorage.getItem("demoAuth");
      const auth = raw ? JSON.parse(raw) : null;
      if (auth?.role) {
        if (auth.role === "admin") navigate("/admin");
        else navigate("/app");
      }
    } catch {
      // ignore
    }
  }, [navigate]);
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    if (!validateEmail(email)) return false;
    if (password.trim().length < 4) return false;
    return true;
  }, [email, password]);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Please enter a valid email and password.");
      return;
    }

   
    const payload = {
      email: email.trim(),
      role,
      token: "demo-token",
    };

    localStorage.setItem("demoAuth", JSON.stringify(payload));

    if (role === "admin") navigate("/admin");
    else navigate("/#hero");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 via-amber-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
            <div className="text-4xl font-serif">welcome</div>
          <div className="text-4xl font-serif">to</div>
          <h1 className="mt-2 text-2xl font-extrabold text-gray-900">Gbenga Eats <br />foodelivery</h1>
          <p className="text-sm text-gray-500 mt-1">Login as user or admin </p>
        </div>

        <form onSubmit={onSubmit} className="bg-white border border-orange-100 rounded-3xl shadow-lg shadow-orange-100 p-6">
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`flex-1 rounded-2xl px-4 py-2 text-sm font-bold border transition-colors ${
                  role === "user"
                    ? "bg-linear-to-r from-orange-500 to-pink-500 text-white border-transparent"
                    : "bg-white text-gray-700 border-orange-100 hover:bg-orange-50"
                }`}
                onClick={() => setRole("user")}
              >
                User
              </button>
              <button
                type="button"
                className={`flex-1 rounded-2xl px-4 py-2 text-sm font-bold border transition-colors ${
                  role === "admin"
                    ? "bg-linear-to-r from-orange-500 to-pink-500 text-white border-transparent"
                    : "bg-white text-gray-700 border-orange-100 hover:bg-orange-50"
                }`}
                onClick={() => setRole("admin")}
              >
                Admin
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-orange-100 bg-amber-50/30 px-4 py-3 text-sm outline-none focus:border-orange-400"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-orange-100 bg-amber-50/30 px-4 py-3 text-sm outline-none focus:border-orange-400"
              placeholder="••••"
              autoComplete="current-password"
            />
          </div>

          {error ? <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl px-3 py-2 mb-4">{error}</div> : null}

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-extrabold px-5 py-3 rounded-2xl shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>

          <p className="mt-4 text-xs text-gray-500 text-center">
           
          </p>
        </form>
      </div>
    </div>
  );
}


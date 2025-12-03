import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] via-[#171717] to-[#0f0f0f] text-white relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-stone-700 to-stone-900 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-gradient-to-tr from-stone-600 to-stone-400 opacity-10 blur-3xl rounded-full"></div>

      {/* NAVBAR */}
      <header className="px-8 sm:px-14 md:px-20 xl:px-28 py-6 flex justify-between items-center z-20 relative">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
            <img src="/shield.svg" alt="Logo" className="h-8 invert" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-wide">Vartalap</h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-xl bg-white/10 border border-white/10 text-stone-200 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-stone-900 to-stone-700 text-white font-semibold shadow-md hover:shadow-stone-900/40 hover:scale-[1.03] transition-all"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* LOGIN CARD */}
      <div className="flex justify-center mt-20 px-4 relative z-20">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-xl">

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white">Welcome Back</h1>
            <p className="text-stone-300 mt-1">Sign in to continue securely</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div className="space-y-1">
              <label className="font-medium text-stone-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 inset-y-0 my-auto text-stone-400 size-5" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/10 p-3 pl-10 rounded-xl focus:outline-none focus:border-stone-500 focus:bg-white/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="font-medium text-stone-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 inset-y-0 my-auto text-stone-400 size-5" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/10 p-3 pl-10 pr-10 rounded-xl focus:outline-none focus:border-stone-500 focus:bg-white/20 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 inset-y-0 flex items-center text-stone-400 hover:text-stone-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 rounded-xl bg-gradient-to-br from-stone-900 to-stone-700 text-white font-semibold shadow-md hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Switch to Sign Up */}
          <p className="text-center text-stone-300 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-white font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useNavigate } from "react-router-dom";

const Starttt = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  const handleSignUpClick = () => navigate("/signup");
  const handleHomeClick = () => navigate("/");

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#0e0e0e] via-[#171717] to-[#0f0f0f] text-white overflow-hidden">

      {/* Soft Glow Background Blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] bg-gradient-to-br from-stone-700 to-stone-900 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-stone-600 to-stone-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <header className="px-10 py-6 flex justify-between items-center relative z-20">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleHomeClick}
        >
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
            <img src="/chat-bubbles.svg" className="h-8 invert" alt="logo" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-wide">Vartalap</h1>
        </div>

        {/* Nav Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleLoginClick}
            className="px-6 py-2 rounded-xl bg-white/10 border border-white/10 text-stone-200 hover:bg-white/20 transition-all backdrop-blur-md"
          >
            Login
          </button>

          <button
            onClick={handleSignUpClick}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-stone-900 to-stone-700 font-semibold hover:scale-[1.04] active:scale-95 transition-all shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* HERO SECTION - Centered */}
      <section className="relative z-20 mt-24 flex flex-col items-center text-center px-6">

        {/* Neon Ring Behind Title */}
        <div className="absolute top-20 w-[22rem] h-[22rem] rounded-full bg-gradient-to-br from-stone-600/30 to-stone-900/30 blur-3xl"></div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-3xl">
          Secure Conversations,
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-white">
            Reinvented for the Future.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
          Private. Encrypted. Untraceable.  
          Vartalap ensures every message you send stays exactly where it belongs — with you.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-6">
          <button
            onClick={handleSignUpClick}
            className="px-10 py-3 bg-gradient-to-br from-stone-900 to-stone-700 text-white rounded-xl text-lg font-bold shadow-xl hover:scale-[1.05] active:scale-95 transition-all"
          >
            Get Started
          </button>

          <button
            onClick={handleLoginClick}
            className="px-10 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-stone-200 text-lg font-semibold hover:bg-white/20 transition-all"
          >
            Login
          </button>
        </div>

        {/* Glass Card Below */}
        <div className="mt-20 w-full max-w-3xl">
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-[0_0_50px_rgba(255,255,255,0.03)]">

            {/* Glow Lines */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-500 to-stone-700 opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-700 to-stone-500 opacity-40"></div>

            {/* Card Content */}
            <h2 className="text-2xl font-bold text-white mb-3 text-center">
              Advanced Encryption
            </h2>
            <p className="text-stone-300 text-center max-w-xl mx-auto">
              Advanced cryptographic protection securing every message, call, and file 
              with precision-engineered privacy technology.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Starttt;

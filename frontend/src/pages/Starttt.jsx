import React from "react";
import { useNavigate } from "react-router-dom";

const Starttt = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  const handleSignUpClick = () => navigate("/signup");
  const handleHomeClick = () => navigate("/");

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#0e0e0e] via-[#171717] to-[#0f0f0f] text-white overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[26rem] sm:w-[38rem] h-[26rem] sm:h-[38rem] bg-gradient-to-br from-stone-700 to-stone-900 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-to-tr from-stone-600 to-stone-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <header className="px-5 sm:px-10 py-4 sm:py-6 flex justify-between items-center relative z-20">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          onClick={handleHomeClick}
        >
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
            <img src="/chat-bubbles.svg" className="h-7 sm:h-8 invert" alt="logo" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">Vartalap</h1>
        </div>

        {/* Nav Buttons */}
        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={handleLoginClick}
            className="px-4 sm:px-6 py-2 rounded-xl bg-white/10 border border-white/10 text-stone-200 hover:bg-white/20 transition-all backdrop-blur-md text-sm sm:text-base"
          >
            Login
          </button>

          <button
            onClick={handleSignUpClick}
            className="px-4 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-stone-900 to-stone-700 font-semibold hover:scale-[1.04] active:scale-95 transition-all shadow-lg text-sm sm:text-base"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-20 mt-16 sm:mt-24 flex flex-col items-center text-center px-4 sm:px-6">

        {/* Glow Ring */}
        <div className="absolute top-16 sm:top-20 w-60 sm:w-[22rem] h-60 sm:h-[22rem] rounded-full bg-gradient-to-br from-stone-600/30 to-stone-900/30 blur-3xl"></div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight max-w-xl sm:max-w-3xl">
          Secure Conversations,
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-white">
            Reinvented for the Future.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-stone-300 max-w-md sm:max-w-2xl leading-relaxed">
          Private. Encrypted. Untraceable.  
          Vartalap ensures every message you send stays exactly where it belongs — with you.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-2">
          <button
            onClick={handleSignUpClick}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 bg-gradient-to-br from-stone-900 to-stone-700 text-white rounded-xl text-lg font-bold shadow-xl hover:scale-[1.05] active:scale-95 transition-all"
          >
            Get Started
          </button>

          <button
            onClick={handleLoginClick}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-stone-200 text-lg font-semibold hover:bg-white/20 transition-all"
          >
            Login
          </button>
        </div>

        {/* Glass Card */}
        <div className="mt-14 sm:mt-20 w-full max-w-lg sm:max-w-3xl px-2">
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(255,255,255,0.03)]">

            {/* Glow Lines */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-500 to-stone-700 opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-700 to-stone-500 opacity-40"></div>

            {/* Content */}
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
              Advanced Encryption
            </h2>
            <p className="text-stone-300 text-center max-w-sm sm:max-w-xl mx-auto text-sm sm:text-base">
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

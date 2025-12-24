import React from "react";

const Hero = () => {
  return (
    <main className="relative flex flex-col md:flex-row justify-center items-center h-[90vh] px-10 gap-16 text-white">
      {/* LEFT TEXT (goes UP on desktop) */}
      <div className="font-bold uppercase text-center md:text-left md:-translate-y-32">
        <h1 className="text-4xl md:text-8xl">
          Secure Every{" "}
          <span
            className="
          md:block
    bg-linear-to-br
    from-[#6b7280]
    via-[#374151]
    to-[#111827]
    bg-clip-text text-transparent
  "
          >
            Login
          </span>
        </h1>
      </div>

      {/* RIGHT TEXT (goes DOWN on desktop) */}
      <div className="flex flex-col items-center md:items-end gap-4 md:translate-y-24">
        <h2 className="text-4xl md:text-5xl font-bold">IN SECONDS</h2>

        <p className="text-xs text-gray-400 text-center md:text-right max-w-xs">
          // MILITARY-GRADE SECURITY, ZERO EFFORT WITH DECIMAL
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-white w-30 text-black px-3 py-3 rounded hover:scale-105 transition">
            Get Started
          </button>
          <button className="bg-white w-30 text-black px-3 py-3 rounded hover:scale-105 transition">
            Book a Demo
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

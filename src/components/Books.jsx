// src/components/Books.jsx
import React from "react";
import pressHero from "../blog2.jpg";  
import LastSection from "../lastsection";

const Books = () => {
  return (
    <div className="min-h-screen w-full bg-[#421B03] font-serif flex flex-col items-center">
      {/* ─────────── HERO ─────────── */}
      <div className="w-full relative">
        {/* hero image */}
        <img
          src={pressHero}
          alt="Wonder Women Tech article header"
          className="w-full h-[60vh] sm:h-[75vh] object-cover"
        />

        {/* overlay headline */}
        <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white font-[Cinzel] tracking-wide uppercase drop-shadow-lg
                       text-3xl sm:text-5xl md:text-6xl">
          Wonder&nbsp;Women&nbsp;Tech
        </h1>
      </div>

      {/* ─────────── FEATURED ARTICLE BOX ─────────── */}
      <section className="w-full bg-[#421B03] flex justify-center px-4 py-16">
        <div className="max-w-4xl w-full border border-[#F2BA35] rounded-xl px-6 py-10 text-center">
          <h2 className="font-[Cinzel] text-[#F2BA35] uppercase tracking-wide
                         text-xl sm:text-2xl md:text-3xl mb-4">
            Antoinette Abbamonte Pushes Boundaries<br className="hidden sm:block" />
            in Entertainment and Beyond
          </h2>

          <p className="text-white text-base md:text-lg">
            With a fearless approach to storytelling, Antoinette continues to
            break barriers—advancing artistic vision and redefining what's
            possible for the industry and the Deaf community.
          </p>
        </div>
      </section>
       <div className="scrollpress">
        <LastSection />
      </div>

    </div>
  );
};

export default Books;

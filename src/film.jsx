import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import videoFile from "./v1.mp4"; // ✅ Import the video

function FeaturedFilm() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);

  return (
    <>
      {/* Featured Film Section */}
      <section id="films" className="bg-[#421B03] text-white py-10 sm:py-24 px-2 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Cinzel] text-white uppercase font-extrabold tracking-tight text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 sm:mb-12">FEATURED FILM</h2>

          <motion.div
            ref={ref}
            style={{ scale }}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg max-w-full"
          >
            <video
              src={videoFile}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </section>

   
      <div className="bg-[#421B03] py-48" />
    </>
  );
}

export default FeaturedFilm;

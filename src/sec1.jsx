import React, { useState, useEffect } from 'react';
import image1 from './film1.jpg';
import image2 from './film2.jpg';
import image3 from './film3.jpg';

const FilmsSection = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  return (
    <div className="bg-[#4a1e00] text-white w-full min-h-screen flex flex-col justify-center items-center px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-6 px-4">
        <h2 className="text-4xl font-serif">Films</h2>
        <button className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-400 transition">
          Watch Teaser
        </button>
      </div>

      {/* Image Slider */}
      <div className="relative w-full max-w-7xl h-[80vh] rounded-xl overflow-hidden shadow-2xl bg-black">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-black rounded-full p-3 text-2xl transition"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-black rounded-full p-3 text-2xl transition"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmsSection;

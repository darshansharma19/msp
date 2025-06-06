import React from 'react';
import cameraImg from './blog1.jpg';
import spotlightImg from './blog2.jpg';
import womanImg from './blog3.jpg';
import logoImg from './logo.png';

const newsData = [
  {
    title: 'Entertainment weekly',
    subtitle: 'Antoinette Abbamonte on Changing Hollywood from the Inside',
    author: 'Antoinette Abbamonte',
    date: 'April 15, 2022',
    image: cameraImg,
  },
  {
    title: 'Film Monthly',
    subtitle: 'Strength in Silence: A Groundbreaking Achievement in Cinema',
    author: 'Antoinette Abbamonte',
    date: 'May 02, 2025',
    image: spotlightImg,
  },
  {
    title: 'Geek Visual Media',
    subtitle: 'How Since August Changed the Conversation on Inclusive Filmmaking',
    author: 'Antoinette Abbamonte',
    date: 'Mar 28, 2021',
    image: womanImg,
  },
];

const LastSection = () => {
  return (
    <div className="bg-[#3B1F0C] text-white px-2 sm:px-6 py-8 sm:py-16">
      {/* PRESS/NEWS */}
      <div id="press" className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-2xl font-bold text-white tracking-wide md:tracking-wider">Press/News</h2>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 md:px-8 py-2 md:py-2.5 rounded-full font-semibold shadow-md text-xs md:text-sm uppercase tracking-wide hover:scale-105 transition">Read All Blogs</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsData.map((item, index) => (
            <div key={index} className="bg-[#3B1F0C] rounded-xl flex flex-col h-full shadow-lg border border-[#5c3924]">
              <img src={item.image} alt={item.title} className="rounded-xl w-full h-44 md:h-48 object-cover mb-3" />
              <div className="flex flex-row justify-between items-center px-4">
                <div className="text-yellow-400 text-xs font-semibold">News</div>
                <div className="italic text-xs text-gray-300">{item.date}</div>
              </div>
              <div className="px-4 pt-2 pb-4 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 mb-2">{item.subtitle}</p>
                <p className="italic text-xs md:text-sm mt-auto">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-3xl mx-auto mt-10 sm:mt-20 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 p-1 rounded-3xl">
        <div className="bg-[#3B1F0C] rounded-3xl p-4 sm:p-8 text-center">
          <img src={logoImg} alt="Logo" className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4" />
          <p className="text-yellow-400 font-medium uppercase text-xs md:text-sm tracking-wider mb-2">Support the movement</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Changing the landscape of cinema through bold, authentic Deaf representation.
          </h2>
          <p className="text-gray-200 mb-6">
            Your contribution empowers the creation of Deaf-led films, nurtures emerging Deaf talent,
            and brings bold, authentic stories to screens around the world.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition">
            Join us in transforming Hollywood →
          </button>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div id='contact' className="max-w-4xl mx-auto mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 tracking-wide">Contact Us</h3>
        <div className="flex justify-center mb-6">
          <span className="bg-[#5c3924] px-8 py-2 rounded-full text-xs md:text-sm tracking-wide">info@mermaidsignatureproduction.com</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
          {['Twitter', 'Facebook', 'YouTube', 'Instagram'].map((platform, index) => (
            <div
              key={index}
              className="bg-[#5c3924] py-3 rounded-full flex items-center justify-between px-5 cursor-pointer hover:bg-[#7a533a] transition"
            >
              <span className="tracking-wide">{platform.toUpperCase()}</span>
              <span className="text-lg font-bold">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastSection;

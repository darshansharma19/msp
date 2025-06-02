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
    <div className="bg-[#3B1F0C] text-white px-6 py-16">
      {/* PRESS/NEWS */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Press/News</h2>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 rounded-full font-semibold shadow-md">
            Read All Blogs
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <div key={index} className="bg-[#3B1F0C] rounded-xl">
              <img src={item.image} alt={item.title} className="rounded-xl w-full h-56 object-cover mb-4" />
              <div className="text-yellow-400 text-sm font-semibold">News</div>
              <div className="italic text-sm text-gray-300 mb-2">{item.date}</div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.subtitle}</p>
              <p className="italic text-sm mt-2">{item.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 p-1 rounded-3xl">
        <div className="bg-[#3B1F0C] rounded-3xl p-8 text-center">
          <img src={logoImg} alt="Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-yellow-400 font-medium uppercase">Support the movement</p>
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
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="bg-[#5c3924] inline-block px-6 py-2 rounded-full mb-6">
          info@mermaidsignatureproduction.com
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
          {['Twitter', 'Facebook', 'YouTube', 'Instagram'].map((platform, index) => (
            <div
              key={index}
              className="bg-[#5c3924] py-3 rounded-full flex items-center justify-between px-4 cursor-pointer hover:opacity-80 transition"
            >
              <span>{platform.toUpperCase()}</span>
              <span className="text-lg font-bold">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastSection;

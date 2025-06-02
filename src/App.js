import React from "react";
import logo from "./logo.png";
import heroImage from "./hero.jpg";
import FeaturedFilm from "./film";
import comingSoonBg from "./image.jpg";
import { FaFlask, FaBullseye, FaAward } from "react-icons/fa";
import FilmsSection from "./sec1";
import BookSection from "./sec2";
import LastSection from "./lastsection";

const sections = ["Home", "Films", "Books", "About", "Press", "Contact"];

function App() {
  return (
    <div className="font-serif">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#421B03] rounded-full px-8 py-3 shadow-lg flex items-center justify-between w-[90%] max-w-5xl">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        <ul className="flex gap-8 text-white font-semibold tracking-wide text-sm">
          {sections.map((sec, index) => (
            <li key={sec} className="relative">
              <a
                href={`#${sec.toLowerCase()}`}
                className={`hover:text-[#F2BA35] transition-colors ${
                  index === 0 ? "text-[#F2BA35]" : ""
                }`}
              >
                {sec.toUpperCase()}
              </a>
              {index === 0 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-[#F2BA35] rounded"></div>
              )}
            </li>
          ))}
        </ul>

        <button className="ml-4 bg-white text-[#000000] text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-[#F2BA35] hover:text-white transition">
          SUPPORT US
        </button>
      </nav>
      {/* Hero Section */}
      <header
        id="home"
        className="min-h-screen bg-cover bg-center flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="text-center px-6">
          <h2 className="text-white text-7xl font-bold leading-tight drop-shadow-lg">
            Creating Bold Stories
            <br />
            That Redefine Deaf <br /> Representation
          </h2>
        </div>
      </header>
      {/* Welcome Section */}
      <section className="bg-[#421B03] text-white py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4 uppercase">
          Welcome to Mermaid Signature Production
        </h3>
        <p className="max-w-4xl mx-auto text-[#FFFFFF] text-lg leading-relaxed">
          where powerful, authentic Deaf-led narratives come to life. We are a
          Deaf-owned film production company committed to transforming Hollywood
          from within. Through bold storytelling and fearless artistic
          leadership, we spotlight the richness of Deaf culture and push the
          boundaries of what inclusive cinema looks like.
        </p>
      </section>
      {/* Featured Film Section */}
      <FeaturedFilm />
      {/* {coming soon} */}
      <section
        className="relative bg-cover bg-center text-white text-center py-32 px-6"
        style={{ backgroundImage: `url(${comingSoonBg})` }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed uppercase">
            Strength in Silence — A Groundbreaking Thriller from the Deaf
            Perspective. A story of survival, identity, and revolution
          </h2>

          <p className="text-5xl mt-6 font-semibold">
            Coming Soon To Major Studios
          </p>

          <button className="mt-10 bg-[#F2BA35] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-white hover:text-[#F2BA35] transition">
            Watch Teaser
          </button>
        </div>
      </section>
      <section className="bg-[#2C4728] text-white px-8 py-16 relative overflow-hidden">
        {/* Decorative vertical lines */}
        <div className="absolute inset-0 z-0 flex justify-between">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-[1px] bg-white h-full opacity-10" />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-20">
          {/* About & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold font-[Cinzel]">ABOUT US</h2>
            </div>
            <div>
              <h3 className="text-xl font-bold font-[Cinzel] mb-2">
                PRODUCTION HOUSE DESCRIPTION:
              </h3>
              <p className="text-base leading-relaxed">
                Mermaid Signature Production is dedicated to creating authentic
                cinematic experiences that spotlight Deaf perspectives and
                talent. Our mission is to transform the entertainment industry
                by bringing powerful, Deaf-led stories to audiences around the
                world.
              </p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div></div>
            <div>
              <h3 className="text-xl font-bold font-[Cinzel] mb-2">
                ANTOINETTE ABBAMONTE BIO & VISION STATEMENT:
              </h3>
              <p className="text-base leading-relaxed">
                Antoinette Abbamonte is a pioneering Deaf actor, writer,
                producer, and the founder of Mermaid Signature Production. With
                a long history of elevating Deaf stories on stage and screen,
                Antoinette envisions a future where Deaf talent leads and Deaf
                narratives are told with authenticity, nuance, and pride. Her
                work breaks down barriers, challenges stereotypes, and paves the
                way for generations of Deaf creatives to thrive.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <FaFlask className="text-4xl mb-4" />
              <h3 className="text-xl font-[Cinzel] font-bold mb-2">
                MISSION STATEMENT
              </h3>
              <p className="text-sm leading-relaxed">
                At Mermaid Signature Production, we create authentic cinematic
                experiences that center on Deaf perspectives, stories, and
                talent. Our mission is to transform the entertainment industry
                by amplifying bold, Deaf-led narratives and connecting them with
                audiences worldwide.
              </p>
            </div>
            <div>
              <FaBullseye className="text-4xl mb-4" />
              <h3 className="text-xl font-[Cinzel] font-bold mb-2">
                VISION STATEMENT
              </h3>
              <p className="text-sm leading-relaxed">
                To be a global leader in Deaf-centered storytelling, where every
                production challenges industry norms and opens doors for Deaf
                artists to lead. Our long-term vision is to build a studio where
                Deaf expression flourishes, inspiring generations to come.
              </p>
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-[Cinzel] font-bold mb-8">
              AWARDS & MILESTONES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2 flex flex-col items-center gap-10 pt-2">
                {[...Array(5)].map((_, i) => (
                  <FaAward key={i} className="text-2xl" />
                ))}
              </div>
              <div className="md:col-span-10 flex flex-col gap-6">
                {[
                  "Since August featured in international festivals for its all-ASL dialogue",
                  "Featured in Entertainment Weekly, Film Monthly, and Variety",
                  "Strength in Silence in development with leading Deaf talent",
                  "Collaborations with Ged Dickersin and other industry leaders",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#264021] border border-white/20 rounded-xl px-6 py-4 shadow-inner text-sm leading-relaxed"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <FilmsSection />
      </div>

      {/* film section */}
      <section className="bg-[#421B03] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <h2 className="text-3xl md:text-4xl font-bold font-[Cinzel] mb-6">
            Strength in Silence (2026)
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#CCCCCC] mb-4">
            Mermaid Signature Production is a Deaf-owned, independent film
            company dedicated to producing original, thought-provoking stories
            that center on Deaf characters, culture, and language. We
            collaborate with diverse creative talent to reimagine what
            representation means in modern cinema.
          </p>
          <p className="italic text-[#F2BA35] text-sm md:text-base">
            Genre: Thriller | Status: In Development
          </p>
        </div>
      </section>
      <div>
        <BookSection />
      </div>
      <div>
        <LastSection />
      </div>
    </div>
  );
}

export default App;

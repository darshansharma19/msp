import heroImage from "../hero.jpg";
import FeaturedFilm from "../film";
import comingSoonBg from "../image.jpg";
import { FaFlask, FaBullseye, FaAward } from "react-icons/fa";
import FilmsSection from "../sec1";
import BookSection from "../sec2";
import LastSection from "../lastsection";


export const Home = () => {
  return (
    <div className="font-serif w-full max-w-full overflow-x-hidden">
      
      {/* "Landing" */}
      {/* <Route path="/"> */}
      {/* Hero Section */}
      <header
        id="home"
        className="min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center justify-center pt-24 sm:pt-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center px-2 sm:px-4 md:px-6 w-full">
          <h1
            className="font-[Cinzel] text-white uppercase font-extrabold drop-shadow-lg leading-tight tracking-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto"
          >
            <span className="block">CREATING BOLD STORIES</span>
            <span className="block">THAT REDEFINE DEAF</span>
            <span className="block">REPRESENTATION</span>
          </h1>
        </div>
      </header>
      {/* Welcome Section */}
      <section className="bg-[#421B03] text-white py-10 md:py-16 px-4 md:px-8 text-center">
        <h2 className="font-[Cinzel] text-xl sm:text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide text-[#F2BA35]">
          Welcome to Mermaid Signature Production
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-base sm:text-lg md:text-xl text-[#fff] leading-relaxed">
            where powerful, authentic Deaf-led narratives come to life. We are a
            Deaf-owned film production company committed to transforming
            Hollywood from within. Through bold storytelling and fearless
            artistic leadership, we spotlight the richness of Deaf culture and
            push the boundaries of what inclusive cinema looks like.
          </p>
        </div>
      </section>
      {/* Featured Film Section */}
      <FeaturedFilm />
      {/* {coming soon} */}
      {/* {coming soon} */}
      <section
        className="relative bg-cover bg-center text-white text-center py-16 sm:py-32 px-2 sm:px-6"
        style={{ backgroundImage: `url(${comingSoonBg})` }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed uppercase">
            Strength in Silence — A Groundbreaking Thriller from the Deaf
            Perspective. A story of survival, identity, and revolution
          </h2>

          <p className="text-2xl sm:text-4xl md:text-5xl mt-4 sm:mt-6 font-semibold">
            Coming Soon To Major Studios
          </p>

          <button className="mt-6 sm:mt-10 bg-[#F2BA35] text-white font-semibold px-4 sm:px-6 py-2 rounded-full shadow-lg hover:bg-white hover:text-[#F2BA35] transition">
            Watch Teaser
          </button>
        </div>
      </section>
      <section id="about" className="scroll-mt-24 bg-[#2C4728] text-white px-2 sm:px-8 py-10 sm:py-16 relative overflow-hidden">
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
            <div className="flex flex-col gap-4">
              {[
                "Since August featured in international festivals for its all-ASL dialogue",
                "Featured in Entertainment Weekly, Film Monthly, and Variety",
                "Strength in Silence in development with leading Deaf talent",
                "Collaborations with Ged Dickersin and other industry leaders",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
                >
                  <div className="flex justify-center md:justify-end md:w-1/12">
                    <FaAward className="text-2xl mx-auto" />
                  </div>
                  <div className="bg-[#264021] border border-white/20 rounded-xl px-6 py-4 shadow-inner text-sm leading-relaxed w-full">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="films" className="scroll-mt-24">
        <FilmsSection />
      </div>

      {/* film section */}
      <section id="film" className="scroll-mt-24 bg-[#421B03] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-[Cinzel] mb-4 sm:mb-6">
            Strength in Silence (2026)
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#CCCCCC] mb-2 sm:mb-4">
            Mermaid Signature Production is a Deaf-owned, independent film
            company dedicated to producing original, thought-provoking stories
            that center on Deaf characters, culture, and language. We
            collaborate with diverse creative talent to reimagine what
            representation means in modern cinema.
          </p>
          <p className="italic text-[#F2BA35] text-xs sm:text-sm md:text-base">
            Genre: Thriller | Status: In Development
          </p>
        </div>
      </section>
      <div id="books" className="scroll-mt-24">
        <BookSection />
      </div>
      <div className="scrollpress">
        <LastSection />
      </div>
    </div>
  );
};

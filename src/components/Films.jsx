import React from "react";
import film2 from "../film2.jpg";
import strengthImg from "../film1.jpg"; 
import sinceAugustImg from "../film3.jpg"; 
import logoImg from '../logo.png';

const Films = () => {
  return (
    <div className="min-h-screen w-full bg-[#421B03] font-serif flex flex-col justify-start items-center px-0 sm:px-0">
      {/* HERO SECTION */}
      <div className="w-full flex flex-col items-center justify-center pt-8 pb-2 sm:pt-12 sm:pb-4 mt-10">
        <h1 className="font-[Cinzel] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white uppercase mb-6 tracking-wide drop-shadow">
          METROPOLIS - THE REBOOT
        </h1>
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg relative mb-6 mx-auto">
          <img
            src={film2}
            alt="Metropolis Title"
            className="w-full h-auto object-cover"
            style={{ aspectRatio: "16/9" }}
          />
          <button className="absolute inset-0 flex items-center justify-center text-6xl text-[#F2BA35] bg-black/40 hover:bg-black/60 transition">
            <span className="drop-shadow">▶</span>
          </button>
        </div>
      </div>

      {/* LOG LINE, STATUS, GENRES, LANGUAGES */}
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-0 space-y-3 text-base md:text-lg">
        <div>
          <span className="font-bold text-[#F2BA35]">Logline: </span>
          <span className="text-white">
            In a sharply divided dystopia, the son of a powerful leader falls
            for a fearless woman from the working class who envisions a unifying
            champion. Their connection sparks a movement to dismantle class and
            gender oppression through a revolution grounded in empathy,
            identity, and the power of Deaf expression.
          </span>
        </div>
        <div>
          <span className="font-bold text-[#F2BA35]">Status: </span>
          <span className="text-white">In Development</span>
        </div>
        <div>
          <span className="font-bold text-[#F2BA35]">Genre & Tags: </span>
          <span className="text-white">
            Narrative Feature | Sci-Fi | Drama | Romance | Thriller | Dystopian
            | Deafhood | Revolution | Social Justice | Intersectionality | ASL
          </span>
        </div>
        <div>
          <span className="font-bold text-[#F2BA35]">
            Languages & Locations:{" "}
          </span>
          <span className="text-white">
            American Sign Language (ASL) | English · Atlanta, GA · Los Angeles,
            CA · New York, NY
          </span>
        </div>
      </div>

      {/* SYNOPSIS SECTION */}
      <div className="w-full max-w-3xl mx-auto bg-[#2C4728] rounded-xl p-6 sm:p-8 shadow-lg mt-8">
        <h2 className="font-[Cinzel] text-2xl font-bold uppercase text-[#F2BA35] mb-4 tracking-wide text-center">
          Synopsis:
        </h2>
        <div className="space-y-4 text-white text-base md:text-lg">
          <p>
            <em>Metropolis - The Reboot</em> reimagines the 1927 classic as a
            visionary story led by Deaf and marginalized voices. Set in a
            futuristic society where the privileged live above ground in
            opulence while the working class toils below, the city's peace is an
            illusion maintained by systemic control and silence.
          </p>
          <p>
            When Freder, the idealistic son of the city's chief architect, meets
            Maria—a bold Deaf woman from the lower sectors—his world cracks
            open. Maria, a teacher and empathetic leader, foresees the arrival
            of a bridge between the classes: a new kind of hero who listens with
            their eyes and leads with heart. She challenges Freder to see beyond
            his inherited privilege and join her cause.
          </p>
          <p>
            Together, they ignite a resistance movement that transcends spoken
            language and awakens a collective demand for change. Using ASL and
            visual communication, the revolutionaries defy surveillance and
            expose the emptiness of elitism. Maria becomes the face of a new
            era, proving that true leadership and connection come not from
            wealth or power, but from compassion, equity, and shared humanity.
          </p>
        </div>
      </div>

      {/* SNAPS SECTION */}
      <div className="w-full max-w-3xl mx-auto mt-12">
        <h2 className="font-[Cinzel] text-2xl font-bold uppercase text-center mb-6 tracking-wide text-white">
          Snaps from the project
        </h2>
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl h-40 bg-gray-200 rounded-xl flex items-center justify-center text-center text-2xl font-bold text-black border-2 border-blue-400 mb-2">
            METROPOLIS FILM IMAGES
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
            <div className="flex-1 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-center text-lg font-bold text-black">
              METROPOLIS FILM IMAGES
            </div>
            <div className="flex-1 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-center text-lg font-bold text-black">
              METROPOLIS FILM IMAGES
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#F2BA35] text-2xl">
              ★
            </span>
          ))}
        </div>
        <p className="text-white text-center max-w-xl mb-2">
          This retelling positions Deaf culture at the forefront of cinematic
          storytelling—celebrating ASL, challenging ableism, and breaking down
          social and gender hierarchies with unapologetic clarity and purpose.
        </p>
        <p className="italic text-[#F2BA35] text-sm text-center mt-2">
          Created by: Mermaid Signature Production
          <br />
          Founder: Antoinette Abbamonte
        </p>
      </div>
            {/* more poject  */}
      <section className="w-full bg-[#2C4728] mt-16 py-12 px-4">
        <h2 className="font-[Cinzel] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide text-center mb-10">
          View Similar Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* card 1 */}
          <div className="border border-[#4F6848] rounded-2xl p-4 bg-[#2C4728] hover:shadow-xl transition">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={strengthImg}
                alt="Strength in Silence"
                className="w-full object-cover h-56 sm:h-60 md:h-64"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Strength in Silence
            </h3>
            <p className="italic text-gray-300 text-sm">
              Genre: Thriller&nbsp;|&nbsp;Status: In Development
            </p>
          </div>

          {/* card 2 */}
          <div className="border border-[#4F6848] rounded-2xl p-4 bg-[#2C4728] hover:shadow-xl transition">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={sinceAugustImg}
                alt="Since August"
                className="w-full object-cover h-56 sm:h-60 md:h-64"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Since August
            </h3>
            <p className="italic text-gray-300 text-sm">
              Genre: Drama&nbsp;|&nbsp;Status: Released
            </p>
          </div>
        </div>
      </section>

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

export default Films;

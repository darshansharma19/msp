import React from "react";

const Films = () => {
  return (
    <div className="bg-[#421B03] min-h-screen pt-32 pb-12 px-4 text-white font-serif">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12">
        {/* Left: Title, logline, tags */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-[Cinzel] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-tight text-[#F2BA35]">
            METROPOLIS - THE REBOOT
          </h1>
          <div className="bg-[#2C4728] rounded-xl p-4 mb-4 shadow-lg">
            <span className="block font-bold text-[#F2BA35] mb-1">Logline:</span>
            <span>
              In a sharply divided dystopia, the son of a powerful leader falls for a fearless woman from the working class who envisions a unifying champion. Their connection sparks a movement to dismantle class and gender oppression through a revolution grounded in empathy, identity, and the power of Deaf expression.
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-[#F2BA35] text-black rounded-full px-4 py-1 text-xs font-bold">In Development</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Narrative Feature</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Sci-Fi</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Drama</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Romance</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Thriller</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Dystopian</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Deafhood</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Revolution</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Social Justice</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">Intersectionality</span>
            <span className="bg-[#2C4728] border border-[#F2BA35] rounded-full px-4 py-1 text-xs">ASL</span>
          </div>
          <div className="mt-4 text-sm">
            <span className="font-bold text-[#F2BA35]">Languages & Locations:</span>{" "}
            American Sign Language (ASL), English — Atlanta, GA · Los Angeles, CA · New York, NY
          </div>
        </div>
        {/* Right: Hero image */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src="./film2.jpg"
              alt="Metropolis Title"
              className="w-full object-cover"
              style={{ aspectRatio: "16/9" }}
            />
            <button className="absolute inset-0 flex items-center justify-center text-5xl text-[#F2BA35] bg-black/40 hover:bg-black/60 transition">
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* SYNOPSIS SECTION */}
      <section className="max-w-3xl mx-auto bg-[#2C4728] rounded-xl p-8 shadow-lg">
        <h2 className="font-[Cinzel] text-2xl font-bold uppercase text-[#F2BA35] mb-4 tracking-wide">Synopsis</h2>
        <div className="space-y-4">
          <p>
            <em>Metropolis - The Reboot</em> reimagines the 1927 classic as a visionary story led by Deaf and marginalized voices. Set in a futuristic society where the privileged live above ground in opulence while the working class toils below, the city's peace is an illusion maintained by systemic control and silence.
          </p>
          <p>
            When Freder, the idealistic son of the city’s chief architect, meets Maria—a bold Deaf woman from the lower sectors—his world cracks open. Maria, a teacher and empathic leader, foresees the arrival of a bridge between the classes: a new kind of hero who listens with their eyes and leads with heart. She challenges Freder to see beyond his inherited privilege and join her cause.
          </p>
          <p>
            Together, they ignite a resistance movement that transcends spoken language and awakens a collective demand for change. Using ASL and visual communication, the revolutionaries defy surveillance and expose the emptiness of elitism. Maria becomes the face of a new era, proving that true leadership and connection come not from wealth or power, but from compassion, equity, and shared humanity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Films;
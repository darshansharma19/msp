import { useState, useEffect } from "react";
import logo from "../logo.png";

const sections = ["Home", "Films", "Books", "About", "Press", "Contact"];
export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Scroll to section if hash is present
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-[#421B03] rounded-full px-4 py-2 shadow-lg flex items-center justify-between w-full max-w-5xl md:px-8 md:py-3">
      {/* Logo left */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
      </div>
      {/* Desktop nav links */}

      <ul
        className={`hidden md:flex gap-4 md:gap-8 text-white font-semibold tracking-wide text-xs md:text-sm`}
      >
        {sections.map((sec) => {
          const secLower = sec.toLowerCase();
          let isActive = false;
          if (typeof window !== "undefined") {
            if (
              secLower === "home" &&
              window.location.pathname === "/" &&
              (!window.location.hash || window.location.hash === "#home")
            )
              isActive = true;
            else if (
              (secLower === "films" || secLower === "books") &&
              window.location.pathname === `/${secLower}` &&
              !window.location.hash
            )
              isActive = true;
            else if (
              secLower !== "home" &&
              window.location.pathname === "/" &&
              window.location.hash === `#${secLower}`
            )
              isActive = true;
          }
          return (
            <li key={sec} className="relative">
              {secLower === "films" || secLower === "books" ? (
                <a
                  href={`/${secLower}`}
                  className={`hover:text-[#F2BA35] transition-colors ${
                    isActive ? "text-[#F2BA35]" : ""
                  }`}
                >
                  {sec.toUpperCase()}
                </a>
              ) : (
                <a
                  href={`/${secLower === "home" ? "" : `#${secLower}`}`}
                  className={`hover:text-[#F2BA35] transition-colors ${
                    isActive ? "text-[#F2BA35]" : ""
                  }`}
                  onClick={(e) => {
                    if (window.location.pathname !== "/") {
                      e.preventDefault();
                      window.location.href = `/${
                        secLower === "home" ? "" : `#${secLower}`
                      }`;
                    }
                    // If already on home, let the hash update and scroll
                  }}
                >
                  {sec.toUpperCase()}
                </a>
              )}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-[#F2BA35] rounded"></div>
              )}
            </li>
          );
        })}
      </ul>
      <button className="hidden md:inline-block ml-2 md:ml-4 bg-white text-[#000000] text-xs md:text-sm font-bold px-3 md:px-5 py-2 rounded-full shadow hover:bg-[#F2BA35] hover:text-white transition">
        SUPPORT US
      </button>

      {/* Hamburger for mobile - right side */}
      <button
        className="md:hidden text-white focus:outline-none ml-2"
        aria-label="Toggle navigation"
        onClick={() => setNavOpen(!navOpen)}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile nav dropdown */}
      {navOpen && (
        <div className="absolute top-full left-0 w-full bg-[#421B03] rounded-b-2xl shadow-md md:hidden flex flex-col items-center py-2 z-50 animate-fade-in">
          <ul className="flex flex-col gap-3 text-white font-semibold tracking-wide text-base w-full text-center">
            {sections.map((sec) => {
              const secLower = sec.toLowerCase();
              let isActive = false;
              if (typeof window !== "undefined") {
                if (
                  secLower === "home" &&
                  window.location.pathname === "/" &&
                  (!window.location.hash || window.location.hash === "#home")
                )
                  isActive = true;
                else if (
                  (secLower === "films" || secLower === "books") &&
                  window.location.pathname === `/${secLower}` &&
                  !window.location.hash
                )
                  isActive = true;
                else if (
                  secLower !== "home" &&
                  window.location.pathname === "/" &&
                  window.location.hash === `#${secLower}`
                )
                  isActive = true;
              }
              return (
                <li key={sec} className="relative">
                  {secLower === "films" || secLower === "books" ? (
                    <a
                      href={`/${secLower}`}
                      className={`block py-2 hover:text-[#F2BA35] transition-colors ${
                        isActive ? "text-[#F2BA35]" : ""
                      }`}
                      onClick={() => setNavOpen(false)}
                    >
                      {sec.toUpperCase()}
                    </a>
                  ) : (
                    <a
                      href={`/${secLower === "home" ? "" : `#${secLower}`}`}
                      className={`block py-2 hover:text-[#F2BA35] transition-colors ${
                        isActive ? "text-[#F2BA35]" : ""
                      }`}
                      onClick={(e) => {
                        setNavOpen(false);
                        if (window.location.pathname !== "/") {
                          e.preventDefault();
                          window.location.href = `/${
                            secLower === "home" ? "" : `#${secLower}`
                          }`;
                        }
                      }}
                    >
                      {sec.toUpperCase()}
                    </a>
                  )}
                  {isActive && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-1 bg-[#F2BA35] rounded"></div>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            className="mt-2 bg-white text-[#000000] text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-[#F2BA35] hover:text-white transition w-5/6 mx-auto"
            onClick={() => setNavOpen(false)}
          >
            SUPPORT US
          </button>
        </div>
      )}
    </nav>
  );
};

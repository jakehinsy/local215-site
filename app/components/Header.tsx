"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About",     href: "#about"     },
  { label: "Community", href: "#community" },
  { label: "Store",     href: "#store"     },
  { label: "Contact",   href: "#contact"   },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-brand-red">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + title lockup */}
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Milwaukee Professional Firefighters Association — home"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="IAFF Local 215 logo"
              width={300}
              height={300}
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain flex-shrink-0"
              priority
            />
            {/* Mobile: compact two-line identity */}
            <div className="flex flex-col leading-tight md:hidden">
              <span className="text-brand-gold text-sm font-bold tracking-widest uppercase">
                Local 215
              </span>
              <span className="text-zinc-300 text-xs font-medium tracking-wide">
                Milwaukee Firefighters
              </span>
            </div>
            {/* Desktop: full name */}
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-white font-bold text-sm lg:text-base tracking-wide uppercase leading-snug">
                Milwaukee Professional Firefighters
              </span>
              <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
                IAFF Local 215
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              /* Close icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-zinc-800 bg-black"
        >
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center w-full px-2 py-4 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded transition-colors border-b border-zinc-800/60 last:border-b-0"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

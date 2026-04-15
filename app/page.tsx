import Image from "next/image";

const STORE_URL = "https://milw-firefighter-charitable-foundation.square.site/";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CommunitySection />
        <StoreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HEADER
───────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-brand-red">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo + title lockup */}
          <a href="#" className="flex items-center gap-3" aria-label="Milwaukee Professional Firefighters Association — home">
            <Image
              src="/logo.png"
              alt="IAFF Local 215 logo"
              width={300}
              height={300}
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm sm:text-base tracking-wide uppercase leading-snug">
                Milwaukee Professional Firefighters
              </span>
              <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
                IAFF Local 215
              </span>
            </div>
          </a>

          {/* Nav */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 sm:gap-2">
              {[
                { label: "About",     href: "#about"     },
                { label: "Community", href: "#community" },
                { label: "Store",     href: "#store"     },
                { label: "Contact",   href: "#contact"   },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative bg-black text-white"
      aria-labelledby="hero-heading"
    >
      {/* Radial red glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,0,0,0.45),transparent)] pointer-events-none"
        aria-hidden="true"
      />
      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Logo */}
          <div className="mb-7 p-4 rounded-full bg-white/5 border border-white/10 ring-1 ring-brand-gold/20">
            <Image
              src="/logo.png"
              alt="IAFF Local 215 — Milwaukee Professional Firefighters Association"
              width={300}
              height={300}
              className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-gold text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
            Serving Milwaukee Since 1918
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Serving and Protecting{" "}
            <span className="text-brand-red">Milwaukee</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            Milwaukee Professional Firefighters Association — IAFF Local 215 —
            represents the dedicated men and women who run toward danger so our
            city stays safe. Rooted in Milwaukee. Committed to our communities.
            On duty around the clock.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              Shop the Store
            </a>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              Support the Foundation
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-brand-red text-xs font-bold tracking-widest uppercase mb-3">
            About Local 215
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-black leading-tight mb-6"
          >
            Milwaukee's Firefighters — Professional, Proud, Present
          </h2>
          <div className="space-y-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
            <p>
              The Milwaukee Professional Firefighters Association, IAFF Local
              215, has represented Milwaukee's firefighters for over a century.
              Our members serve every corner of this city — from the lakefront to
              the neighborhoods — ready around the clock.
            </p>
            <p>
              We are affiliated with the International Association of Fire
              Fighters, the unified voice of professional firefighters across
              North America. Our union fights for safe working conditions, modern
              equipment, and adequate staffing — because protecting firefighters
              means protecting Milwaukee.
            </p>
            <p>
              Beyond the firehouse, Local 215 is deeply active in the community:
              supporting local charities, partnering with neighborhood
              organizations, and showing up for the city we call home.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-200">
          {[
            { stat: "100+", label: "Years Serving Milwaukee" },
            { stat: "IAFF", label: "International Affiliate" },
            { stat: "24 / 7", label: "Always On Duty" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-red">
                {stat}
              </p>
              <p className="mt-1 text-sm sm:text-base text-zinc-500 font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMMUNITY
───────────────────────────────────────────── */
function CommunitySection() {
  const cards = [
    {
      icon: "🏘️",
      title: "Community Support",
      body: "Local 215 members show up for Milwaukee neighborhoods year-round — from fire safety education programs to volunteering with local organizations. Our commitment doesn't clock out when the shift ends.",
    },
    {
      icon: "❤️",
      title: "Charitable Foundation",
      body: "The Milwaukee Firefighter Charitable Foundation supports families in need across the greater Milwaukee area. Proceeds from our merchandise store fund community programs and direct charitable giving.",
    },
    {
      icon: "🚒",
      title: "Local Firefighter Pride",
      body: "We carry a century-long tradition of service and sacrifice with pride. Milwaukee firefighters wear that badge with honor — and this union has their back every step of the way.",
    },
  ];

  return (
    <section
      id="community"
      className="bg-zinc-950 text-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="community-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3">
            Community
          </p>
          <h2
            id="community-heading"
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
          >
            More Than a Union —{" "}
            <span className="text-brand-red">Part of the City</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-zinc-900 border border-zinc-800 hover:border-brand-red/50 rounded-xl p-6 transition-colors"
            >
              <span className="text-3xl mb-4 block" aria-hidden="true">{icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STORE / FOUNDATION
───────────────────────────────────────────── */
function StoreSection() {
  return (
    <section
      id="store"
      className="bg-brand-red text-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="store-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3">
            Store & Foundation
          </p>
          <h2
            id="store-heading"
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
          >
            Wear the Badge. Support the Cause.
          </h2>
          <p className="text-red-100 text-base sm:text-lg leading-relaxed mb-8">
            Official Local 215 merchandise is available through the Milwaukee
            Firefighter Charitable Foundation store. Every purchase directly
            supports community programs and charitable giving throughout the
            Milwaukee area. Show your pride and make a difference.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black hover:bg-zinc-900 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
          >
            Visit the Foundation Store →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-brand-red text-xs font-bold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-black leading-tight mb-5"
          >
            Get in Touch
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8">
            Have a question for Local 215? Want to learn more about our union or
            the Charitable Foundation? We'd love to hear from you.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red text-base" aria-hidden="true">
                ✉
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-800">General Inquiries</p>
                <p className="text-zinc-500 text-sm mt-0.5">
                  contact@local215.org{" "}
                  <span className="text-zinc-400">(placeholder)</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red text-base" aria-hidden="true">
                📍
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-800">Location</p>
                <p className="text-zinc-500 text-sm mt-0.5">Milwaukee, Wisconsin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo + branding */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="IAFF Local 215 logo"
              width={300}
              height={300}
              className="h-8 w-8 object-contain opacity-90"
            />
            <div>
              <p className="text-white font-bold text-sm tracking-wide uppercase leading-snug">
                Milwaukee Professional Firefighters Association
              </p>
              <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mt-0.5">
                IAFF Local 215
              </p>
            </div>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 text-sm">
              {[
                { label: "About",     href: "#about"     },
                { label: "Community", href: "#community" },
                { label: "Store",     href: STORE_URL,   external: true },
                { label: "Contact",   href: "#contact"   },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} Milwaukee Professional Firefighters Association, IAFF Local 215.
            All rights reserved.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            Shop the Foundation Store →
          </a>
        </div>

      </div>
    </footer>
  );
}

import Image from "next/image";
import Header from "./components/Header";

const STORE_URL = "https://milw-firefighter-charitable-foundation.square.site/";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ApparatusSection />
        <CommunitySection />
        <AltSection />
        <StoreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <Image
        src="/hero.jpg"
        alt="Milwaukee firefighters on duty"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* Centered red glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(139,0,0,0.18),transparent)]"
        aria-hidden="true"
      />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold" aria-hidden="true" />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight drop-shadow-lg"
          >
            Milwaukee Professional <br />
            Firefighters Association
          </h1>

          <p className="mt-8 text-base sm:text-lg text-zinc-200 leading-relaxed drop-shadow max-w-lg">
            Representing the firefighters who protect Milwaukee through service, advocacy, and brotherhood.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark border border-brand-red hover:border-brand-red-dark text-white font-semibold rounded-lg transition-colors text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
            >
              Shop the Store
            </a>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Support the Foundation
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
            className="text-3xl sm:text-4xl font-extrabold text-black leading-tight mb-8"
          >
            Professional Firefighters — A Legacy of Service
          </h2>
          <div className="space-y-6 text-zinc-600 text-base sm:text-lg leading-relaxed">
            <p>
              The Milwaukee Professional Firefighters Association, IAFF Local
              215, has represented the city's firefighters for more than a
              century. Our members serve every corner of Milwaukee — from the
              lakefront to the neighborhoods — ready around the clock.
            </p>
            <p>
              Affiliated with the International Association of Fire Fighters, we
              serve as the unified voice for professional firefighters across
              North America. Our union advocates for the safe working conditions,
              modern equipment, and adequate staffing necessary to protect both
              our members and the citizens of Milwaukee.
            </p>
            <p>
              Beyond the firehouse, Local 215 maintains a deep-rooted presence
              in the community, supporting local charities and partnering with
              organizations to strengthen the city we call home.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-zinc-200">
          {[
            { stat: "1919", label: "Founded" },
            { stat: "IAFF", label: "International Affiliate"  },
            { stat: "24 / 7", label: "Always On Duty"         },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-red tracking-tight">{stat}</p>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 font-bold uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   APPARATUS  (side-by-side on desktop)
───────────────────────────────────────────── */
function ApparatusSection() {
  return (
    <section className="bg-zinc-950 text-white overflow-hidden" aria-labelledby="apparatus-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-16">

          {/* Photo — full bleed edge on desktop */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto lg:min-h-[520px] rounded-xl lg:rounded-none overflow-hidden flex-shrink-0
                          lg:-ml-4 lg:pl-0">
            <Image
              src="/apparatus.jpg"
              alt="Milwaukee fire apparatus and crew"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* subtle vignette toward the text side */}
            <div
              className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-transparent to-zinc-950/60"
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center lg:w-1/2 lg:py-20">
            <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3">
              Apparatus & Operations
            </p>
            <h2
              id="apparatus-heading"
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
            >
              First-In, Every Time
            </h2>
            <div className="space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
              <p>
                Milwaukee's firefighters respond to thousands of calls each year
                — structure fires, medical emergencies, hazardous conditions, and
                more. Our members train relentlessly to be ready for whatever the
                city demands.
              </p>
              <p>
                Local 215 advocates for modern, well-maintained apparatus and
                equipment so our crews can do their jobs safely and effectively.
                When the tones drop, Milwaukee's best are ready.
              </p>
            </div>
          </div>

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-y-10 lg:gap-y-0 lg:gap-x-12 items-start">

          {/* ── Headline Column ── */}
          <div className="order-2 lg:order-1 lg:col-start-1 lg:row-start-1 min-w-0">
            <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3">
              Community
            </p>
            <h2
              id="community-heading"
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-8"
            >
              More Than a Union —{" "}
              <span className="text-brand-red">Part of the City</span>
            </h2>
          </div>

          {/* ── Image Column ── */}
          <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-2 lg:self-center flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px] sm:max-w-[340px] lg:w-[300px]">
              <Image
                src="/community.jpg"
                alt="Milwaukee firefighter assisting a community member"
                width={2613}
                height={3920}
                className="w-full h-auto rounded-2xl shadow-2xl"
                sizes="(max-width: 1024px) 340px, 300px"
              />
            </div>
          </div>

          {/* ── Cards Column ── */}
          <div className="order-3 lg:order-3 lg:col-start-1 lg:row-start-2 min-w-0">
            <div className="grid grid-cols-1 gap-5">
              {cards.map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="bg-zinc-900 border border-zinc-800 hover:border-brand-red/50 rounded-xl p-6 transition-colors"
                >
                  <span className="text-2xl mb-3 block" aria-hidden="true">{icon}</span>
                  <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ALT  (full-bleed divider / quote section)
───────────────────────────────────────────── */
function AltSection() {
  return (
    <section
      className="relative min-h-[320px] sm:min-h-[380px] flex items-center overflow-hidden"
      aria-label="Milwaukee firefighters in action"
    >
      <Image
        src="/alt.jpg"
        alt="Milwaukee fire department in action"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Quote / callout */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          {/* Gold rule */}
          <div className="w-12 h-1 bg-brand-gold mb-6" aria-hidden="true" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight drop-shadow-lg">
            "The bravest are surely those who have the clearest vision of what
            is before them — and still go out and meet it."
          </blockquote>
          <p className="mt-5 text-zinc-400 text-sm sm:text-base font-medium tracking-wide uppercase">
            Milwaukee Fire Department — IAFF Local 215
          </p>
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
              <span
                className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red text-base"
                aria-hidden="true"
              >
                📞
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-800">Local 215 Office</p>
                <a
                  href="tel:14142598000"
                  className="text-zinc-500 text-sm mt-0.5 hover:text-zinc-800 transition-colors"
                >
                  (414) 259-8000
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red text-base"
                aria-hidden="true"
              >
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
              <p className="text-white font-bold text-lg tracking-[0.15em] uppercase leading-none">
                MPFA
              </p>
              <p className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase mt-1">
                IAFF Local 215
              </p>
            </div>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 text-sm">
              {[
                { label: "About",     href: "#about"    },
                { label: "Community", href: "#community"},
                { label: "Store",     href: STORE_URL,  external: true },
                { label: "Contact",   href: "#contact"  },
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
            &copy; {new Date().getFullYear()} MPFA (IAFF Local 215).
            All rights reserved.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            Support Our Foundation →
          </a>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="iletisim" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4">
            İletişim
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text)]">
            Bize Ulaşın
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Contact info & form */}
          <div className="reveal">
            {/* Info */}
            <div className="space-y-6 mb-12">
              {/* Phone */}
              <a
                href="tel:+442034891051"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Telefon</p>
                  <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    +44 203 489 1051
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Adres</p>
                  <p className="font-medium text-[var(--color-text)]">
                    8 Kingsland Rd, London E2 8DA
                  </p>
                </div>
              </div>

              {/* Google Maps button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=8+Kingsland+Rd+London+E2+8DA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Google Maps&apos;te Aç
              </a>
            </div>

            {/* Contact form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Mesajınız"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium py-4 rounded-full hover:scale-[1.02] hover:shadow-xl hover:brightness-110 transition-all duration-300"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Right — Google Map + Business Hours */}
          <div className="reveal reveal-delay-1">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden flex flex-col">
              {/* Google Maps embed */}
              <div className="flex-1 min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8!2d-0.0765!3d51.5285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb7c1f1b26f%3A0x0!2s8+Kingsland+Rd%2C+London+E2+8DA!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baba Barbers Konum"
                  className="rounded-t-2xl"
                />
              </div>

              {/* Business hours panel */}
              <div className="bg-[var(--color-primary)] p-6 lg:p-8 rounded-b-2xl border-2 border-t-0 border-[var(--color-accent)]/20">
                <p className="font-[family-name:var(--font-playfair)] text-white text-lg font-semibold mb-4">
                  Çalışma Saatleri
                </p>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Pazartesi — Cuma</span>
                    <span className="text-white font-medium">09:00 — 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Cumartesi</span>
                    <span className="text-white font-medium">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Pazar</span>
                    <span className="text-white font-medium">10:00 — 17:00</span>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="tel:+442034891051"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                    aria-label="Telefon"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

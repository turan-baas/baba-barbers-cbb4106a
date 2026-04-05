"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
    title: "Klasik Saç Kesimi",
    description:
      "Yüz şeklinize ve tarzınıza uygun, ustaca yapılan saç kesimleri. Fade, taper, pompadour veya klasik kesim — her stili profesyonelce uyguluyoruz.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&h=300&fit=crop&crop=center",
    imageAlt: "Profesyonel fade saç kesimi sonucu",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Sakal Bakımı & Tıraş",
    description:
      "Geleneksel ustura tıraşı ve detaylı sakal şekillendirme. Sıcak havlu uygulaması ve özel bakım ürünleriyle tamamlanan lüks bir deneyim.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&h=300&fit=crop&crop=center",
    imageAlt: "Geleneksel ustura ile sakal tıraşı",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "VIP Komple Bakım",
    description:
      "Saç kesimi, sakal düzeltme, yüz bakımı ve sıcak havlu masajını kapsayan tam paket. Kendinizi yenilenmiş hissedeceğiniz özel bir seans.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=300&fit=crop&crop=center",
    imageAlt: "VIP berber bakım deneyimi sıcak havlu uygulaması",
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="hizmetler" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4">
            Hizmetlerimiz
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text)]">
            Uzman Ellerde Fark Yaratın
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group border border-neutral-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/40`}
            >
              {/* Service photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-accent)]">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-semibold text-lg text-[var(--color-text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-[1.8]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <p className="text-[var(--color-text-muted)] mb-6">
            Tüm hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <a
            href="#iletisim"
            className="inline-block bg-[var(--color-primary)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
          >
            Bilgi Alın
          </a>
        </div>
      </div>
    </section>
  );
}

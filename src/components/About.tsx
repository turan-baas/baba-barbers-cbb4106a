"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="hakkimizda" className="py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text column — 3/5 */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4">
              Hakkımızda
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-8 leading-tight">
              Zanaat, Tutku ve<br />
              Yılların Deneyimi
            </h2>
            <div className="space-y-6 text-[1.125rem] leading-[1.8] text-[var(--color-text-muted)]">
              <p>
                Kingsland Road&apos;un canlı atmosferinde, Baba Barbers olarak yıllardır
                Doğu Londra&apos;nın güvenilir berber durağıyız. Shoreditch&apos;in yaratıcı
                enerjisinden ilham alarak, her müşterimize kişiye özel bir deneyim
                sunuyoruz.
              </p>
              <p>
                Bizim için berberlik sadece bir saç kesimi değil — bir zanaat, bir sohbet,
                bir gelenek. Ustalarımız klasik berber tekniklerini modern trendlerle
                harmanlayarak, koltuğumuza oturan herkesin kendini özel hissetmesini
                sağlıyor.
              </p>
              <p>
                İster klasik bir fade kesim, ister geleneksel ustura ile sakal düzeltme
                olsun, Baba Barbers&apos;da detaylara gösterdiğimiz özen farkımızı ortaya
                koyuyor. Sizi de ailemize bekliyoruz.
              </p>
            </div>
          </div>

          {/* Photo column — 2/5 */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585747860019-8e8ef3fa17d4?w=600&h=750&fit=crop&crop=center"
                  alt="Baba Barbers dükkanında bir berber müşterisine hizmet veriyor"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Rating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-accent)]">4</span>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-[var(--color-accent)]/30" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-[var(--color-text-muted)] text-[0.65rem] uppercase tracking-[0.1em] mt-0.5">Google</p>
                  </div>
                </div>
              </div>
              {/* Secondary image — overlapping bottom-right */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[var(--color-bg)]">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=300&fit=crop&crop=center"
                  alt="Berber aletleri ve makaslar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

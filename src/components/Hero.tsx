"use client";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-primary)]"
    >
      {/* Background subtle effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.1) 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-transparent rotate-[15deg] origin-top" />
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent -rotate-[10deg] origin-top" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="text-center lg:text-left">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.25em] font-medium mb-8">
              Premium Berber Deneyimi
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-white text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold leading-[1.05] tracking-[-0.03em] mb-8">
              Baba{" "}
              <span className="text-[var(--color-accent)]">Barbers</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-[family-name:var(--font-inter)] font-normal max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Geleneksel berber sanatını modern tarzla buluşturuyoruz. Londra&apos;nın kalbinde, size özel bir bakım deneyimi.
            </p>

            <a
              href="#iletisim"
              className="inline-block bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
            >
              Randevu Al
            </a>
          </div>

          {/* Image column */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=850&fit=crop&crop=center"
                alt="Berber koltuğunda profesyonel saç kesimi yapılıyor"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
            {/* Decorative accent frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-accent)]/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent" />
      </div>
    </section>
  );
}

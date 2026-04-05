export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left — Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">
              <span className="text-[var(--color-accent)]">Baba</span> Barbers
            </h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Geleneksel berber sanatını modern tarzla buluşturan, Londra&apos;nın güvenilir adresi.
            </p>
          </div>

          {/* Center — Links */}
          <div>
            <h4 className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-6">
              Hızlı Bağlantılar
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#anasayfa", label: "Ana Sayfa" },
                { href: "#hakkimizda", label: "Hakkımızda" },
                { href: "#hizmetler", label: "Hizmetler" },
                { href: "#yorumlar", label: "Yorumlar" },
                { href: "#iletisim", label: "İletişim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-[var(--color-accent)] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right — Contact */}
          <div>
            <h4 className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-6">
              İletişim Bilgileri
            </h4>
            <div className="space-y-3 text-sm text-white/50">
              <a
                href="tel:+442034891051"
                className="block hover:text-[var(--color-accent)] transition-colors"
              >
                +44 203 489 1051
              </a>
              <p>8 Kingsland Rd</p>
              <p>London E2 8DA</p>
              <p>Birleşik Krallık</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Baba Barbers. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs">
            Londra, Birleşik Krallık
          </p>
        </div>
      </div>
    </footer>
  );
}

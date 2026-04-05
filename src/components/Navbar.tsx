"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F2]/95 shadow-md backdrop-blur-[12px]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#anasayfa"
          className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight"
        >
          <span className="text-[var(--color-accent)]">Baba</span>{" "}
          <span className={scrolled ? "text-[var(--color-primary)]" : "text-white"}>
            Barbers
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="bg-[var(--color-accent)] text-white text-[0.8rem] uppercase tracking-[0.15em] font-medium px-7 py-3 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            İletişim
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-60"
          aria-label="Menüyü aç"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-[5px] bg-white"
                : scrolled
                ? "bg-[var(--color-primary)]"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-[var(--color-primary)]"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-[5px] bg-white"
                : scrolled
                ? "bg-[var(--color-primary)]"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 bg-[var(--color-primary)]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-white text-2xl font-[family-name:var(--font-playfair)] font-semibold mb-8 hover:text-[var(--color-accent)] transition-colors ${
              menuOpen ? "menu-item-enter" : ""
            }`}
            style={{ animationDelay: menuOpen ? `${i * 100 + 200}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#iletisim"
          onClick={() => setMenuOpen(false)}
          className={`mt-4 bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] transition-all ${
            menuOpen ? "menu-item-enter" : ""
          }`}
          style={{ animationDelay: menuOpen ? `${navLinks.length * 100 + 200}ms` : "0ms" }}
        >
          Randevu Al
        </a>
      </div>
    </header>
  );
}

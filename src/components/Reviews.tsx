"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const reviews = [
  {
    text: "Londra'da birçok berbere gittim ama Baba Barbers kadar detaylara önem veren başka bir yer bulamadım. Her seferinde mükemmel bir kesimle çıkıyorum.",
    name: "Emre K.",
    label: "Google Yorumu",
  },
  {
    text: "Harika atmosfer, samimi ekip ve gerçekten kaliteli iş. Sakal tıraşı için sıcak havlu uygulaması muhteşem. Kesinlikle tavsiye ederim.",
    name: "Ali Demir",
    label: "Google Yorumu",
  },
  {
    text: "Mahallenin en iyi berberi demek az kalır. Her zaman randevusuz da gelebiliyorsunuz ve sonuç her seferinde aynı: kusursuz. Teşekkürler Baba Barbers!",
    name: "Mehmet Y.",
    label: "Google Yorumu",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className || ""}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="yorumlar" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Rating header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4">
            Yorumlar
          </p>
          <div className="font-[family-name:var(--font-playfair)] text-[6rem] font-bold text-[var(--color-accent)] leading-none mb-4">
            4
          </div>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(4)].map((_, i) => (
              <StarIcon key={i} className="text-[var(--color-accent)]" />
            ))}
            <StarIcon className="text-[var(--color-accent)]/30" />
          </div>
          <p className="text-[var(--color-text-muted)] text-sm">
            Google üzerinden değerlendirildi
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-[var(--color-accent)] opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-[var(--color-text)] italic leading-[1.8] mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">
                    {review.name}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-xs">
                    {review.label}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="text-[var(--color-accent)]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

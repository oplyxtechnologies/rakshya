// app/your-gift/page.tsx
"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Petal = {
  left: string;
  size: number;
  delay: string;
  fall: string;
  sway: string;
  opacity: number;
};

function genPetals(count = 28): Petal[] {
  return Array.from({ length: count }).map((_, i) => ({
    left: `${(i / count) * 100 + (Math.random() * 3 - 1.5)}vw`,
    size: 18 + Math.round(Math.random() * 16),
    delay: `${Math.random() * 6}s`,
    fall: `${12 + Math.random() * 10}s`,
    sway: `${4 + Math.random() * 5}s`,
    opacity: 0.7 + Math.random() * 0.3,
  }));
}

const slides = [
  "/images/memory-1.jpg",
  "/images/memory-2.jpg",
  "/images/memory-3.jpg",
]; // replace with your images

export default function GiftPage() {
  const [mounted, setMounted] = useState(false);
  const [i, setI] = useState(0);

  // petals only after mount (avoid hydration mismatch)
  const [petals, setPetals] = useState<Petal[]>([]);
  useEffect(() => {
    setMounted(true);
    setPetals(genPetals(28));
  }, []);

  // slideshow auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const current = slides[i];
  const next = slides[(i + 1) % slides.length];

  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Background petals */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        suppressHydrationWarning
      >
        {mounted &&
          petals.map((p, idx) => (
            <span
              key={idx}
              className="absolute"
              style={{ left: p.left, top: "-10vh", opacity: p.opacity }}
            >
              <span
                className="block will-change-transform"
                style={{
                  animation: `petal-sway ${p.sway} ease-in-out ${p.delay} infinite`,
                }}
              >
                <span
                  className="block will-change-transform"
                  style={{
                    animation: `petal-fall ${p.fall} linear ${p.delay} infinite`,
                  }}
                >
                  <Image
                    src="/images/mypetal.svg" // your custom petal svg
                    alt=""
                    width={p.size}
                    height={p.size}
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] select-none"
                    draggable={false}
                  />
                </span>
              </span>
            </span>
          ))}
      </div>

      {/* Center card */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Message */}
          <div className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur">
            <h1 className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              This Website Is My Gift to You
            </h1>
            <p className="mt-4 text-neutral-700">
              Every photo, every line, and every little petal is a thank you for
              you. Happy Rakshya Bandhan — today and always. ❤️
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-full bg-white px-5 py-2 text-pink-600 ring-1 ring-pink-200 transition hover:scale-105 hover:bg-pink-50"
              >
                Back to Home
              </a>
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative aspect-[7/9] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
            {/* current */}
            <Image
              key={current + "-curr"}
              src={current}
              alt="Memory"
              fill
              className="object-cover opacity-100 transition-opacity duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* next (crossfade) */}
            <Image
              key={next + "-next"}
              src={next}
              alt=""
              fill
              className="object-cover opacity-0 animate-[fadeIn_0.7s_ease]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Local keyframes (only if you don't already have them globally) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}

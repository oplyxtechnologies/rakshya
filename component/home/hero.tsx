"use client";
import Image from "next/image";
import { useMemo } from "react";

export default function HeroSection() {
  const petals = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        left: `${(i / 24) * 100 + (Math.random() * 3 - 1.5)}vw`,
        size: 18 + Math.round(Math.random() * 16), // px width for your SVG
        delay: `${Math.random() * 6}s`,
        fall: `${12 + Math.random() * 10}s`,
        sway: `${4 + Math.random() * 5}s`,
        opacity: 0.7 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sister-hero.jpg" // ← change to your bg
          alt="A warm memory with my sister"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Petals */}
      <div className="pointer-events-none absolute inset-0">
        {petals.map((p, idx) => (
          <span
            key={idx}
            className="absolute"
            style={{ left: p.left, top: "-10vh", opacity: p.opacity }}
          >
            {/* Outer span handles sway (X) */}
            <span
              className="block will-change-transform"
              style={{
                animation: `petal-sway ${p.sway} ease-in-out ${p.delay} infinite`,
              }}
            >
              {/* Inner span handles fall + rotation (Y + rotate) */}
              <span
                className="block will-change-transform"
                style={{
                  animation: `petal-fall ${p.fall} linear ${p.delay} infinite`,
                }}
              >
                <Image
                  src="/images/mypetal.svg" // ← your custom SVG goes here
                  alt="Petal"
                  width={p.size}
                  height={p.size} // SVG keeps aspect ratio; adjust if needed
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] select-none"
                  draggable={false}
                  priority={idx < 6} // prefetch a few for smoother start
                />
              </span>
            </span>
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          For My Sister My Forever Friend
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          A small corner of the internet to say what I do not always say out
          loud. Thank you for being my constant my chaos and my calm.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#journey"
            className="rounded-xl bg-white/15 px-5 py-3 text-sm backdrop-blur transition hover:bg-white/25"
          >
            Our Journey
          </a>
          <a
            href="#letter"
            className="rounded-xl bg-pink-500/80 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-pink-500"
          >
            Read My Letter
          </a>
        </div>
      </div>
    </section>
  );
}

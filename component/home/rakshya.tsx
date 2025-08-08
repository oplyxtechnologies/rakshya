"use client";
import Image from "next/image";

export default function RakshyaBandhanSection() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-gradient-to-b from-pink-50 to-white px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Message */}
          <div className="flex flex-col items-start justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-200">
              Rakshya Bandhan
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Happy Rakshya Bandhan
            </h2>
            <p className="mt-4 text-neutral-700">
              For all the times you&apos;ve been my strength and my smile —
              today is a small thank you for a bond that only grows stronger.
            </p>
            <div className="mt-6 h-px w-24 bg-pink-200" />
            <p className="mt-4 text-sm text-neutral-500">With love, always.</p>
          </div>

          {/* Right: Single festive image */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden ">
            <Image
              src="/images/rakshya-hero.png"
              alt="Rakshya Bandhan celebration"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

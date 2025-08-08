"use client";
import { useRouter } from "next/navigation";

export default function EndingSection() {
  const router = useRouter();

  return (
    <section className="relative flex h-screen items-center justify-center bg-gradient-to-b from-white to-pink-50 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
          This Website Is My Gift to You
        </h2>
        <p className="mt-6 text-lg text-neutral-700">
          Every word, every photo, and every petal here is a piece of my heart.
          You mean the world to me, and I wanted to create something that lasts
          — just like our bond.
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          Happy Rakshya Bandhan ❤️
        </p>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <div className="h-px w-24 bg-pink-300" />
        </div>

        {/* Final Gift Button */}
        <div className="mt-8">
          <button
            onClick={() => router.push("/your-gift")} // <-- Create this route for the final reveal
            className="rounded-full bg-pink-500 px-6 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-pink-600 hover:shadow-xl"
          >
            🎁 Open Your Gift
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs text-neutral-400">
          Made with love, just for you.
        </p>
      </div>
    </section>
  );
}

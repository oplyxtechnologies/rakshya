"use client";
import { Heart, Shield, Gift, Smile } from "lucide-react";

const promises = [
  { icon: Heart, text: "Love you always" },
  { icon: Shield, text: "Protect our bond" },
  { icon: Gift, text: "Be there in every moment" },
  { icon: Smile, text: "Make you smile" },
];

export default function PromiseSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-neutral-800 sm:text-4xl">
          My Promise to You
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {promises.map((p, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 rounded-2xl bg-pink-50 p-6 shadow-sm ring-1 ring-pink-100 transition hover:scale-105 hover:shadow-md"
            >
              <p.icon className="h-10 w-10 text-pink-500" />
              <span className="text-base font-medium text-neutral-700">
                {p.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

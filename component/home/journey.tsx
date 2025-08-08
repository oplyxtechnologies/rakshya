"use client";
import Image from "next/image";

const moments = [
  { year: "2004", image: "/images/memory-8.jpg" },
  { year: "I dont know which year is this", image: "/images/memory-6.jpg" },
  { year: "2015", image: "/images/memory-1.jpg" },
  { year: "2017", image: "/images/memory-2.jpg" },
  { year: "2018", image: "/images/memory-3.jpg" },
  { year: "2018", image: "/images/memory-4.jpg" },
  { year: "2021", image: "/images/memory-5.jpg" },
  { year: "2023", image: "/images/2022.jpg" },
];

export default function JourneySection() {
  return (
    <section id="journey" className=" bg-[#58434e] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {moments.map((m, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-md border-4  border-pink-200"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={m.image}
                  alt={m.year}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105  "
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={idx < 2}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-pink-400/60 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
                {m.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

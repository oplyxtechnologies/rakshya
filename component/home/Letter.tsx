"use client";

export default function LetterSection() {
  return (
    <section id="letter" className="relative bg-pink-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl bg-white/80 p-10 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-neutral-700">
            Dear Sister,
            <br />
            <br />
            No matter where life takes us, you’ll always be my safe place, my
            partner in mischief, and my forever friend. This is just a small way
            to remind you of how much you mean to me — today and always.
            <br />
            <br />
            With all my love,
          </p>
          <p className="mt-6 text-2xl font-[cursive] text-pink-600">
            — Your Brother
          </p>
        </div>
      </div>
    </section>
  );
}

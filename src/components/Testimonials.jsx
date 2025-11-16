import React from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Maya",
    text: "Best coffee in town — the latte is silky and delicious.",
  },
  {
    id: 2,
    name: "Ravi",
    text: "Cozy spot to work. Friendly baristas and great vibes.",
  },
  {
    id: 3,
    name: "Leah",
    text: "Cold brew is a must. Smooth and not bitter.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 py-24 overflow-hidden transition-colors duration-500 md:px-16 bg-linear-to-b from-amber-50/70 via-white to-amber-100/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">

      {/* Background decorative circles */}
      <div className="absolute rounded-full -top-10 -right-10 w-52 h-52 bg-amber-300/20 dark:bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-72 h-72 bg-amber-200/30 dark:bg-amber-600/10 blur-3xl"></div>

      {/* Header */}
      <div className="relative mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Customer Stories
        </h2>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
          Every cup tells a story — here’s what people are saying.
        </p>

        <div className="w-32 h-1 mx-auto mt-4 rounded-full bg-linear-to-r from-amber-400 to-amber-600"></div>
      </div>

      {/* Testimonials */}
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="p-8 transition-all duration-500 border shadow-lg group rounded-2xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border-gray-300/50 dark:border-gray-700/60 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 dark:hover:bg-gray-800/80"
          >
            <Quote className="mb-5 transition-transform duration-300 w-9 h-9 text-amber-500 dark:text-amber-400 group-hover:scale-110" />

            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              “{r.text}”
            </p>

            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              — {r.name}
            </div>

            {/* Accent bar */}
            <div className="w-16 h-1 mt-4 rounded-full bg-linear-to-r from-amber-500 to-amber-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

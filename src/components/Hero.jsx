import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col-reverse items-center justify-between gap-12 px-6 py-32 overflow-hidden transition-colors duration-500  md:flex-row md:px-16 bg-linear-to-b from-amber-50 dark:from-gray-900 via-white dark:via-gray-900 to-white dark:to-gray-800"
    >

      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 rounded-full w-72 h-72 bg-amber-200/20 dark:bg-amber-600/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-amber-300/30 dark:bg-amber-500/20 blur-3xl -z-10" />

      {/* Left Section */}
      <div className="relative z-10 flex flex-col items-start flex-1 gap-6 fade-up">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl dark:text-white">
          Brew & Co.
        </h1>

        <p className="max-w-xl text-lg text-gray-700 md:text-xl dark:text-gray-300">
          Handcrafted coffee & cozy vibes — brewed daily for your perfect morning ritual.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          {/* Primary CTA */}
          <ScrollLink
            to="menu"
            smooth
            duration={500}
            offset={-64}
            className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-amber-600 hover:bg-amber-700 backdrop-blur-md"
          >
            See Menu
          </ScrollLink>

          {/* Secondary CTA */}
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-64}
            className="inline-block px-8 py-3 text-gray-700 transition-all duration-300 border border-gray-300 rounded-lg dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-md"
          >
            Visit Us
          </ScrollLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 flex-1 w-full md:w-auto fade-up">
        <img
          src="https://t4.ftcdn.net/jpg/02/55/91/67/360_F_255916794_PLWsW5bGfDkhviQ0YPrEJewDjLPdFjdV.jpg"
          alt="Cup of coffee on a table"
          className="
            w-full md:w-[550px] lg:w-[650px] rounded-3xl shadow-2xl object-cover
            transition-transform duration-500 hover:scale-105
          "
          loading="lazy"
        />

        {/* Optional Floating Accent */}
        <div className="absolute w-64 h-64 rounded-full top-10 right-10 bg-amber-200/20 dark:bg-amber-500/20 blur-3xl -z-10" />
      </div>
    </section>
  );
}

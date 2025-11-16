import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="relative px-6 py-24 overflow-hidden transition-colors duration-500  md:px-16 bg-linear-to-b from-amber-50/70 via-white to-amber-100/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"
    >

      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-300/20 dark:bg-amber-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-72 h-72 bg-amber-200/30 dark:bg-amber-500/10 blur-3xl"></div>

      {/* Header */}
      <div className="relative mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Contact & Hours
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-lg text-gray-700 dark:text-gray-400">
          We’d love to hear from you — visit, call, or drop by anytime.
        </p>

        {/* Accent Line */}
        <div className="w-32 h-1 mx-auto mt-4 rounded-full bg-linear-to-r from-amber-400 to-amber-600"></div>
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">

        {/* Left Info Card */}
        <div
          className="p-10 transition-all duration-500 border shadow-xl  rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/60 border-gray-300/50 dark:border-gray-700/60 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 dark:hover:bg-gray-800/80"
        >
          
          {/* Address */}
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 text-white shadow-md bg-amber-600 dark:bg-amber-500 rounded-xl">
              <MapPin className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Address
              </h3>
              <p className="mt-1 text-gray-700 dark:text-gray-400">
                123 Brew Lane <br />
                Coffee City, CC 12345
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 text-white shadow-md bg-amber-600 dark:bg-amber-500 rounded-xl">
              <Clock className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Hours
              </h3>
              <ul className="mt-1 space-y-1 text-gray-700 dark:text-gray-400">
                <li>Mon–Fri: 7:00 AM — 7:00 PM</li>
                <li>Sat–Sun: 8:00 AM — 6:00 PM</li>
              </ul>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="p-3 text-white shadow-md bg-amber-600 dark:bg-amber-500 rounded-xl">
              <Phone className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="mt-1 text-gray-700 dark:text-gray-400">
                (123) 456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Right Map */}
        <div
          className="overflow-hidden transition-all duration-500 border shadow-xl  rounded-2xl dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194947928975!2d-122.41941528468149!3d37.77492927975902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8c8c8c8c%3A0x0!2sCoffee!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            className="w-full h-80 md:h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

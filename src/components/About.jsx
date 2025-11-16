import React from "react";
import { Coffee, Leaf, HeartHandshake } from "lucide-react";

const features = [
  { icon: Coffee, title: "Handcrafted", colorClass: "text-gray-800 dark:text-gray-200" },
  { icon: Leaf, title: "Sustainability", colorClass: "text-green-600 dark:text-green-300" },
  { icon: HeartHandshake, title: "Community", colorClass: "text-red-500 dark:text-red-300" },
];

const stats = [
  { value: "2+", label: "Years Brewing" },
  { value: "50K+", label: "Cups Served" },
  { value: "3000+", label: "Happy Customers" },
  { value: "100%", label: "Local Beans" },
];

export default function About() {
  return (
    <section className="px-6 py-20 transition-colors duration-500 md:px-16 bg-gray-50 dark:bg-gray-900">

      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Brewing comfort, community, and creativity — one cup at a time.
        </p>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">

        {/* Left Text Section */}
        <div>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Founded in <span className="font-semibold text-gray-900 dark:text-white">2022</span>, 
            <span className="font-semibold text-brown-600"> Brew & Co.</span> is a cozy neighborhood coffee shop dedicated to 
            craftsmanship, warm hospitality, and sustainably sourced beans.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We roast in small batches, serve handcrafted drinks, and provide a relaxing 
            atmosphere for work, connection, or a quiet moment with your favorite brew.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Whether you're stopping by for your morning espresso or settling in for an 
            afternoon latte, we’re here to make every cup feel special.
          </p>

          {/* Features */}
          <div className="grid gap-6 mt-8 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-4 text-center transition-all duration-300 border shadow rounded-xl backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border-gray-200/60 dark:border-gray-700 hover:shadow-lg"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${feature.colorClass}`} />
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{feature.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden transition-all duration-500 border shadow-xl rounded-3xl dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600"
              alt="Coffee shop"
              className="object-cover w-full h-80"
            />
          </div>
          <div className="absolute rounded-full -bottom-6 -left-6 w-28 h-28 bg-amber-300/40 dark:bg-amber-500/20 blur-2xl"></div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-8 mt-16 text-center md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

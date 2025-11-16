import { Facebook, Instagram, Twitter, Coffee } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden text-gray-700 transition-colors duration-500 bg-linear-to-b from-stone-100 via-stone-50 to-stone-200 dark:from-stone-900 dark:via-stone-950 dark:to-black dark:text-gray-300">

      {/* Decorative Glow Circles */}
      <div className="absolute rounded-full -top-10 -left-10 w-52 h-52 bg-amber-300/20 dark:bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-amber-400/10 dark:bg-amber-600/10 blur-3xl"></div>

      {/* Main Content */}
      <div className="container relative grid grid-cols-1 px-6 mx-auto md:grid-cols-3 gap-14">

        {/* Logo + About */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-3 mb-4 md:justify-start">
            <div className="p-2 border rounded-xl bg-amber-500/10 border-amber-500/20 backdrop-blur-xl">
              <Coffee className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white">
              Brew & Co.
            </h3>
          </div>

          <p className="max-w-sm mx-auto leading-relaxed text-gray-600 dark:text-gray-400 md:mx-0">
            Brewing comfort, creativity, and community — one handcrafted cup at a time.
            Proudly serving since 2022.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="mb-5 text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
            Quick Links
          </h4>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            {footerLinks.map(({ id, label }, i) => (
              <li key={i} className="font-medium">
                <ScrollLink
                  to={id}
                  smooth
                  duration={500}
                  offset={-64} // adjust for header height
                  className="transition-colors cursor-pointer hover:text-amber-600 dark:hover:text-amber-400"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h4 className="mb-5 text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
            Follow Us
          </h4>

          <div className="flex justify-center gap-4 md:justify-end">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 transition-all duration-300 border rounded-full shadow-sm backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 border-gray-300/40 dark:border-gray-700/40 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px mt-16 bg-linear-to-r from-transparent via-amber-500/40 to-transparent dark:via-amber-400/30"></div>

      {/* Bottom Section */}
      <div className="mt-6 text-sm text-center text-gray-700 dark:text-gray-400">
        © {year} <span className="font-semibold">Brew & Co.</span> — Made with 
        <span className="text-amber-600 dark:text-amber-400"> ☕</span>
      </div>
    </footer>
  );
}

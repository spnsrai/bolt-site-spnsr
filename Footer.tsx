import { Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-[#1f9ebe]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <img
              src="/SPNSR Favicon white copy.png"
              alt="SPNSR AI"
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-[#f5f5f5]">SPNSR AI</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-gray-400">
            <a href="#" className="hover:text-[#1f9ebe] transition-colors duration-300">
              Home
            </a>
            <a href="#mission" className="hover:text-[#1f9ebe] transition-colors duration-300">
              About
            </a>
            <a href="#proof" className="hover:text-[#1f9ebe] transition-colors duration-300">
              Case Studies
            </a>
            <a href="#booking" className="hover:text-[#1f9ebe] transition-colors duration-300">
              Book Demo
            </a>
            <a href="#contact" className="hover:text-[#1f9ebe] transition-colors duration-300">
              Contact
            </a>
          </nav>

          <div className="flex gap-6">
            <a
              href="#"
              className="w-12 h-12 bg-[#1f9ebe]/10 rounded-full flex items-center justify-center
                       hover:bg-[#1f9ebe]/20 transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(31,158,190,0.5)]
                       hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#1f9ebe] group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#1f9ebe]/10 rounded-full flex items-center justify-center
                       hover:bg-[#1f9ebe]/20 transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(31,158,190,0.5)]
                       hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[#1f9ebe] group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#1f9ebe]/10 rounded-full flex items-center justify-center
                       hover:bg-[#1f9ebe]/20 transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(31,158,190,0.5)]
                       hover:scale-110 group"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-[#1f9ebe] group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1f9ebe]/30 to-transparent" />

          <p className="text-gray-500 text-center">
            Copyright © SPNSR AI 2025 — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

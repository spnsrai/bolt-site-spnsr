import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#1f9ebe]/10 via-transparent to-transparent opacity-30 animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fadeInUp">
        <div className="inline-block mb-4">
          <Sparkles className="w-16 h-16 text-[#1f9ebe] animate-float" />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#f5f5f5] text-glow leading-tight">
          We 10x your business
          <br />
          <span className="text-[#1f9ebe]">using AI</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          SPNSR AI builds intelligent automation systems that help businesses scale faster, smarter, and with fewer moving parts.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <a
            href="#booking"
            className="group px-8 py-4 bg-[#1f9ebe] text-white font-semibold rounded-lg
                     hover:bg-[#1a8aaa] transition-all duration-300
                     shadow-lg hover:shadow-[0_0_30px_rgba(31,158,190,0.6)]
                     hover:scale-105 cursor-pointer"
          >
            Book a Demo
          </a>

          <a
            href="#proof"
            className="group px-8 py-4 border-2 border-[#1f9ebe] text-[#1f9ebe] font-semibold rounded-lg
                     hover:bg-[#1f9ebe]/10 transition-all duration-300
                     shadow-lg hover:shadow-[0_0_30px_rgba(31,158,190,0.4)]
                     hover:scale-105 cursor-pointer"
          >
            See Our Results
          </a>
        </div>

        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1f9ebe]/20 rounded-full blur-[100px] -z-10" />
      </div>
    </section>
  );
}

import { useEffect } from 'react';

export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.spnsrai.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5f5] text-glow">
            Ready to Automate Your Business?
          </h2>
          <p className="text-2xl text-gray-300">
            Book your free consultation — we'll show you exactly how to scale using AI.
          </p>
        </div>

        <div className="relative p-8 bg-gradient-to-br from-[#1f9ebe]/10 via-black/40 to-[#1f9ebe]/5
                      border border-[#1f9ebe]/50 rounded-3xl
                      border-glow backdrop-blur-sm
                      shadow-[0_0_50px_rgba(31,158,190,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f9ebe]/10 to-transparent rounded-3xl" />

          <div className="relative z-10">
            <iframe
              src="https://api.spnsrai.com/widget/booking/Avwuyh9sqGpbOL7aRoFu"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
              scrolling="no"
              id="Avwuyh9sqGpbOL7aRoFu_1760672987575"
              title="Book a Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

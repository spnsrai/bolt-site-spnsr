import { TrendingUp, Zap, Target } from 'lucide-react';

const stats = [
  {
    icon: Target,
    value: '10+',
    label: 'Booked appointments per week'
  },
  {
    icon: Zap,
    value: '300%',
    label: 'Faster lead response speed'
  },
  {
    icon: TrendingUp,
    value: '50%',
    label: 'Increase in conversion rate'
  }
];

export default function Proof() {
  return (
    <section id="proof" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5f5] text-glow">
            The SPNSR Effect
          </h2>
          <p className="text-2xl text-gray-300">
            How our clients scale faster using automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative p-10 bg-gradient-to-br from-[#1f9ebe]/10 to-transparent
                         border border-[#1f9ebe]/40 rounded-2xl
                         hover:border-[#1f9ebe] transition-all duration-500
                         border-glow backdrop-blur-sm
                         group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 bg-[#1f9ebe]/20 rounded-full flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-[#1f9ebe]" />
                  </div>

                  <div className="text-6xl font-bold text-[#1f9ebe] text-glow">
                    {stat.value}
                  </div>

                  <div className="text-xl text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#1f9ebe]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

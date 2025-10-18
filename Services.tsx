import { Phone, Workflow, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'AI Appointment Setters',
    description: 'Voice agents that qualify leads and book appointments 24/7.'
  },
  {
    icon: Workflow,
    title: 'CRM Automations',
    description: 'Integrated workflows built in GoHighLevel, Retell AI, and n8n.'
  },
  {
    icon: BarChart3,
    title: 'AI Funnels & Dashboards',
    description: 'Automated client journeys and data dashboards that drive growth.'
  }
];

export default function Services() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-black/40 border border-[#1f9ebe]/30 rounded-2xl
                         hover:border-[#1f9ebe] transition-all duration-500
                         border-glow-hover cursor-pointer
                         backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f9ebe]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-[#1f9ebe]/10 rounded-xl flex items-center justify-center
                                group-hover:bg-[#1f9ebe]/20 transition-all duration-300
                                group-hover:scale-110">
                    <Icon className="w-8 h-8 text-[#1f9ebe]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#f5f5f5] group-hover:text-[#1f9ebe] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute -bottom-px left-0 w-0 h-0.5 bg-[#1f9ebe] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

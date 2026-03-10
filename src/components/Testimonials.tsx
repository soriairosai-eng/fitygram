'use client';

import { Quote, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    quote: "Perdí 8 kg sin darme cuenta. Le mandaba un audio al salir del gym y Fity hacía todo. Ni cuenta me di cuando bajé de peso.",
    name: "Carlos M.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote: "No uso más otras apps. Todo por Telegram que ya lo uso siempre. Es medio automático ya. Le mandas el audio y listo.",
    name: "Laura G.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "Le mando foto de lo que como y me dice cuánto le he dado. Me quitó la ansiedad de encima. Está muy bueno.",
    name: "David S.",
    image: "https://i.pravatar.cc/150?img=33",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lo que dicen los chispes</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-surface p-8 rounded-2xl border border-white/5 relative">
              <div className="text-neon-lime mb-4">
                <Quote className="w-8 h-8 opacity-50" />
              </div>
              <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border border-white/20" />
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-neon-blue flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3" /> Chispa Verificada
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

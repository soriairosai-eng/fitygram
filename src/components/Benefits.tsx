'use client';

import { Zap, BrainCircuit, LineChart, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Rápidisimo",
    description: "Ya usas Telegram. Mandas un audio y listo. 5 segundos y está todo registrado.",
    colorClass: "neon-lime",
    hoverBorder: "hover:border-neon-lime/50",
    bgLight: "bg-neon-lime/10",
    bgHover: "group-hover:bg-neon-lime/20",
  },
  {
    icon: BrainCircuit,
    title: "IA Que Entiende",
    description: "Le mandas foto de tu plato o le dices en voz alta lo que comiste y él calcula todo.",
    colorClass: "neon-blue",
    hoverBorder: "hover:border-neon-blue/50",
    bgLight: "bg-neon-blue/10",
    bgHover: "group-hover:bg-neon-blue/20",
  },
  {
    icon: LineChart,
    title: "Mira Cómo Subes",
    description: "Gráficos de fuerza, peso y progreso. Todo en tu chat. Sin abrir otra app.",
    colorClass: "neon-lime",
    hoverBorder: "hover:border-neon-lime/50",
    bgLight: "bg-neon-lime/10",
    bgHover: "group-hover:bg-neon-lime/20",
  },
  {
    icon: Clock,
    title: "Tu Bro 24/7",
    description: "Te recuerda cuándo tienes que entrenar, cuándo comer y cuándo descansar. Como un bro.",
    colorClass: "neon-blue",
    hoverBorder: "hover:border-neon-blue/50",
    bgLight: "bg-neon-blue/10",
    bgHover: "group-hover:bg-neon-blue/20",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-surface border border-white/5 ${benefit.hoverBorder} transition-colors group cursor-pointer`}
            >
              <div className={`w-12 h-12 ${benefit.bgLight} rounded-xl flex items-center justify-center mb-4 ${benefit.bgHover} transition-colors`}>
                <benefit.icon className={`w-6 h-6 text-${benefit.colorClass}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

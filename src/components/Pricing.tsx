'use client';

import { Check, Zap, LucideIcon } from 'lucide-react';

interface Feature {
  text: string;
  included: boolean;
  bold?: boolean;
  icon?: LucideIcon;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  highlighted: boolean;
  color?: string;
  questions: string;
  features: Feature[];
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "Gratis",
    period: "",
    description: "Pruébalo sin compromiso. 10 preguntas para ver cómo funciona.",
    cta: "Probar Gratis",
    highlighted: false,
    questions: "10 preguntas",
    features: [
      { text: "Registro de gym básico", included: true },
      { text: "Macros por texto", included: true },
      { text: "Gráficos mensuales", included: false },
      { text: "Registro por audio", included: false },
      { text: "Registro por foto", included: false },
      { text: "Rutinas IA", included: false },
    ],
  },
  {
    name: "Base",
    price: "8,99€",
    period: "/mes",
    description: "Todo lo que necesitas para transformar tu cuerpo.",
    cta: "Empezar Ahora",
    highlighted: true,
    questions: "100 preguntas/semana",
    features: [
      { text: "Registro de gym básico", included: true, bold: true },
      { text: "Macros por texto", included: true, bold: true },
      { text: "Gráficos mensuales", included: true },
      { text: "Registro por audio", included: true },
      { text: "Registro por foto", included: true },
      { text: "Rutinas IA", included: true },
      { text: "Exportar datos PDF", included: true },
    ],
  },
  {
    name: "Premium",
    price: "19,99€",
    period: "/mes",
    description: "Para los que van a por todas. Sin límites.",
    cta: "Ser Premium",
    highlighted: false,
    color: "neon-blue",
    questions: "Ilimitado",
    features: [
      { text: "Todo de Base", included: true },
      { text: "Preguntas ilimitadas", included: true, bold: true, icon: Zap },
      { text: "Seguimiento proactivo", included: true },
      { text: "Exportar datos PDF", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Elige tu plan</h2>
          <p className="text-gray-400 text-lg">Empieza gratis y escala cuando quieras.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 border ${
                plan.highlighted
                  ? 'bg-surface2 border-2 border-neon-lime shadow-neon-lime transform md:-translate-y-4'
                  : 'bg-surface border border-white/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-lime text-dark font-bold px-4 py-1 rounded-full text-xs">
                  MÁS POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-neon-lime' : ''}`}>
                  {plan.price}
                </span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>
              <p className="text-xs text-gray-500 mb-4">{plan.questions}</p>
              <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
              <a
                href="#"
                className={`block w-full text-center py-3 rounded-xl font-bold mb-8 transition-colors cursor-pointer ${
                  plan.highlighted
                    ? 'bg-neon-lime text-dark hover:shadow-neon-lime-hover'
                    : plan.color === 'neon-blue'
                    ? 'border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10'
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </a>
              <ul className="space-y-4 text-sm">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex gap-3 items-center ${feature.bold ? 'font-bold' : ''} ${
                      feature.included ? '' : 'opacity-40'
                    }`}
                  >
                    {feature.included ? (
                      <Check className={`w-4 h-4 ${plan.highlighted ? 'text-neon-lime' : plan.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-lime'}`} />
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    {feature.icon && (
                      <feature.icon className={`w-4 h-4 ${plan.highlighted ? 'text-neon-lime' : 'text-neon-blue'}`} />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          Sin compromiso. Cancela cuando quieras con un mensaje.
        </p>
      </div>
    </section>
  );
}

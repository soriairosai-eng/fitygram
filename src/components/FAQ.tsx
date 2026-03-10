'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qué incluye el plan gratis?",
    answer: "10 preguntas únicas para que pruebes cómo funciona Fity. Puedes registrar un entrenamiento y ver cómo te responde. Sin tarjeta de crédito.",
  },
  {
    question: "Qué pasa cuando se acaben las 10 preguntas?",
    answer: "Te avisaremos cuando llegues a las 10. Puedes decidir si subir a Base (8,99€/mes con 100 preguntas/semana) o a Premium (19,99€/mes ilimitado).",
  },
  {
    question: "Qué es el seguimiento proactivo?",
    answer: "Fity te envía mensajes durante el día para ver cómo va tu progreso. No tienes que pedírselo. Él te pregunta, te anima, te recuerda. Como un bro de verdad.",
  },
  {
    question: "Tengo que descargar algo nuevo?",
    answer: "No. Todo funciona en Telegram. Un click, añades a Fity, y listo. Nada de bajarse apps.",
  },
  {
    question: "En qué idiomas funciona?",
    answer: "En muchos. Fity entiende español, inglés, y varios idiomas más. Y entiende cuando le dices 'kilos' o 'libras', 'gramos' o 'tazas'. Lo que quieras.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Dudas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl bg-dark overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left font-bold flex justify-between items-center hover:text-neon-lime transition-colors cursor-pointer"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-neon-lime' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-5 text-gray-400 text-sm ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

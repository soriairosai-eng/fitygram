'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const examples = [
  {
    user: "Bro, hoy hice press banca 4x10 con 80kg",
    fity: "Tío, qué fuerte! 80kg en press banca. Vamos a ponérsele a 82.5kg la próxima?",
    type: "gym",
  },
  {
    user: "*le manda foto de su plato*",
    fity: "Ese arroz con pollo está de miedo! Te calculo: unas 650kcal, 55g de pro, 70g de carbs. Le diste bien!",
    type: "food",
  },
  {
    user: "Cuánto levanto ya en sentadilla?",
    fity: "Bro, estás en 120kg! Has subido 15kg desde que empezaste. Vas que te pegas!",
    type: "progress",
  },
  {
    user: "Qué rutina me das para hoy?",
    fity: "Hoy te toca pecho + tríceps. 4 ejercicios, 4 series cada uno. Empezamos?",
    type: "routine",
  },
];

export default function Hero() {
  const [currentExample, setCurrentExample] = useState(0);

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + examples.length) % examples.length);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-neon-lime/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-lime/30 bg-neon-lime/5 text-neon-lime text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Tu Gym Bro con IA
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Listo para romperla? <br className="hidden lg:block" />
              <span className="text-gradient">Tu Fity te espera.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Le mandas un audio, le mandas una foto, y Fity hace todo el trabajo sucio: registra, calcula macros, y te dice cuánto tienes que levantar. 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-neon-lime text-dark font-bold text-lg py-4 px-8 rounded-full hover:shadow-neon-lime-hover hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Empezar gratis en Telegram <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-400">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-dark" src="https://i.pravatar.cc/100?img=1" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-dark" src="https://i.pravatar.cc/100?img=2" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-dark" src="https://i.pravatar.cc/100?img=3" alt="User" />
              </div>
              <p>Más de <strong className="text-white">2.500 chispas</strong> ya entrenan con Fity.</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] lg:ml-auto animate-float">
            <div className="relative bg-surface2 border-[6px] border-[#333] rounded-[3rem] h-[680px] w-full shadow-2xl overflow-hidden shadow-neon-blue/20">
              <div className="notch absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-dark rounded-b-2xl z-10" />
              
              <div className="bg-surface px-6 pt-12 pb-4 flex items-center gap-3 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-lime to-neon-blue p-[2px]">
                  <div className="bg-surface w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                    <Image src="/fity-logo.png" alt="Fity" width={36} height={36} className="rounded-full object-cover scale-110" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Fity</h3>
                  <p className="text-xs text-neon-lime">Tu Gym Bro IA</p>
                </div>
              </div>
              
              <div className="p-4 flex flex-col gap-4 bg-[#0F0F0F] h-full text-sm">
                <div className="text-center text-xs text-gray-500">Ejemplos de conversación</div>
                
                <div className="self-end bg-neon-blue/20 border border-neon-blue/30 text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                  {examples[currentExample].user}
                  <span className="text-[10px] text-gray-400 block text-right mt-1">Ahora</span>
                </div>

                <div className="self-start bg-surface p-4 rounded-2xl rounded-tl-sm border border-white/10 max-w-[90%] shadow-lg">
                  <p>{examples[currentExample].fity}</p>
                  <span className="text-[10px] text-gray-500 block text-right mt-1">Fity</span>
                </div>

                <div className="flex justify-center gap-2 mt-2">
                  <button 
                    onClick={prevExample}
                    className="p-2 rounded-full bg-surface hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-1 items-center">
                    {examples.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentExample ? 'bg-neon-lime' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextExample}
                    className="p-2 rounded-full bg-surface hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 w-full bg-surface border-t border-white/5 p-4 flex gap-2 items-center pb-8">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <div className="flex-1 bg-dark rounded-full px-4 py-2 text-sm text-gray-500 border border-white/10">Manda un mensaje...</div>
                <div className="w-9 h-9 bg-neon-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Dumbbell, Salad, TrendingUp, Timer, Cpu, Mic, Camera, BellRing, Bell } from 'lucide-react';

export default function Features() {
  const [activeTab, setActiveTab] = useState<'gym' | 'diet'>('gym');

  const gymFeatures = [
    {
      icon: TrendingUp,
      title: "Sube Peso Siempre",
      description: "Fity se acuerda de cuánto levantaste la última vez y te dice cuánto poner hoy. Siempre progresando.",
    },
    {
      icon: Timer,
      title: "Rutinas IA",
      description: "Te genera rutinas según lo que quieras: hipertrofia, fuerza, lo que sea. Adaptadas a tu disponibilidad.",
    },
    {
      icon: Bell,
      title: "Seguimiento Proactivo",
      description: "Fity te envía mensajes de seguimiento durante el día. Sin que lo pidas. Te pregunta cómo va, te anima, te recuerda.",
    },
  ];

  const dietFeatures = [
    {
      icon: Mic,
      title: "Mándale Audio",
      description: "Le dices 'me comí dos huevos con aguacate' y él te calcula las kcal y macros al instante.",
    },
    {
      icon: Camera,
      title: "Mándale Foto",
      description: "Le mandas foto de tu plato y él te dice cuánto le has dado. Fácil.",
    },
    {
      icon: BellRing,
      title: "Resumen Diario",
      description: "Por la noche te llega un resumen: cuánto has comido, cuánto te falta, cuánta agua has bebido.",
    },
  ];

  const features = activeTab === 'gym' ? gymFeatures : dietFeatures;
  const activeColor = activeTab === 'gym' ? 'neon-lime' : 'neon-blue';

  return (
    <section id="caracteristicas" className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Todo lo que necesitas</h2>
          <p className="text-gray-400 text-lg">Gym y comida en un solo lugar. Sin tantas apps.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-dark p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('gym')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'gym'
                  ? 'bg-neon-lime text-dark shadow-neon-lime'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" /> Modo Gym
            </button>
            <button
              onClick={() => setActiveTab('diet')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'diet'
                  ? 'bg-neon-blue text-dark shadow-neon-blue'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Salad className="w-4 h-4" /> Modo Dieta
            </button>
          </div>
        </div>

        <div className="relative bg-dark rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden min-h-[400px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-3xl font-bold mb-6 text-${activeColor}`}>
                {activeTab === 'gym' ? 'A levantar!' : 'A comer bien!'}
              </h3>
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="mt-1 bg-white/5 p-2 rounded-lg">
                      <feature.icon className={`w-5 h-5 text-${activeColor}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex justify-center items-center">
              {activeTab === 'gym' ? (
                <div className="w-full max-w-sm bg-surface rounded-2xl p-6 border border-neon-lime/30 shadow-neon-lime">
                  <h4 className="text-center font-bold text-gray-300 mb-4">Evolución Press Banca</h4>
                  <div className="h-40 flex items-end gap-2 justify-between mt-4">
                    <div className="w-1/6 bg-neon-lime/20 h-[40%] rounded-t-sm hover:bg-neon-lime transition-all" />
                    <div className="w-1/6 bg-neon-lime/40 h-[50%] rounded-t-sm hover:bg-neon-lime transition-all" />
                    <div className="w-1/6 bg-neon-lime/60 h-[65%] rounded-t-sm hover:bg-neon-lime transition-all" />
                    <div className="w-1/6 bg-neon-lime/80 h-[80%] rounded-t-sm hover:bg-neon-lime transition-all" />
                    <div className="w-1/6 bg-neon-lime h-[95%] rounded-t-sm shadow-neon-lime" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Sem 1</span><span>Sem 5</span>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold">100 kg</span> <span className="text-neon-lime text-sm">1RM Calculado</span>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-sm bg-surface rounded-2xl p-6 border border-neon-blue/30 shadow-neon-blue">
                  <h4 className="text-center font-bold text-gray-300 mb-4">Balance Diario</h4>
                  <div className="relative w-32 h-32 mx-auto mt-4 mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#242424" strokeWidth="8" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#00F0FF" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold">2,150</span>
                      <span className="text-[10px] text-gray-400">kcal / 2,600</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-dark p-2 rounded">
                      <span className="block text-gray-400 mb-1">PRO</span>
                      <span className="font-bold text-white">140g</span>
                    </div>
                    <div className="bg-dark p-2 rounded">
                      <span className="block text-gray-400 mb-1">CARBS</span>
                      <span className="font-bold text-white">210g</span>
                    </div>
                    <div className="bg-dark p-2 rounded">
                      <span className="block text-gray-400 mb-1">GRASA</span>
                      <span className="font-bold text-white">65g</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

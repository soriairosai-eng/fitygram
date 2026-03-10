'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 glass-panel border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/fity-logo.png" alt="FityGram" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl sm:text-2xl tracking-tight">
              Fity<span className="text-neon-lime">Gram</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#beneficios" className="hover:text-white transition-colors cursor-pointer">
              Beneficios
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors cursor-pointer">
              Cómo Funciona
            </a>
            <a href="#caracteristicas" className="hover:text-white transition-colors cursor-pointer">
              Características
            </a>
            <a href="#precios" className="hover:text-white transition-colors cursor-pointer">
              Precios
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="bg-neon-lime text-dark font-bold py-2.5 px-5 sm:px-6 rounded-full hover:shadow-neon-lime-hover hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Abrir en Telegram</span>
              <span className="sm:hidden">Empezar</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

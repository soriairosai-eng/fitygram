'use client';

import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark py-12 border-t border-white/10 text-center sm:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Zap className="text-neon-lime w-6 h-6" />
          <span className="font-bold text-xl tracking-tight text-white">
            Fity<span className="text-neon-lime">Gram</span>
          </span>
        </div>
        
        <div className="text-sm text-gray-500">
          &copy; 2024 FityGram AI. Todos los derechos reservados.
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Términos</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

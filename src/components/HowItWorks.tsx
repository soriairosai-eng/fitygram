'use client';

const steps = [
  {
    number: 1,
    title: "Añade a FityGram",
    description: "Un click, lo añades a Telegram y le dices hola a tu nuevo mejor amigo del gym.",
  },
  {
    number: 2,
    title: "Mándale Todo",
    description: "Le mandas un audio, una foto, o le dices en texto lo que has hecho. Él entiende todo.",
  },
  {
    number: 3,
    title: "Mira Tus Gains",
    description: "Te llegan los gráficos, las estadísticas y cuánto vas a levantar la próxima. Fácil.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tan fácil como chatear</h2>
          <p className="text-gray-400 text-lg">No hay nada que aprender. Si mandas mensajes, ya sabes usar FityGram.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-neon-lime/50 to-neon-blue/50 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`w-24 h-24 mx-auto bg-surface rounded-full border-4 border-dark flex items-center justify-center text-3xl font-bold mb-6 ${
                index % 2 === 0 ? 'shadow-neon-lime text-neon-lime' : 'shadow-neon-blue text-neon-blue'
              }`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

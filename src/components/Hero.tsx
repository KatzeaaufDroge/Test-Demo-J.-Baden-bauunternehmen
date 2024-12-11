import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Ihr Partner für anspruchsvolle Bauvorhaben
          </h1>
          <p className="text-xl mb-8">
            Seit 1997 realisieren wir erfolgreich Bauprojekte in der Region Rhein-Main. 
            Qualität, Zuverlässigkeit und Termintreue sind unsere Markenzeichen.
          </p>
          <div className="space-x-4">
            <a href="#contact" className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition-colors inline-block">
              Kontakt aufnehmen
            </a>
            <a href="#services" className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block">
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
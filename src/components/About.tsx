import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const qualities = [
  'Über 100 Jahre Erfahrung',
  'Familientradition in 4. Generation',
  'Modernste Energiesparlösungen',
  'Termintreue Ausführung',
  'Hochwertige Materialien',
  'Kompetente Beratung'
];

export function About() {
  const textRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Über J. BADEN Bauunternehmen</h2>
            <p className="text-gray-600 mb-6">
              Unser Familienbetrieb in der vierten Generation steht für über ein Jahrhundert Erfahrung im Massivbau. 
              Wir kombinieren moderne Energiesparlösungen mit Termintreue und hoher Flexibilität, um Projekte jeder Art 
              erfolgreich umzusetzen.
            </p>
            <p className="text-gray-600 mb-6">
              Ob privat, gewerblich oder öffentlich – als verlässlicher Partner arbeiten wir mit lokalen Architekten, 
              nutzen hochwertige Materialien und modernste Technik. Das Ergebnis: Zahlreiche eindrucksvolle Bauprojekte 
              im Raum Rotenburg/Wümme, die für Qualität und Vertrauen stehen.
            </p>
            <p className="text-xl font-semibold text-yellow-600 mb-8">
              Bauen mit Erfahrung, Präzision und Herz ❤️
            </p>
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center space-x-2 animate-on-scroll" style={{ transitionDelay: `${index * 200}ms` }}>
                  <CheckCircle2 className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">{quality}</span>
                </div>
              ))}
            </div>
          </div>
          <div ref={imageRef} className="relative animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
              alt="Baustelle"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
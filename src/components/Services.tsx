import React from 'react';
import { Building2, Factory, Home, Building, Shovel, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Building2,
    title: 'Hochbau',
    description: 'Schlüsselfertiges Bauen, Rohbau, Umbau und Sanierung von Wohn- und Geschäftshäusern'
  },
  {
    icon: Shovel,
    title: 'Tiefbau',
    description: 'Erschließungsarbeiten, Kanalbau, Straßenbau und Pflasterarbeiten'
  },
  {
    icon: Home,
    title: 'Wohnungsbau',
    description: 'Ein- und Mehrfamilienhäuser, Wohnanlagen, Reihenhäuser und Doppelhäuser'
  },
  {
    icon: Factory,
    title: 'Gewerbebau',
    description: 'Industrie- und Gewerbehallen, Bürogebäude, Geschäftshäuser'
  },
  {
    icon: Building,
    title: 'Betonarbeiten',
    description: 'Stahlbetonarbeiten, Fundamentarbeiten, Bodenplatten, Kellerwände'
  },
  {
    icon: Wrench,
    title: 'Sanierung',
    description: 'Altbausanierung, energetische Sanierung, Modernisierung, Umbau'
  }
];

export function Services() {
  const refs = services.map(() => useScrollAnimation());
  const headerRef = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir bieten Ihnen das komplette Leistungsspektrum im Hoch- und Tiefbau. 
            Von der Planung bis zur schlüsselfertigen Übergabe sind wir Ihr kompetenter Partner.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div 
                key={index}
                ref={refs[index]}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
              >
                <ServiceIcon className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
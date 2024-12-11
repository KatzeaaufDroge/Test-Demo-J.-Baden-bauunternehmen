import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    title: "Bürokomplex München",
    description: "Moderner Bürokomplex mit 12.000m² Nutzfläche"
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    title: "Wohnanlage Stuttgart",
    description: "Exklusive Wohnanlage mit 45 Einheiten"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    title: "Logistikzentrum Frankfurt",
    description: "25.000m² Logistikfläche mit modernster Technik"
  }
];

export function Projects() {
  const refs = projects.map(() => useScrollAnimation());
  const headerRef = useScrollAnimation();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={headerRef} className="text-3xl font-bold text-center mb-12 animate-on-scroll">
          Referenzprojekte
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={refs[index]}
              className="group relative overflow-hidden rounded-lg shadow-lg animate-on-scroll"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
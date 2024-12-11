import React from 'react';
import { HardHat, Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <HardHat className="h-8 w-8 text-yellow-600" />
            <span className="text-xl font-bold">J. BADEN</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-yellow-600">Über uns</a>
            <a href="#services" className="text-gray-600 hover:text-yellow-600">Leistungen</a>
            <a href="#projects" className="text-gray-600 hover:text-yellow-600">Projekte</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-600">Kontakt</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:04263-623" className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              04263-623
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
import React from 'react';
import { HardHat } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <HardHat className="h-8 w-8 text-yellow-600" />
            <span className="text-xl font-bold text-white">J. BADEN</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} J. BADEN Bauunternehmen GmbH. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}
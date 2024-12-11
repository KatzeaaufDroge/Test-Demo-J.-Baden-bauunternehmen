import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const infoRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={infoRef} className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">Kontaktieren Sie uns</h3>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">Adresse</p>
                <p className="text-gray-600">
                  J. BADEN Bauunternehmen GmbH<br />
                  Am Reddern 28<br />
                  27383 Scheessel - Ostervesede
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">Telefon</p>
                <p className="text-gray-600">04263-623</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">E-Mail</p>
                <p className="text-gray-600">baden-bauunternehmen@ewe.net</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <p className="font-semibold">Öffnungszeiten</p>
                <p className="text-gray-600">
                  Mo. - Do.: 07:30 - 16:30 Uhr<br />
                  Fr.: 07:30 - 14:00 Uhr
                </p>
              </div>
            </div>
          </div>
          <form ref={formRef} className="space-y-4 animate-on-scroll">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
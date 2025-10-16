"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

export function Booking() {
  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Réserver votre <span className="text-primary">Course</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour réserver votre chauffeur
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <form className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                placeholder="jean.dupont@email.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <Calendar className="w-4 h-4 inline mr-2 text-primary" />
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <Clock className="w-4 h-4 inline mr-2 text-primary" />
                  Heure
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <MapPin className="w-4 h-4 inline mr-2 text-primary" />
                  Lieu de départ
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="Adresse de départ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <MapPin className="w-4 h-4 inline mr-2 text-primary" />
                  Destination
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="Adresse d'arrivée"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">
                <Users className="w-4 h-4 inline mr-2 text-primary" />
                Nombre de passagers
              </label>
              <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white">
                <option>1 passager</option>
                <option>2 passagers</option>
                <option>3 passagers</option>
                <option>4-7 passagers</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Informations supplémentaires</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                placeholder="Bagages, demandes spéciales..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-gray-900 font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Confirmer la réservation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Crown } from "lucide-react"

const vehicles = [
  {
    icon: Briefcase,
    name: "Berline Premium",
    description: "Mercedes Classe E, BMW Série 5",
    capacity: "1-3 passagers",
    features: ["Climatisation", "WiFi", "Eau minérale", "Chargeurs"],
  },
  {
    icon: Users,
    name: "Van Luxe",
    description: "Mercedes Classe V, Viano",
    capacity: "4-7 passagers",
    features: ["Espace XXL", "WiFi", "Sièges cuir", "Bagages"],
  },
  {
    icon: Crown,
    name: "Prestige",
    description: "Mercedes Classe S, BMW Série 7",
    capacity: "1-3 passagers",
    features: ["Grand luxe", "Champagne", "Massage", "Intimité"],
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Notre <span className="text-primary">Flotte</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Des véhicules haut de gamme pour un confort optimal</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-8">
                <vehicle.icon className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <p className="text-gray-400 mb-4">{vehicle.description}</p>
                <p className="text-primary font-semibold mb-6">{vehicle.capacity}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

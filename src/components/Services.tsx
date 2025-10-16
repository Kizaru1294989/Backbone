"use client"

import { motion } from "framer-motion"
import { Plane, Clock, Shield, Star } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Transferts Aéroports",
    description: "Service de navette premium vers tous les aéroports parisiens. Ponctualité garantie.",
  },
  {
    icon: Clock,
    title: "Mise à Disposition",
    description: "Chauffeur à votre disposition pour la journée ou la soirée selon vos besoins.",
  },
  {
    icon: Shield,
    title: "Événements VIP",
    description: "Transport VIP pour vos événements professionnels et privés en toute discrétion.",
  },
  {
    icon: Star,
    title: "Tourisme",
    description: "Découvrez Paris et ses environs avec un chauffeur guide expérimenté.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des prestations sur mesure pour répondre à tous vos besoins de transport
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

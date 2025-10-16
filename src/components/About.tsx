"use client"

import { motion } from "framer-motion"
import { Award, Shield, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Award, value: "10+", label: "Années d'expérience" },
  { icon: Shield, value: "100%", label: "Satisfaction client" },
  { icon: Clock, value: "24/7", label: "Disponibilité" },
  { icon: Heart, value: "5000+", label: "Clients fidèles" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              À Propos de <span className="text-primary">Drive Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Depuis plus de 10 ans, Drive Me offre un service de chauffeur privé d'exception à Paris et en
              Île-de-France. Notre engagement : vous offrir une expérience de transport premium alliant confort,
              ponctualité et discrétion.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nos chauffeurs professionnels, parfaitement formés et expérimentés, sont à votre service 24h/24 et 7j/7
              pour tous vos déplacements professionnels ou privés.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="/luxury-car-interior.png" alt="Luxury car interior" className="rounded-2xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

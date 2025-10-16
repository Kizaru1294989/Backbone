"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nous <span className="text-primary">Contacter</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Notre équipe est à votre disposition 24h/24 et 7j/7</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Phone,
              title: "Téléphone",
              content: "+33 1 23 45 67 89",
              link: "tel:+33123456789",
            },
            {
              icon: Mail,
              title: "Email",
              content: "contact@driveme.fr",
              link: "mailto:contact@driveme.fr",
            },
            {
              icon: MapPin,
              title: "Adresse",
              content: "Paris, Île-de-France",
              link: null,
            },
            {
              icon: Clock,
              title: "Horaires",
              content: "24h/24 - 7j/7",
              link: null,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-gray-400 hover:text-primary transition-colors">
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-400">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 border-t border-gray-800"
        >
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_rond-bLW8x9iNQlOyDUwyw9vJcUF40A2aMc.png"
              alt="Drive Me Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-2xl font-serif font-bold text-primary ml-3">Drive Me</span>
          </div>
          <p className="text-gray-400 mb-4">Service de chauffeur privé premium à Paris</p>
          <p className="text-gray-500 text-sm">© 2025 Drive Me. Tous droits réservés.</p>
        </motion.footer>
      </div>
    </section>
  )
}

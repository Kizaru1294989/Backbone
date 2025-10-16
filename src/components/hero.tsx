"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panam-6bbd4fuBveQC3KcBbuizwiqikYIiGm.jpg"
          alt="Paris by night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />
      </motion.div>

      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-primary/20" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_rond-bLW8x9iNQlOyDUwyw9vJcUF40A2aMc.png"
                alt="Drive Me Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-serif font-bold text-primary">Drive Me</span>
            </button>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("services")} className="holographic-button">
                Nos Services
              </button>
              <button
                onClick={() => scrollToSection("fleet")}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Notre Flotte
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </a>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
              <span className="text-white">Voyagez avec</span>
              <br />
              <span className="text-primary italic">Élégance</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Service de chauffeur privé premium à Paris. Confort, ponctualité et discrétion pour tous vos déplacements.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection("booking")} className="holographic-button">
                Réserver maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button onClick={() => scrollToSection("services")} className="holographic-button">
                Nos Services
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-700"
          >
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-400">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-400">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400">Service disponible</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .holographic-button {
          position: relative;
          padding: 0.75rem 2rem;
          background: transparent;
          border: 2px solid rgba(252, 211, 77, 0.5);
          color: #FCD34D;
          font-weight: 600;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }

        .holographic-button::before {
          content: '';
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(252, 211, 77, 0.1),
            rgba(252, 211, 77, 0.3),
            rgba(252, 211, 77, 0.1),
            transparent
          );
          transition: all 0.6s ease;
        }

        .holographic-button:hover::before {
          top: -50%;
          left: -50%;
        }

        .holographic-button:hover {
          border-color: #FCD34D;
          box-shadow: 0 0 20px rgba(252, 211, 77, 0.5);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

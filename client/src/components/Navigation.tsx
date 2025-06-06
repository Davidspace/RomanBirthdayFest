import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-cinzel text-lg font-bold">CELEBRACIÓN ROMANA</div>
          <div className="hidden md:flex space-x-8 font-cinzel">
            <a href="#event-details" className="hover:text-secondary transition-colors">DETALLES DEL EVENTO</a>
            <a href="#honorees" className="hover:text-secondary transition-colors">HOMENAJEADAS</a>
            <a href="#gallery" className="hover:text-secondary transition-colors">GALERÍA</a>
            <a href="#location" className="hover:text-secondary transition-colors">UBICACIÓN</a>
            <a href="#quest" className="hover:text-secondary transition-colors">MISIONES</a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-primary-foreground hover:text-secondary transition-colors">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-muted overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 font-cinzel">
              <a 
                href="#event-details" 
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-secondary hover:text-primary rounded-md">
                DETALLES DEL EVENTO
              </a>
              <a 
                href="#honorees" 
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-secondary hover:text-primary rounded-md">
                HOMENAJEADAS
              </a>
              <a 
                href="#gallery" 
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-secondary hover:text-primary rounded-md">
                GALERÍA
              </a>
              <a 
                href="#location" 
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-secondary hover:text-primary rounded-md">
                UBICACIÓN
              </a>
              <a 
                href="#quest" 
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-secondary hover:text-primary rounded-md">
                MISIONES
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

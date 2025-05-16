import React from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <>
      <header className="relative min-h-screen flex flex-col justify-center items-center px-4 py-6 overflow-hidden bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1597890741697-79f94099b025?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundBlendMode: "overlay", 
          backgroundColor: "rgba(245, 230, 232, 0.8)"
        }}>
        <div className="absolute inset-0 bg-background bg-opacity-70"></div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center max-w-4xl mx-auto">
          <h5 className="font-cinzel text-xl md:text-2xl tracking-widest text-primary mb-4">
            XVII CALENDAS DE MAYO
          </h5>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-cinzel font-bold text-4xl md:text-6xl lg:text-7xl tracking-wide text-primary mb-4">
            <span className="block">CELEBRACIÓN DE CUMPLEAÑOS</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "10rem" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-1 bg-secondary mx-auto my-6">
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-lato text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Únete a nosotros para una gran celebración 
            en honor a las dos diosas canileras
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12">
            <h3 className="font-cinzel text-2xl text-primary mb-4">CUENTA ATRÁS PARA LAS FESTIVIDADES</h3>
            <CountdownTimer targetDate="May 17, 2025 21:30:00" />
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12">
            <a 
              href="#event-details" 
              className="inline-block bg-primary hover:bg-opacity-90 text-primary-foreground font-cinzel py-3 px-8 rounded-sm transform hover:scale-105 transition-transform duration-300">
              DESCUBRIR MÁS
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
          <a href="#event-details" className="text-primary hover:text-secondary transition-colors duration-300">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </motion.div>
      </header>
      <Navigation />
    </>
  );
};

export default Header;

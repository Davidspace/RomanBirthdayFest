import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const EventDetails: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="event-details" className="py-16 md:py-24 px-4 relative">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-6xl">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary mb-4">THE CELEBRATION</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            A grand Roman celebration awaits you. Don your togas and laurel wreaths as we honor our birthday girls in true imperial fashion.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            variants={itemVariants}
            className="p-6 border-2 border-secondary bg-background shadow-lg rounded-sm transform md:translate-y-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-full mr-4">
                <i className="fas fa-calendar-alt text-primary-foreground text-xl"></i>
              </div>
              <h3 className="font-cinzel text-2xl text-primary">WHEN</h3>
            </div>
            <p className="font-lato text-lg mb-4">May 17th, from sunset until the gods return to Olympus</p>
            <div className="font-cinzel text-muted text-lg border-t-2 border-dashed border-muted pt-4 mt-4">
              <p>XVII Day of May</p>
              <p>Year MMXXIV of the Common Era</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="p-6 border-2 border-secondary bg-background shadow-lg rounded-sm transform md:-translate-y-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-full mr-4">
                <i className="fas fa-map-marked-alt text-primary-foreground text-xl"></i>
              </div>
              <h3 className="font-cinzel text-2xl text-primary">WHERE</h3>
            </div>
            <p className="font-lato text-lg mb-4">At the rural villa on the outskirts of town</p>
            <div className="font-cinzel text-muted text-lg border-t-2 border-dashed border-muted pt-4 mt-4">
              <p>The Villa Rustica</p>
              <p>Directions provided upon RSVP</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-background p-8 border-2 border-secondary rounded-sm shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-cinzel text-3xl text-primary mb-2">THEME: ROMAN COSTUME PARTY</h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fas fa-theater-masks text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="font-cinzel text-xl text-muted mb-2">ATTIRE</h4>
              <p className="font-lato">Come dressed in your finest Roman garb: togas, stolas, tunics, or laurel wreaths</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fas fa-wine-glass-alt text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="font-cinzel text-xl text-muted mb-2">FEASTING</h4>
              <p className="font-lato">A lavish Roman banquet will be served with delicacies from across the empire</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fas fa-music text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="font-cinzel text-xl text-muted mb-2">ENTERTAINMENT</h4>
              <p className="font-lato">Games, music, and merrymaking in true Roman fashion throughout the evening</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;

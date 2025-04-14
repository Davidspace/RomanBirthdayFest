import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Location: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <section id="location" className="py-16 md:py-24 px-4 bg-muted text-muted-foreground relative">
      <div className="absolute inset-0 opacity-10" style={backgroundStyle}></div>
      
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary-foreground mb-4">THE VILLA LOCATION</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Our celebration will be held at a magnificent rural villa worthy of Caesar himself
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={imageVariants}
            className="rounded-sm overflow-hidden shadow-lg">
            <div className="w-full pt-[75%] relative bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-home text-6xl text-muted-foreground opacity-30"></i>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-background text-foreground p-8 rounded-sm shadow-lg">
            <h3 className="font-cinzel text-3xl text-primary mb-6">JOURNEY TO THE CELEBRATION</h3>
            
            <div className="mb-6">
              <h4 className="font-cinzel text-xl text-muted mb-2 flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i> LOCATION
              </h4>
              <p className="font-lato pl-6">The Rural Villa (Villa Rustica)<br />Located on the countryside outskirts</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-cinzel text-xl text-muted mb-2 flex items-center">
                <i className="fas fa-horse text-primary mr-2"></i> TRANSPORTATION
              </h4>
              <p className="font-lato pl-6">Chariots and carriages recommended<br />Parking available for modern vehicles</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-cinzel text-xl text-muted mb-2 flex items-center">
                <i className="fas fa-info-circle text-primary mr-2"></i> IMPORTANT DETAILS
              </h4>
              <p className="font-lato pl-6">Detailed directions will be provided upon RSVP<br />Torches will light the path after sunset</p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#rsvp" 
                className="inline-block bg-primary hover:bg-opacity-90 text-primary-foreground font-cinzel py-3 px-8 rounded-sm transform hover:scale-105 transition-transform duration-300">
                SECURE YOUR INVITATION
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;

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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="event-details" className="py-16 md:py-24 px-4 relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary mb-4">
            LA CELEBRACIÓN
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Una gran celebración romana te espera. Ponte tu toga y corona de
            laurel mientras honramos a nuestras cumpleañeras al verdadero estilo
            imperial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            className="p-6 border-2 border-secondary bg-background shadow-lg rounded-sm transform md:translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-full mr-4">
                <i className="fas fa-calendar-alt text-primary-foreground text-xl"></i>
              </div>
              <h3 className="font-cinzel text-2xl text-primary">CUÁNDO</h3>
            </div>
            <p className="font-lato text-lg mb-4">
              17 de mayo, desde el almuerzo hasta que los dioses regresen al
              Olimpo
            </p>
            <div className="font-cinzel text-muted text-lg border-t-2 border-dashed border-muted pt-4 mt-4">
              <p>Día XVII de Mayo</p>
              <p>Año MMXXV de la Era Común</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 border-2 border-secondary bg-background shadow-lg rounded-sm transform md:-translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-full mr-4">
                <i className="fas fa-map-marked-alt text-primary-foreground text-xl"></i>
              </div>
              <h3 className="font-cinzel text-2xl text-primary">DÓNDE</h3>
            </div>
            <p className="font-lato text-lg mb-4">
              En la villa rural a las afueras de la ciudad
            </p>
            <div className="font-cinzel text-muted text-lg border-t-2 border-dashed border-muted pt-4 mt-4">
              <p>La Villa Rústica</p>
              <p>Direcciones proporcionadas al confirmar</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 bg-background p-8 border-2 border-secondary rounded-sm shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="font-cinzel text-3xl text-primary mb-2">
              TEMÁTICA: FIESTA DE DISFRACES ROMANOS
            </h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fas fa-theater-masks text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="font-cinzel text-xl text-muted mb-2">
                VESTIMENTA
              </h4>
              <p className="font-lato">
                Ven con tu mejor atuendo romano: togas, estolas, túnicas o
                coronas de laurel
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fas fa-wine-glass-alt text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="font-cinzel text-xl text-muted mb-2">BANQUETE</h4>
              <p className="font-lato">
                Se servirá un lujoso banquete romano con delicias de todo el
                imperio
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fas fa-music text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="font-cinzel text-xl text-muted mb-2">
                ENTRETENIMIENTO
              </h4>
              <p className="font-lato">
                Juegos, música y alegría serán la tónica durante toda la velada
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;

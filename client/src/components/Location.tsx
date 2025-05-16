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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const backgroundStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="location"
      className="py-16 md:py-24 px-4 bg-muted text-muted-foreground relative"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={backgroundStyle}
      ></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary-foreground mb-4">
            UBICACIÓN DEL BANQUETE
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Nuestra celebración se llevará a cabo en un magnifico restaurante
            digno del propio César
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariants}
            className="rounded-sm overflow-hidden shadow-lg"
          >
            <div className="w-full pt-[75%] relative bg-muted overflow-hidden">
              <img
                src="/images/PINTAMONAS.jpeg"
                alt="Location Villa"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-background text-foreground p-8 rounded-sm shadow-lg"
          >
            <h3 className="font-cinzel text-3xl text-primary mb-6">
              VIAJE A LA CELEBRACIÓN
            </h3>

            <div className="mb-6">
              <h4 className="font-cinzel text-xl text-muted mb-2 flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>{" "}
                UBICACIÓN
              </h4>
              <p className="font-lato pl-6">
                Pintamonas Almería
                <br />
                Calle Tirso de Molina, 5, 04005 Almería
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-cinzel text-xl text-muted mb-2 flex items-center">
                <i className="fas fa-horse text-primary mr-2"></i> TRANSPORTE
              </h4>
              <p className="font-lato pl-6">
                Se recomiendan carros y carruajes
                <br />
                Estacionamiento disponible para vehículos modernos
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-cinzel text-xl text-muted mb-2 flex items-center">
                <i className="fas fa-info-circle text-primary mr-2"></i>{" "}
                DETALLES IMPORTANTES
              </h4>
              <p className="font-lato pl-6">
                Se recomienda no tener asuntos o eventos importantes que
                involucren a autoridades romanas al día siguiente
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;

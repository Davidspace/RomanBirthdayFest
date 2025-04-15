import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const HonoreeCard: React.FC<{
  name: string;
  title: string;
  description: string;
  trait1: string;
  trait2: string;
  icon1: string;
  icon2: string;
  imagePlaceholder: string;
}> = ({
  name,
  title,
  description,
  trait1,
  trait2,
  icon1,
  icon2,
  imagePlaceholder,
}) => {
  return (
    <div className="bg-background text-foreground p-8 rounded-sm shadow-lg border-2 border-secondary transform transition-transform hover:scale-105 duration-300">
      <div
        className="relative mb-6 overflow-hidden rounded-sm"
        style={{ paddingTop: "100%" }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-muted bg-opacity-20">
          <i className="fas fa-user-circle text-6xl text-muted opacity-30"></i>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-secondary bg-opacity-80 text-foreground p-2 text-center font-cinzel">
          {name}
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-cinzel text-2xl text-primary mb-2">{title}</h3>
        <p className="font-lato mb-4">{description}</p>
        <div className="flex justify-center space-x-4 text-primary">
          <span className="inline-flex items-center">
            <i className={`${icon1} mr-2`}></i> {trait1}
          </span>
          <span className="inline-flex items-center">
            <i className={`${icon2} mr-2`}></i> {trait2}
          </span>
        </div>
      </div>
    </div>
  );
};

const Honorees: React.FC = () => {
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

  const backgroundStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="honorees"
      className="py-16 md:py-24 px-4 bg-primary text-primary-foreground relative"
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
            LAS HOMENAJEADAS
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Celebrando a nuestras dos magníficas cumpleañeras con la grandeza
            que merecen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <HonoreeCard
              name="ALBA AURELIA"
              title="LA PRIMERA EMPERATRIZ"
              description="Conocida por su sabiduría, gracia y hospitalidad inigualable en todo el imperio"
              trait1="Entusiasta del Vino"
              trait2="Experta Bromista"
              icon1="fas fa-wine-bottle"
              icon2="fas fa-laugh"
              imagePlaceholder="birthday-girl-1"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <HonoreeCard
              name="BLANCA AGUSTINA"
              title="LA DIVINA CÓNSUL"
              description="Venerada por su mente estratégica, talento artístico y generosidad sin límites"
              trait1="Bailarina Consumada"
              trait2="Maestra de Juegos"
              icon1="fas fa-music"
              icon2="fas fa-dice"
              imagePlaceholder="birthday-girl-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Honorees;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Assistant {
  id: string;
  name: string;
  pair: string;
  quest: string;
}

const assistants: Assistant[] = [
  {
    id: "1",
    name: "Nerea",
    pair: "Carla",
    quest:
      "Encargarse de multar cualquier comportamiento que se considere multable (la multa es invitar a un chupito a cualquier otra persona del cumpleaños). Llevar una libreta para anotar las multas.",
  },
  {
    id: "2",
    name: "Marco",
    pair: "Lucía",
    quest:
      "Recitar juntos un poema en latín (proporcionado en la fiesta) frente a al menos 5 invitados.",
  },
  {
    id: "3",
    name: "Julia",
    pair: "Antonio",
    quest:
      "Crear juntos una corona de laurel con materiales disponibles en la fiesta.",
  },
  {
    id: "4",
    name: "Antonio",
    pair: "Julia",
    quest:
      "Organizar un pequeño desfile de moda romana con al menos 4 participantes.",
  },
  {
    id: "5",
    name: "Claudia",
    pair: "Sebastián",
    quest:
      "Encontrar una antigua receta romana y preparar un breve discurso sobre ella.",
  },
  {
    id: "6",
    name: "Sebastián",
    pair: "Claudia",
    quest:
      "Crear y liderar un juego de adivinanzas de temática romana para un grupo de invitados.",
  },
  {
    id: "7",
    name: "Elena",
    pair: "Gabriel",
    quest:
      "Escribir un decreto imperial humorístico y leerlo en voz alta durante la celebración.",
  },
  {
    id: "8",
    name: "Gabriel",
    pair: "Elena",
    quest: "Organizar una breve representación de una escena histórica romana.",
  },
  {
    id: "9",
    name: "Valeria",
    pair: "Diego",
    quest:
      "Crear un escudo romano decorativo con los materiales disponibles en la fiesta.",
  },
  {
    id: "10",
    name: "Diego",
    pair: "Valeria",
    quest:
      "Organizar una pequeña competencia de carreras de cuadrigas (usando caballos imaginarios).",
  },
];

const AssignmentFinder: React.FC = () => {
  const [selectedAssistant, setSelectedAssistant] = useState<Assistant | null>(
    null,
  );
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleChange = (value: string) => {
    const assistant = assistants.find((a) => a.id === value) || null;
    setSelectedAssistant(assistant);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <section id="quest" className="py-16 md:py-24 px-4 relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-12 roman-border"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-4xl"
      >
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary mb-4">
            MISIONES IMPERIALES
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Encuentra tu misión imperial y con quien deberás completarla durante
            la celebración. ¡Gloria y honor aguardan!
          </p>
        </div>

        <div className="bg-muted/30 border-2 border-secondary p-8 rounded-sm shadow-lg">
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-2xl text-primary mb-6">
              SELECCIONA TU NOMBRE DE ASISTENTE
            </h3>
            <div className="max-w-md mx-auto">
              <Select onValueChange={handleChange}>
                <SelectTrigger className="w-full p-4 border-2 border-muted rounded-sm focus:border-primary focus:outline-none bg-background">
                  <SelectValue placeholder="Elige tu nombre..." />
                </SelectTrigger>
                <SelectContent className="bg-background border-2 border-secondary">
                  <SelectGroup>
                    {assistants.map((assistant) => (
                      <SelectItem
                        key={assistant.id}
                        value={assistant.id}
                        className="font-lato"
                      >
                        {assistant.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedAssistant && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="border-2 border-secondary bg-background shadow-lg">
                <CardHeader className="bg-primary/10 border-b border-secondary">
                  <CardTitle className="font-cinzel text-xl text-primary text-center">
                    Asignación para {selectedAssistant.name}
                  </CardTitle>
                  <CardDescription className="text-center font-lato">
                    Compañero de misión:{" "}
                    <span className="font-bold text-primary">
                      {selectedAssistant.pair}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="p-4 bg-muted/20 rounded-sm border border-secondary">
                    <div className="text-center mb-4">
                      <h4 className="font-cinzel text-xl text-primary">
                        MISIÓN ASIGNADA
                      </h4>
                      <div className="w-16 h-0.5 bg-secondary mx-auto mt-2"></div>
                    </div>
                    <p className="font-lato">{selectedAssistant.quest}</p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="font-cinzel text-primary text-xl">
                        SPQR
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-12 roman-border"></div>
    </section>
  );
};

export default AssignmentFinder;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: number;
  alt: string;
  src: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    alt: "Imagen de Galería 1",
    src: "/src/components/ui/images/alba_blanca.jpeg",
  },
  {
    id: 2,
    alt: "Imagen de Galería 2",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.50.39.jpeg",
  },
  {
    id: 3,
    alt: "Imagen de Galería 3",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.07.jpeg",
  },
  {
    id: 4,
    alt: "Imagen de Galería 4",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.08.jpeg",
  },
  {
    id: 5,
    alt: "Imagen de Galería 5",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.09.jpeg",
  },
  {
    id: 6,
    alt: "Imagen de Galería 6",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.11.jpeg",
  },
  {
    id: 7,
    alt: "Imagen de Galería 7",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.55.36.jpeg",
  },
  {
    id: 8,
    alt: "Imagen de Galería 8",
    src: "/src/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.09 (2).jpeg",
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary mb-4">
            GALERÍA IMPERIAL
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Recuerdos de todo el imperio, documentando las gloriosas aventuras
            de nuestras cumpleañeras
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative overflow-hidden bg-muted group"
              style={{ paddingTop: "100%" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <i className="fas fa-image text-4xl text-muted-foreground opacity-30"></i>
              </div>
              <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <button
                    onClick={() => openImage(image)}
                    className="bg-background text-primary p-2 rounded-full"
                  >
                    <i className="fas fa-expand-alt"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-4xl bg-background border-2 border-secondary">
          <div className="relative pt-[75%] w-full overflow-hidden">
            <img
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <i className="fas fa-image text-6xl text-muted-foreground opacity-30"></i>
            </div>
          </div>
          <div className="text-center py-2">
            <p className="font-cinzel text-lg text-primary">
              {selectedImage?.alt || "Imagen de Galería"}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

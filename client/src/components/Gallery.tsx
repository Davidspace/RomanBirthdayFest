import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import albaBlanca from "@/components/ui/images/alba_blanca.jpeg";
import image2 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.50.39.jpeg";
import image3 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.07.jpeg";
import image4 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.08.jpeg";
import image5 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.09.jpeg";
import image6 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.11.jpeg";
import image7 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.55.36.jpeg";
import image8 from "@/components/ui/images/WhatsApp Image 2025-04-14 at 23.51.09 (2).jpeg";

interface GalleryImage {
  id: number;
  alt: string;
  src: string;
}

const galleryImages = [
  {
    id: 1,
    alt: "Imagen de Galería 1",
    src: albaBlanca,
  },
  {
    id: 2,
    alt: "Imagen de Galería 2",
    src: image2,
  },
  {
    id: 3,
    alt: "Imagen de Galería 3",
    src: image3,
  },
  {
    id: 4,
    alt: "Imagen de Galería 4",
    src: image4,
  },
  {
    id: 5,
    alt: "Imagen de Galería 5",
    src: image5,
  },
  {
    id: 6,
    alt: "Imagen de Galería 6",
    src: image6,
  },
  {
    id: 7,
    alt: "Imagen de Galería 7",
    src: image7,
  },
  {
    id: 8,
    alt: "Imagen de Galería 8",
    src: image8,
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
            Recuerdos por todo el imperio, documentando las gloriosas aventuras
            de nuestras cumpleañeras
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                onClick={() => openImage(image)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-4xl">
          <div className="relative aspect-square w-full overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

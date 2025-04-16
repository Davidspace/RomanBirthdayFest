import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cinzel text-xl mb-4">SOBRE LA CELEBRACIÓN</h3>
            <p className="font-lato">
              Una gloriosa celebración romana de cumpleaños en honor a nuestras
              dos emperatrices. Únete a nosotros para un día inolvidable de
              festines, alegría y esplendor imperial.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-xl mb-4">CONTACTA AL SENADO</h3>
            <ul className="font-lato space-y-2">
              <li className="flex items-center">
                <i className="fas fa-scroll mr-2"></i> Envía un mensaje por
                paloma mensajera
              </li>
              <li className="flex items-center">
                <i className="fas fa-fire mr-2"></i> Enciende las señales de
                fuego
              </li>
              <li className="flex items-center">
                <i className="fas fa-dove mr-2"></i> Despacha a tu mensajero más
                veloz
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center mr-40">
            <h3 className="font-cinzel text-xl mb-4">SIGUE AL IMPERIO</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/chatis23_/"
                className="bg-secondary text-primary p-3 rounded-full hover:bg-opacity-90 transition-opacity"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary text-center">
          <p className="font-lato">
            © MMXXIV · CELEBRACIÓN DE CUMPLEAÑOS DEL IMPERIO ROMANO · TODOS LOS
            DERECHOS RESERVADOS POR DECRETO IMPERIAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

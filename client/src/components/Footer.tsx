import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cinzel text-xl mb-4">ABOUT THE CELEBRATION</h3>
            <p className="font-lato">
              A glorious Roman birthday celebration in honor of our two empresses. Join us for an unforgettable evening of feasting, merriment, and imperial splendor.
            </p>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl mb-4">CONTACT THE SENATE</h3>
            <ul className="font-lato space-y-2">
              <li className="flex items-center">
                <i className="fas fa-scroll mr-2"></i> Send a message via carrier pigeon
              </li>
              <li className="flex items-center">
                <i className="fas fa-fire mr-2"></i> Light the signal fires
              </li>
              <li className="flex items-center">
                <i className="fas fa-dove mr-2"></i> Dispatch your fastest messenger
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl mb-4">FOLLOW THE EMPIRE</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-secondary text-primary p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-secondary text-primary p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-secondary text-primary p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-secondary text-primary p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary text-center">
          <p className="font-lato">© MMXXIV · ROMAN EMPIRE BIRTHDAY CELEBRATION · ALL RIGHTS RESERVED BY IMPERIAL DECREE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

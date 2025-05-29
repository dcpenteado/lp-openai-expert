import React from 'react';
    import { motion } from 'framer-motion';
    import { BrainCircuit } from 'lucide-react';

    export const Header = () => {
      return (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="py-6 px-4 sm:px-8 bg-gray-950/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-800"
        >
          <div className="container mx-auto flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
                OpenAI Expert
              </span>
            </motion.div>
            <nav className="flex space-x-4 md:space-x-6">
              <a href="#about-course" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base">O Curso</a>
              <a href="#about-professor" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base">Professor</a>
              <a href="#faq" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base">FAQ</a>
              <a href="#waitlist-form" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base">Lista de Espera</a>
            </nav>
          </div>
        </motion.header>
      );
    };
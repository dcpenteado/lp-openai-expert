import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, Linkedin, Twitter } from 'lucide-react';

    export const Footer = () => {
      const currentYear = new Date().getFullYear();
      return (
        <motion.footer 
          className="py-8 px-4 sm:px-8 bg-gray-950 text-gray-500 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <motion.a 
                href="https://github.com/dcpenteado" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/diegopenteado/" /* Replace with actual LinkedIn URL */
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://twitter.com/diegocpenteado" /* Replace with actual Twitter URL */
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </div>
            <p className="text-sm">
              &copy; {currentYear} OpenAI Expert. Todos os direitos reservados.
            </p>
            <p className="text-xs mt-1">
              Desenvolvido com <span className="text-primary">❤</span> e Inteligência Artificial.
            </p>
          </div>
        </motion.footer>
      );
    };
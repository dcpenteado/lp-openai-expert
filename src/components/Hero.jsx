import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Zap, BookOpen } from 'lucide-react';

    export const Hero = () => {
      const scrollToWaitlist = () => {
        const waitlistSection = document.getElementById('waitlist-form');
        if (waitlistSection) {
          waitlistSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      
      const titleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 120, delay: 0.1 } },
      };


      return (
        <motion.section
          className="py-24 px-4 sm:px-8 text-center bg-gradient-to-b from-gray-950 via-purple-900/10 to-blue-900/20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500"
              variants={titleVariants}
            >
              Domine o Futuro com OpenAI Expert
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Aprofunde-se nos produtos da OpenAI e transforme sua carreira com o curso mais completo do mercado.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-purple-600 hover:to-blue-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out text-lg px-8 py-6"
                onClick={scrollToWaitlist}
              >
                <Zap className="mr-2 h-5 w-5" /> Quero ser Expert!
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10 hover:text-purple-300 shadow-md transform hover:scale-105 transition-all duration-300 ease-out text-lg px-8 py-6"
                asChild
              >
                <a href="https://github.com/dcpenteado/openai-expert" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-5 w-5" /> Código Fonte (Basic)
                </a>
              </Button>
            </motion.div>
             <motion.div className="mt-20" variants={itemVariants}>
                <img 
                    alt="Demonstração abstrata de inteligência artificial e redes neurais em tons roxos e azuis escuros" 
                    class="w-full max-w-3xl mx-auto rounded-lg shadow-2xl shadow-primary/20"
                  src="https://images.unsplash.com/photo-1667371927761-8fa90f33a248" />
            </motion.div>
          </div>
        </motion.section>
      );
    };
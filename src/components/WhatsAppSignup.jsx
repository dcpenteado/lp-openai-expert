import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Phone } from 'lucide-react';
    import { motion } from 'framer-motion';

    export const WhatsAppSignup = ({ onSubmit }) => {
      const [phone, setPhone] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (phone.trim()) {
          setIsLoading(true);
          await onSubmit(phone.trim());
          setPhone('');
          setIsLoading(false);
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };

      return (
        <motion.section 
          className="py-16 px-4 sm:px-8 bg-gradient-to-r from-purple-800/50 via-violet-800/50 to-indigo-800/50"
        >
          <div className="container mx-auto max-w-2xl text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Entre no Nosso Grupo Exclusivo do WhatsApp!
            </motion.h2>
            <motion.p 
              className="text-lg text-purple-200 mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 }}
            >
              Receba novidades, dicas e interaja com outros alunos. Insira seu telefone abaixo:
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-full sm:w-auto flex-grow">
                <Label htmlFor="whatsapp-phone" className="sr-only">
                  Seu Telefone
                </Label>
                <div className="relative">
                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="tel"
                    id="whatsapp-phone"
                    placeholder="Seu telefone com DDD"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isLoading}
                    className="pl-10 bg-gray-900/70 border-primary text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 h-12 text-lg"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out w-full sm:w-auto h-12 text-lg disabled:opacity-70"
              >
                {isLoading ? 'Enviando...' : 'Entrar no Grupo'}
              </Button>
            </motion.form>
             <motion.div 
                className="mt-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              >
                <img 
                    alt="Interface do WhatsApp mostrando uma conversa em grupo do curso, com tema escuro e detalhes roxos" 
                    class="w-full max-w-md mx-auto rounded-lg shadow-xl shadow-primary/20"
                  src="https://images.unsplash.com/photo-1685586784800-42bac9c32db9" />
            </motion.div>
          </div>
        </motion.section>
      );
    };
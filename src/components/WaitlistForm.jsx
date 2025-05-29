import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { User, Mail, Phone as PhoneIcon, Send } from 'lucide-react';
    import { motion } from 'framer-motion';

    export const WaitlistForm = ({ onSubmit }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() && email.trim()) { 
          setIsLoading(true);
          await onSubmit({ name, email, phone: phone.trim() });
          setName('');
          setEmail('');
          setPhone('');
          setIsLoading(false);
        }
      };

      const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
      };
      
      const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } }
      };

      return (
        <motion.section 
          id="waitlist-form" 
          className="py-20 px-4 sm:px-8 bg-gray-900"
        >
          <div className="container mx-auto max-w-2xl">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="glassmorphism-card border-2 border-primary shadow-2xl shadow-primary/40">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">
                    Lista de Espera: Curso Expert
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg mt-2">
                    O curso Expert ainda não está à venda. Seja o primeiro a saber quando lançarmos!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="text"
                          id="name"
                          placeholder="Seu nome completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={isLoading}
                          className="pl-10 w-full bg-gray-800/70 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">Email</Label>
                       <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="email"
                          id="email"
                          placeholder="seuemail@dominio.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isLoading}
                          className="pl-10 w-full bg-gray-800/70 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone-waitlist" className="block text-sm font-medium text-purple-300 mb-1">Telefone (Opcional)</Label>
                       <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="tel"
                          id="phone-waitlist"
                          placeholder="Seu telefone com DDD"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={isLoading}
                          className="pl-10 w-full bg-gray-800/70 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary h-12"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-purple-600 hover:to-blue-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out text-lg py-3 disabled:opacity-70"
                    >
                      {isLoading ? 'Enviando...' : <><Send className="mr-2 h-5 w-5" /> Quero Ser Avisado!</>}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-gray-500 text-center w-full">
                    Respeitamos sua privacidade. Seus dados não serão compartilhados.
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      );
    };
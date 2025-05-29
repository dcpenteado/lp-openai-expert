import React from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { CheckCircle, Sparkles, Github, DollarSign, CalendarDays } from 'lucide-react';
    import { motion } from 'framer-motion';

    const PlanCard = ({ title, description, price, features, actionText, actionLink, isExpert = false, delay = 0 }) => {
      const scrollToWaitlist = () => {
        const waitlistSection = document.getElementById('waitlist-form');
        if (waitlistSection) {
          waitlistSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
          className="h-full"
        >
          <Card className={`flex flex-col h-full glassmorphism-card border-2 ${isExpert ? 'border-primary shadow-primary/30' : 'border-secondary shadow-secondary/30'} hover:shadow-xl transition-shadow duration-300`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className={`text-3xl font-bold ${isExpert ? 'text-primary' : 'text-secondary'}`}>{title}</CardTitle>
                {isExpert && <Sparkles className="h-8 w-8 text-yellow-400" />}
              </div>
              <CardDescription className="text-gray-400 pt-1">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {price && (
                <div className="mb-6">
                  <p className="text-4xl font-bold text-white">{price}</p>
                  {isExpert && <p className="text-sm text-gray-400">ou 12x sem juros</p>}
                </div>
              )}
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 mr-3 mt-1 flex-shrink-0 ${isExpert ? 'text-primary' : 'text-secondary'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {actionLink ? (
                <Button 
                  className={`w-full text-lg py-3 ${isExpert ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-purple-700' : 'bg-gradient-to-r from-secondary to-blue-600 hover:from-blue-600 hover:to-blue-700'} text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  asChild
                >
                  <a href={actionLink} target={actionLink.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                    {isExpert ? <DollarSign className="mr-2 h-5 w-5"/> : <Github className="mr-2 h-5 w-5"/>}
                    {actionText}
                  </a>
                </Button>
              ) : (
                 <Button 
                  className={`w-full text-lg py-3 ${isExpert ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-purple-700' : 'bg-gradient-to-r from-secondary to-blue-600 hover:from-blue-600 hover:to-blue-700'} text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  onClick={isExpert ? scrollToWaitlist : null}
                >
                  {isExpert ? <CalendarDays className="mr-2 h-5 w-5"/> : <Github className="mr-2 h-5 w-5"/>}
                  {actionText}
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export const AboutCourse = () => {
      const basicFeatures = [
        "Acesso ao código fonte completo das aulas.",
        "Fundamentos dos principais produtos OpenAI.",
        "Projetos práticos para iniciar sua jornada.",
        "Comunidade de aprendizado ativa."
      ];

      const expertFeatures = [
        "Tudo do Básico, e muito mais!",
        "Até 35 aulas aprofundadas.",
        "Módulos avançados sobre GPT, DALL-E, Whisper, etc.",
        "Técnicas de Fine-tuning e Embeddings.",
        "Integração com APIs e desenvolvimento de aplicações reais.",
        "Sessões de mentoria e suporte exclusivo.",
        "Certificado de Conclusão Expert."
      ];

      return (
        <section id="about-course" className="py-20 px-4 sm:px-8 bg-gray-950">
          <div className="container mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Escolha Seu Caminho para a Maestria em IA
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Oferecemos duas trilhas de aprendizado para você se tornar um especialista em OpenAI, adaptadas às suas necessidades e objetivos.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <PlanCard
                title="Basic"
                description="Comece sua jornada com acesso gratuito ao código fonte."
                features={basicFeatures}
                actionText="Acessar Código no GitHub"
                actionLink="https://github.com/dcpenteado/openai-expert"
                delay={0.2}
              />
              <PlanCard
                title="Expert"
                description="A experiência completa para se tornar um mestre em OpenAI."
                price="R$ 199"
                features={expertFeatures}
                actionText="Entrar na Lista de Espera"
                isExpert={true}
                delay={0.35}
              />
            </div>
             <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                 <img   
                    alt="Gráfico comparativo mostrando as funcionalidades das versões Basic e Expert do curso, com design escuro e toques de roxo" 
                    class="w-full max-w-4xl mx-auto rounded-lg shadow-xl shadow-primary/10"
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498" />
            </motion.div>
          </div>
        </section>
      );
    };
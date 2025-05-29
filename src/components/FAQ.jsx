import React from 'react';
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion";
    import { motion } from 'framer-motion';
    import { HelpCircle } from 'lucide-react';

    const faqData = [
      {
        question: "Para quem é este curso?",
        answer: "Este curso é ideal para desenvolvedores, estudantes de tecnologia, empreendedores e qualquer pessoa interessada em dominar as ferramentas de Inteligência Artificial da OpenAI, desde o nível básico até o avançado.",
      },
      {
        question: "Preciso de conhecimento prévio em IA ou programação?",
        answer: "Para a versão Basic, um conhecimento fundamental de programação (preferencialmente Python) é útil para acompanhar os exemplos de código. A versão Expert aprofunda em conceitos que podem exigir uma base mais sólida, mas o curso é estruturado para guiar você progressivamente.",
      },
      {
        question: "Qual a diferença entre a versão Basic e Expert?",
        answer: "A versão Basic oferece acesso gratuito ao código fonte de todas as aulas, cobrindo os fundamentos. A versão Expert é um mergulho completo, com até 35 aulas detalhadas, módulos avançados, técnicas de fine-tuning, projetos práticos complexos, mentoria e certificado.",
      },
      {
        question: "Como funciona o pagamento da versão Expert?",
        answer: "A versão Expert custa R$ 199. Esse valor pode ser parcelado em até 12x sem juros no cartão de crédito. Atualmente, estamos com uma lista de espera para o lançamento da versão Expert.",
      },
      {
        question: "Terei acesso a atualizações futuras do curso?",
        answer: "Sim! Alunos da versão Expert terão acesso a todas as atualizações de conteúdo e novas aulas que forem adicionadas ao curso dentro do período de acesso estipulado no momento da compra.",
      },
      {
        question: "O curso oferece certificado?",
        answer: "Sim, a versão Expert do curso OpenAI Expert oferece um certificado de conclusão digital que você poderá adicionar ao seu LinkedIn e currículo.",
      },
      {
        question: "Como posso tirar dúvidas durante o curso?",
        answer: "Alunos da versão Expert terão acesso a uma comunidade exclusiva e sessões de mentoria para tirar dúvidas diretamente com o professor e outros colegas. Para a versão Basic, a comunidade no GitHub é um ótimo local para discussões.",
      }
    ];

    export const FAQ = () => {
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

      return (
        <section id="faq" className="py-20 px-4 sm:px-8 bg-gray-950">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <HelpCircle className="inline-block h-10 w-10 mr-3 mb-1 text-primary" />
              Perguntas Frequentes
            </motion.h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-gray-900/50 border border-gray-800 rounded-lg shadow-lg hover:border-primary/50 transition-colors duration-300">
                    <AccordionTrigger className="p-6 text-left text-lg font-semibold text-gray-200 hover:text-primary transition-colors duration-200">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 text-gray-400 text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: faqData.length * 0.1 + 0.2, ease: "easeOut" }}
            >
              <img 
                alt="Ilustração abstrata de pontos de interrogação e balões de fala em tons de roxo e azul escuro, simbolizando perguntas e respostas"
                class="w-full max-w-sm mx-auto opacity-80"
               src="https://images.unsplash.com/photo-1636114673156-052a83459fc1" />
            </motion.div>
          </div>
        </section>
      );
    };
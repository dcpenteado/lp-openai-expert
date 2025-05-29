import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, DollarSign, MapPin, Building } from 'lucide-react';
import foto from '@/assets/foto.jpg';

export const AboutProfessor = () => {
  const professor = {
    name: "Diego Penteado",
    location: "Presidente Prudente, SP",
    education: "Engenheiro pela Escola Politécnica da USP",
    experience: "Desenvolvedor de Software há 22 anos",
    saas: [
      { name: "InteligenciaBot.com", url: "https://inteligenciabot.com" },
      { name: "RestauraFoto.com", url: "https://restaurafoto.com" }
    ],
    mrr: "130k",
    company: "Proprietário de fábrica de software com 50+ projetos entregues"
  };

  const achievements = [
    { icon: <MapPin className="h-6 w-6 text-primary" />, text: professor.location },
    { icon: <Award className="h-6 w-6 text-primary" />, text: professor.education },
    { icon: <Briefcase className="h-6 w-6 text-primary" />, text: professor.experience },
    { icon: <DollarSign className="h-6 w-6 text-primary" />, text: `2 SaaS no ar, construindo o 3º - MRR ${professor.mrr}` },
    { icon: <Building className="h-6 w-6 text-primary" />, text: professor.company },
  ];

  return (
    <section id="about-professor" className="py-20 px-4 sm:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Sobre mim
        </motion.h2>
        <motion.p
          className="text-2xl font-semibold text-center text-gray-300 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {professor.name}
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <img
              alt={`Foto de Diego Penteado, professor do curso OpenAI Expert`}
              class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary shadow-2xl shadow-primary/40"
              src={foto} />
          </motion.div>

          <div className="w-full md:w-2/3 space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 glassmorphism-card border-primary/30"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              >
                {item.icon}
                <p className="text-lg text-gray-200">{item.text}</p>
              </motion.div>
            ))}
            <motion.div
              className="flex items-center space-x-4 p-4 glassmorphism-card border-primary/30"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 + achievements.length * 0.15, ease: "easeOut" }}
            >
              <Briefcase className="h-6 w-6 text-primary" />
              <div className="text-lg text-gray-200">
                <span>SaaS de sucesso: </span>
                {professor.saas.map((saas, i) => (
                  <React.Fragment key={saas.name}>
                    <a href={saas.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                      {saas.name}
                    </a>
                    {i < professor.saas.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
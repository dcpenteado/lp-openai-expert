import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Briefcase, DollarSign, Globe, Target, BookOpen, TrendingUp, CheckCircle, AlertTriangle, Rocket, Users, Lightbulb } from 'lucide-react';

const FeatureItem = ({ icon, title, description, delay }) => (
    <motion.div
        className="flex flex-col items-center p-6 glassmorphism-card border-primary/20 hover:border-primary/40 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
    >
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">{title}</h3>
        <p className="text-gray-300 text-center text-sm">{description}</p>
    </motion.div>
);

const BenefitItem = ({ icon, text, delay }) => (
    <motion.li
        className="flex items-center space-x-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
    >
        {icon}
        <span className="text-lg text-gray-300">{text}</span>
    </motion.li>
);

export const SalesPitch = () => {
    const scrollToDiv = (div_id) => {
        const waitlistSection = document.getElementById(div_id);
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="sales-pitch" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
            <div className="container mx-auto">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <Brain className="inline-block h-10 w-10 mr-3 mb-1 text-primary" /> Domine a Inteligência Artificial e Transforme Sua Carreira
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    No Brasil ou no Mundo. Você está vendo o mercado se transformar. <b>IA, SaaS, MicroSaaS</b>... Palavras que agora estão no centro da inovação.
                </motion.p>

                <motion.div
                    className="p-8 mb-12 glassmorphism-card border-yellow-500/50 shadow-yellow-500/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                >
                    <p className="text-xl text-gray-300 text-center mb-2">
                        👉 <span className="font-semibold">Faltam profissionais realmente qualificados.</span>
                    </p>
                    <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        A maioria dos profissionais só "arranha a superfície" com o ChatGPT. Poucos dominam as verdadeiras capacidades técnicas da OpenAI. E esses <span className="text-purple-400 font-semibold">são disputados a peso de ouro</span>, muitas vezes em vagas remotas internacionais pagando em dólar ou euro.
                    </p>
                    <p className="text-xl text-gray-200 text-center mt-6 font-semibold">
                        Este curso foi criado para te colocar entre essa elite.
                    </p>
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center my-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                >
                    <Rocket className="inline-block h-9 w-9 mr-3 mb-1 text-primary" /> Por que este curso é <span className="text-purple-400">diferente</span> de tudo o que existe?
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <FeatureItem
                        icon={<Target className="h-12 w-12 text-purple-400" />}
                        title="Cobertura Total da API OpenAI"
                        description="Não é sobre ChatGPT. Aprenda tecnicamente Assistants API, voz, imagens, agentes, file search e mais."
                        delay={0.3}
                    />
                    <FeatureItem
                        icon={<Briefcase className="h-12 w-12 text-purple-400" />}
                        title="Base para SaaS e MicroSaaS com IA"
                        description="Crie produtos digitais inteligentes, automatize processos e gere receita com seu próprio SaaS."
                        delay={0.4}
                    />
                    <FeatureItem
                        icon={<Globe className="h-12 w-12 text-purple-400" />}
                        title="Empregabilidade Global"
                        description="Torne-se um candidato premium para vagas remotas internacionais com conhecimento prático."
                        delay={0.5}
                    />
                    <FeatureItem
                        icon={<BookOpen className="h-12 w-12 text-purple-400" />}
                        title="Mais de 35 Aulas Direto ao Ponto"
                        description="Clareza técnica, capacidade de execução e visão estratégica. Sem enrolação, aplicável desde a primeira semana."
                        delay={0.6}
                    />
                    <FeatureItem
                        icon={<Users className="h-12 w-12 text-purple-400" />}
                        title="Comunidade e Mentoria (Expert)"
                        description="Acesso a grupo exclusivo e sessões de mentoria para acelerar seu aprendizado e networking."
                        delay={0.7}
                    />
                    <FeatureItem
                        icon={<Lightbulb className="h-12 w-12 text-purple-400" />}
                        title="Visão Estratégica de IA"
                        description="Entenda como a IA está moldando negócios e como você pode liderar essa transformação."
                        delay={0.8}
                    />
                </div>

                <motion.div
                    className="p-8 my-16 glassmorphism-card border-green-500/50 shadow-green-500/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-green-400 mb-6">
                        Profissionais que dominam IA com profundidade têm 3 coisas:
                    </h3>
                    <ul className="space-y-4 max-w-lg mx-auto">
                        <BenefitItem icon={<DollarSign className="h-7 w-7 text-green-400" />} text="Salários acima da média" delay={0.5} />
                        <BenefitItem icon={<Globe className="h-7 w-7 text-green-400" />} text="Liberdade geográfica e de tempo" delay={0.6} />
                        <BenefitItem icon={<CheckCircle className="h-7 w-7 text-green-400" />} text="Segurança em um mercado competitivo" delay={0.7} />
                    </ul>
                    <p className="text-lg text-gray-300 text-center mt-8">
                        Se você quer deixar de ser apenas mais um e começar a <span className="font-semibold text-purple-300">liderar a transformação com IA</span>, este é o seu próximo passo.
                    </p>
                </motion.div>

                <motion.div
                    className="text-center my-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
                        <TrendingUp className="inline-block h-9 w-9 mr-2 mb-1 text-primary" /> A próxima grande onda já começou.
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">Você vai surfar ou assistir?</p>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Faça parte do seleto grupo que realmente entende, aplica e cria com Inteligência Artificial. O mercado precisa de você — mas só se você estiver <span className="font-semibold text-purple-300">preparado</span>.
                    </p>

                </motion.div>

                <motion.div
                    className="text-center mt-12 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                        🎓 Garanta agora sua vaga no curso mais completo de OpenAI do Brasil.
                    </h3>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-xl hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 ease-out text-xl px-10 py-8"
                        onClick={() => {scrollToDiv('about-course')}}
                    >
                        👉 Quero dominar a IA e transformar minha carreira
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
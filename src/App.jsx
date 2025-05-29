import React, { useEffect } from 'react';
    import { Header } from '@/components/Header';
    import { Hero } from '@/components/Hero';
    import { AboutCourse } from '@/components/AboutCourse';
    import { AboutProfessor } from '@/components/AboutProfessor';
    import { WhatsAppSignup } from '@/components/WhatsAppSignup';
    import { WaitlistForm } from '@/components/WaitlistForm';
    import { FAQ } from '@/components/FAQ';
    import { Footer } from '@/components/Footer';
    import { Toaster } from '@/components/ui/toaster';
    import { useToast } from '@/components/ui/use-toast';
    import { supabase } from '@/lib/supabaseClient';
    import { motion, useAnimation } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';

    const AnimatedSection = ({ children, className, customVariants, threshold = 0.1 }) => {
      const controls = useAnimation();
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: threshold,
      });

      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

      const defaultVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
        hidden: { opacity: 0, y: 60 },
      };

      return (
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={customVariants || defaultVariants}
          className={className}
        >
          {children}
        </motion.div>
      );
    };

    function App() {
      const { toast } = useToast();

      const handleWaitlistSubmit = async (formData) => {
        try {
          const { data, error } = await supabase
            .from('waitlist_entries')
            .insert([
              { name: formData.name, email: formData.email, phone: formData.phone },
            ])
            .select();

          if (error) {
            throw error;
          }

          toast({
            title: "Sucesso!",
            description: "Você foi adicionado à lista de espera.",
            variant: "default",
          });
        } catch (error) {
          console.error('Error submitting to waitlist:', error);
          toast({
            title: "Erro!",
            description: "Não foi possível adicionar à lista de espera. Tente novamente.",
            variant: "destructive",
          });
        }
      };

      const handleWhatsAppSubmit = async (phone) => {
         try {
          const { data, error } = await supabase
            .from('whatsapp_signups')
            .insert([
              { phone_number: phone },
            ])
            .select();

          if (error) {
            throw error;
          }
          toast({
            title: "Quase lá!",
            description: "Seu número foi registrado para o grupo do WhatsApp.",
            variant: "default",
          });
        } catch (error) {
          console.error('Error submitting WhatsApp signup:', error);
          toast({
            title: "Erro!",
            description: "Não foi possível registrar seu número. Tente novamente.",
            variant: "destructive",
          });
        }
      };

      return (
        <div className="min-h-screen flex flex-col bg-gray-950 text-gray-200 overflow-x-hidden">
          <Header />
          <main className="flex-grow">
            <AnimatedSection threshold={0.2}>
              <Hero />
            </AnimatedSection>
            <AnimatedSection threshold={0.15}>
              <AboutCourse />
            </AnimatedSection>
            <AnimatedSection threshold={0.15}>
              <AboutProfessor />
            </AnimatedSection>
            <AnimatedSection threshold={0.15}>
              <WhatsAppSignup onSubmit={handleWhatsAppSubmit} />
            </AnimatedSection>
            <AnimatedSection threshold={0.15}>
              <WaitlistForm onSubmit={handleWaitlistSubmit} />
            </AnimatedSection>
            <AnimatedSection threshold={0.15}>
              <FAQ />
            </AnimatedSection>
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    }

    export default App;
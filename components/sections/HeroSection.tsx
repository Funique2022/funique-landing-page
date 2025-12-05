'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Scene } from '@/components/3d/Scene';
import { ParticleBackground } from '@/components/3d/ParticleBackground';
import { BeeModel } from '@/components/3d/BeeModel';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Scene className="w-full h-full">
          <ParticleBackground />
          <BeeModel autoRotate />
        </Scene>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white mb-8 leading-[1.05] tracking-tight">
            {t.hero.title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-400 mb-16 font-light"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('about')}
            >
              {t.hero.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:border-white hover:bg-white/15 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 backdrop-blur-md bg-white/10 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('about')}
            >
              <span className="drop-shadow-sm">{t.hero.cta2}</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:border-white hover:bg-white/15 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 backdrop-blur-md bg-white/10 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('contact')}
            >
              <span className="drop-shadow-sm">{t.hero.cta3}</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border border-gray-600 rounded-full flex justify-center opacity-60"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


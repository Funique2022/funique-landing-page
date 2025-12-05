'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function PlatformSection() {
  const { t } = useLanguage();

  return (
    <section id="platform" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">{t.platform.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Funique+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 h-full">
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{t.platform.funiquePlus.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.platform.funiquePlus.description}
              </p>
            </div>
          </motion.div>

          {/* Creator-Oriented */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 h-full">
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{t.platform.creator.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.platform.creator.description}
              </p>
            </div>
          </motion.div>

          {/* Content Modes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 h-full">
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{t.platform.content.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.platform.content.description}
              </p>
            </div>
          </motion.div>

          {/* FuniMovie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 h-full">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">{t.platform.funiMovie.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {t.platform.funiMovie.subtitle}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.platform.funiMovie.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


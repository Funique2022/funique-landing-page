'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">{t.about.title}</h2>
        </motion.div>

        {/* Brand Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">{t.about.brand.title}</h3>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              {t.about.brand.description}
            </p>
          </div>
        </motion.div>

        {/* What We Do */}
        {t.about.whatWeDo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">{t.about.whatWeDo.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {t.about.whatWeDo.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-gray-50 border border-gray-200/50 hover:shadow-xl transition-all duration-500"
                >
                  <h4 className="text-2xl font-semibold mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Technology */}
        {t.about.technology && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-5xl font-semibold text-center mb-8 tracking-tight">{t.about.technology.title}</h3>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
              {t.about.technology.description}
            </p>

            {/* VR Production */}
            {t.about.technology.production && (
              <div className="max-w-6xl mx-auto">
                <h4 className="text-3xl font-semibold text-center mb-12 tracking-tight">{t.about.technology.production.title}</h4>
                
                {/* Pre-Production */}
                {t.about.technology.production.preProduction && (
                  <div className="mb-16">
                    <h5 className="text-2xl font-semibold mb-6 text-center">{t.about.technology.production.preProduction.title}</h5>
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                      {t.about.technology.production.preProduction.items.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-200/50">
                          <p className="text-lg text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Production - Cameras */}
                {t.about.technology.production.production && (
                  <div>
                    <h5 className="text-2xl font-semibold mb-8 text-center">{t.about.technology.production.production.title}</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      {t.about.technology.production.production.cameras.map((camera, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-200/50 hover:shadow-xl transition-all duration-500">
                          <h6 className="text-xl font-semibold mb-4">{camera.name}</h6>
                          <div className="space-y-2 text-gray-600">
                            <p><span className="font-medium">{language === 'zh' ? '相機數量：' : 'Cameras: '}</span>{camera.cameras}</p>
                            <p><span className="font-medium">{language === 'zh' ? '解析度：' : 'Resolution: '}</span>{camera.resolution}</p>
                            <p><span className="font-medium">{language === 'zh' ? '格式：' : 'Format: '}</span>{camera.format}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {t.about.technology.production.production.custom && (
                      <p className="text-center text-xl text-gray-600 mt-8 font-medium">
                        {t.about.technology.production.production.custom}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ModelViewer } from '@/components/3d/ModelViewer';

export function ContentCatalog() {
  const { t, language } = useLanguage();
  const [selectedModelSeries, setSelectedModelSeries] = useState<'bee' | 'arthropod'>('bee');
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  return (
    <section id="content" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">{t.content.title}</h2>
        </motion.div>

        {/* Video Series */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-32"
        >
          <h3 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">{t.content.videoSeries.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {t.content.videoSeries.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-200/50 hover:shadow-xl transition-all duration-500"
              >
                <h4 className="text-xl font-semibold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{item.titleEn}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    {item.episodes} {language === 'zh' ? '集' : 'episodes'}
                  </p>
                  <p className="text-sm text-gray-600">{item.duration}</p>
                  {item.target && (
                    <p className="text-sm text-gray-600">{item.target}</p>
                  )}
                  {item.note && (
                    <p className="text-sm text-gray-500 italic mt-2">{item.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">{t.content.models.title}</h3>
          
          {/* Model Series Selector */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => {
                setSelectedModelSeries('bee');
                setSelectedModelIndex(0);
              }}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                selectedModelSeries === 'bee'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {t.content.models.beeSeries.title} ({t.content.models.beeSeries.count})
            </button>
            <button
              onClick={() => {
                setSelectedModelSeries('arthropod');
                setSelectedModelIndex(0);
              }}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                selectedModelSeries === 'arthropod'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {t.content.models.arthropodSeries.title} ({t.content.models.arthropodSeries.count})
            </button>
          </div>

          {/* Model Viewer */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ModelViewer
                  modelType={selectedModelSeries === 'bee' ? 'bee' : 'beetle'}
                  modelIndex={selectedModelIndex}
                  autoRotate={true}
                />
              </div>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className="p-8 rounded-3xl bg-white border border-gray-200/50">
                <h4 className="text-2xl font-semibold mb-4 tracking-tight">
                  {selectedModelSeries === 'bee'
                    ? t.content.models.beeSeries.title
                    : t.content.models.arthropodSeries.title}
                </h4>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.content.models.features}</p>
                
                {/* Model Selector */}
                <div className="grid grid-cols-5 gap-3">
                  {Array.from({ length: selectedModelSeries === 'bee' ? 10 : 8 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedModelIndex(index)}
                      className={`aspect-square rounded-xl border-2 transition-all duration-300 flex items-center justify-center ${
                        selectedModelIndex === index
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <span className="text-sm font-medium">{index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function SolutionsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">{t.solutions.title}</h2>
        </motion.div>

        {/* Teaching System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-32"
        >
          <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gray-50 border border-gray-200/50">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">{t.solutions.system.title}</h3>
            <p className="text-xl text-gray-600 mb-8">{t.solutions.system.subtitle}</p>
            <ul className="space-y-4">
              {t.solutions.system.features.map((feature, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700">
                  <span className="text-black mr-3 font-semibold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="p-12 rounded-3xl bg-gray-50 border border-gray-200/50">
            <h3 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">{t.solutions.pricing.title}</h3>
            <p className="text-lg text-gray-600 mb-8">{t.solutions.pricing.subtitle}</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-300">
                    <TableHead className="font-semibold text-base">{t.solutions.pricing.table.type}</TableHead>
                    <TableHead className="font-semibold text-base">{t.solutions.pricing.table.vr360}</TableHead>
                    <TableHead className="font-semibold text-base">{t.solutions.pricing.table.vr3d}</TableHead>
                    <TableHead className="font-semibold text-base">{t.solutions.pricing.table.naked3d}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gray-200">
                    <TableCell className="font-medium text-base">
                      {language === 'zh' ? '影片授權' : 'Video License'}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {language === 'zh' ? '請洽詢' : 'Contact Us'}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {language === 'zh' ? '請洽詢' : 'Contact Us'}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {language === 'zh' ? '請洽詢' : 'Contact Us'}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gray-200">
                    <TableCell className="font-medium text-base">
                      {language === 'zh' ? '3D 模型授權' : '3D Model License'}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {language === 'zh' ? '請洽詢' : 'Contact Us'}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {language === 'zh' ? '請洽詢' : 'Contact Us'}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {language === 'zh' ? '請洽詢' : 'Contact Us'}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(language === 'zh' ? '感謝您的訊息！我們會盡快與您聯繫。' : 'Thank you for your message! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">{t.contact.title}</h2>
          <p className="text-xl md:text-2xl text-gray-400">{t.contact.subtitle}</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {t.contact.address && (
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">{language === 'zh' ? '地址' : 'Address'}</h3>
                <p className="text-gray-400">{t.contact.address}</p>
              </div>
            )}
            {t.contact.phone && (
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">{language === 'zh' ? '電話' : 'Phone'}</h3>
                <a href={`tel:${t.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.contact.phone}
                </a>
              </div>
            )}
            {t.contact.email && (
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">{language === 'zh' ? '電子郵件' : 'Email'}</h3>
                <a href={`mailto:${t.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.contact.email}
                </a>
              </div>
            )}
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-12 rounded-3xl bg-gray-900 border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-3 text-sm font-medium text-gray-300">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-3 text-sm font-medium text-gray-300">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-3 text-sm font-medium text-gray-300">
                    {t.contact.form.phone}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-3 text-sm font-medium text-gray-300">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px] rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full font-medium text-lg py-6 transition-all duration-300"
                >
                  {t.contact.form.submit}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 text-center text-gray-500"
        >
          <p className="text-sm">
            {language === 'zh' 
              ? '© 2024 Funique Earthverse. 保留所有權利。'
              : '© 2024 Funique Earthverse. All rights reserved.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'zh'
            ? 'bg-white text-black shadow-lg'
            : 'text-white/70 hover:text-white'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-white text-black shadow-lg'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}


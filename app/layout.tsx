import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Funique Earthverse - XR Immersive Exploration Education Platform',
  description: 'Funique Earthverse is an Earth and Universe exploration education brand, combining 8K and 3D immersive content.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="fixed top-6 right-6 z-50">
            <LanguageToggle />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}


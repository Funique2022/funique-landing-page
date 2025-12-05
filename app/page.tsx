import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContentCatalog } from '@/components/sections/ContentCatalog';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ContentCatalog />
      <PlatformSection />
      <SolutionsSection />
      <ContactSection />
    </main>
  );
}


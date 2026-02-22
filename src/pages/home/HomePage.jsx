import { CtaSection } from '@/features/home/components/CtaSection/CtaSection';
import { FeaturesSection } from '@/features/home/components/FeaturesSection/FeaturesSection';
import { HeroSection } from '@/features/home/components/HeroSection/HeroSection';
import { AboutSection } from '@/features/home/components/AboutSection/AboutSection';
import { FaqSection } from '@/features/home/components/FaqSection/FaqSection';
import { Footer } from '@/widgets/layout/Footer/Footer';
import { Header } from '@/widgets/layout/Header/Header';
import { PageContainer } from '@/shared/ui/PageContainer';

const HomePage = () => {
  return (
    <PageContainer>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
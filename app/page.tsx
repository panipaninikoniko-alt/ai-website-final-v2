
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import StorySection from '@/components/StorySection';
import ProfileSection from '@/components/ProfileSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <VisionSection />
      <StorySection />
      <ProfileSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

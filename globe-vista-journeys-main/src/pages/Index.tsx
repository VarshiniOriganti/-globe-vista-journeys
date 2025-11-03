import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import PackagesSection from "@/components/home/PackagesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <PackagesSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

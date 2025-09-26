import HeroSection from "@/features/Hero/HeroSection";
import StatsSection from "@/features/Stats/StatsSection";
import DiscoverySection from "@/features/Discovery/DiscoverySection";
import Listings from "@/features/Listings/Listings";
import AppDownloadSection from "@/features/Downloads/AppDownloadSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DiscoverySection />
      <Listings />
      <AppDownloadSection />
    </>
  );
};

export default Index;

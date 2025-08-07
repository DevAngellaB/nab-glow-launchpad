import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import ShopPlaceholder from "@/components/ShopPlaceholder";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCategories />
      <AboutSection />
      <ShopPlaceholder />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;

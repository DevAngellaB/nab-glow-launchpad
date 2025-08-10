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
      <div id="products">
        <ProductCategories />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="shop">
        <ShopPlaceholder />
      </div>
      <div id="newsletter">
        <NewsletterSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glow.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="N.A.B Glow Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-soft opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-primary">
            <span className="block text-glow">N.A.B</span>
            <span className="block bg-gradient-glow bg-clip-text text-transparent">
              Glow
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-text-soft mb-8 space-y-2">
            <p className="font-light">Nourish. Align. Blossom.</p>
            <p className="text-lg text-text-soft max-w-2xl mx-auto">
              Affordable skincare, body care, and digital wellness tools 
              for women seeking a simple but powerful self-care routine.
            </p>
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button variant="hero" size="xl" className="w-full sm:w-auto">
            Join the Glow List
          </Button>
          <Button variant="soft" size="xl" className="w-full sm:w-auto">
            Follow Our Journey
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-text-soft text-sm">
            ✨ Launching January 1st, 2026 ✨
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-glow-pink rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-glow-blue rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
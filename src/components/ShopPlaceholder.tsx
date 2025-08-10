import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { useToast } from "@/hooks/use-toast";

const ShopPlaceholder = () => {
  const { toast } = useToast();
  
  const handleGetNotified = (product: string) => {
    // Store product interest
    const productInterests = JSON.parse(localStorage.getItem('productInterests') || '[]');
    const newInterest = {
      product,
      timestamp: new Date().toISOString()
    };
    
    if (!productInterests.some((interest: any) => interest.product === product)) {
      productInterests.push(newInterest);
      localStorage.setItem('productInterests', JSON.stringify(productInterests));
    }
    
    toast({
      title: `${product} added to your wishlist! ✨`,
      description: "Join our waitlist to get notified when it launches!",
    });
    
    setTimeout(() => {
      smoothScrollTo('newsletter');
    }, 1500);
  };
  
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Glow Kits & Collections
          </h2>
          <p className="text-lg text-text-soft max-w-2xl mx-auto">
            Carefully curated bundles and individual products designed to elevate your self-care routine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Glow Kit */}
          <Card className="group relative overflow-hidden bg-gradient-header border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-glow-pink rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                ✨
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Starter Glow Kit
              </h3>
              <p className="text-text-soft mb-6">
                Perfect for beginners. Everything you need to start your glow journey.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$29</div>
              <Button 
                variant="glow" 
                className="w-full mb-4"
                onClick={() => handleGetNotified('Starter Glow Kit')}
              >
                Get Notified
              </Button>
              <p className="text-xs text-text-soft">Available January 2026</p>
            </div>
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
          </Card>
          
          {/* Complete Glow System */}
          <Card className="group relative overflow-hidden bg-gradient-soft border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-glow-blue rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                💎
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Complete Glow System
              </h3>
              <p className="text-text-soft mb-6">
                Full skincare routine plus body care and digital wellness tools.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$79</div>
              <Button 
                variant="glow" 
                className="w-full mb-4"
                onClick={() => handleGetNotified('Complete Glow System')}
              >
                Get Notified
              </Button>
              <p className="text-xs text-text-soft">Available January 2026</p>
            </div>
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              Best Value
            </div>
          </Card>
          
          {/* Custom Glow Plan */}
          <Card className="group relative overflow-hidden bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-glow rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                🌸
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Custom Glow Plan
              </h3>
              <p className="text-text-soft mb-6">
                Personalized routine based on your skin type and wellness goals.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$49</div>
              <Button 
                variant="glow" 
                className="w-full mb-4"
                onClick={() => handleGetNotified('Custom Glow Plan')}
              >
                Get Notified
              </Button>
              <p className="text-xs text-text-soft">Available January 2026</p>
            </div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Personalized
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Card className="bg-accent/50 border-border/50 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Pre-Launch Special
              </h3>
              <p className="text-text-soft mb-4">
                Join our waitlist now and get <span className="font-bold text-primary">20% off</span> your first order 
                plus free shipping when we launch!
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  toast({
                    title: "20% Discount Reserved! 🎉",
                    description: "Complete your signup below to secure your early bird discount!",
                  });
                  setTimeout(() => smoothScrollTo('newsletter'), 1000);
                }}
              >
                Claim Your Discount
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShopPlaceholder;
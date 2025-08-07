import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import skincareImage from "@/assets/skincare-collection.jpg";
import digitalWellnessImage from "@/assets/digital-wellness.jpg";

const categories = [
  {
    title: "Skincare",
    description: "Gentle, effective formulas for glowing, healthy skin",
    image: skincareImage,
    features: ["Natural Ingredients", "Sensitive Skin Friendly", "Daily Routines"],
    comingSoon: true
  },
  {
    title: "Body Care",
    description: "Nourishing body products for head-to-toe wellness",
    image: skincareImage, // Reusing for now, can generate specific body care image later
    features: ["Moisturizing", "Aromatherapy", "Self-Care Rituals"],
    comingSoon: true
  },
  {
    title: "Digital Glow Tools",
    description: "Wellness apps and digital guides for mindful living",
    image: digitalWellnessImage,
    features: ["Guided Routines", "Progress Tracking", "Mindfulness"],
    comingSoon: true
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Your Glow Journey
          </h2>
          <p className="text-lg text-text-soft max-w-2xl mx-auto">
            Discover our three pillars of wellness designed to help you nourish your skin, 
            align your body, and blossom into your most radiant self.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                {category.comingSoon && (
                  <div className="absolute top-4 right-4 bg-glow-pink text-text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {category.title}
                </h3>
                <p className="text-text-soft mb-4">
                  {category.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-text-soft">
                      <div className="w-2 h-2 bg-glow-pink rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="glow" className="w-full">
                  Get Notified
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
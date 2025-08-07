import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Meet Nicole
          </h2>
          <p className="text-lg text-text-soft">
            The heart and soul behind N.A.B Glow
          </p>
        </div>
        
        <Card className="bg-gradient-header border-border/50 shadow-card">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  My Journey to Glow
                </h3>
                
                <p className="text-text-soft leading-relaxed">
                  Hi beautiful! I'm Nicole, and like many of you, I've been on a journey to find 
                  skincare and wellness products that actually work without breaking the bank.
                </p>
                
                <p className="text-text-soft leading-relaxed">
                  After years of trying countless products and feeling overwhelmed by complicated 
                  routines, I realized what we really need is simple, effective, and affordable 
                  self-care that fits into our real lives.
                </p>
                
                <p className="text-text-soft leading-relaxed">
                  N.A.B Glow is my mission to create products and tools that help you 
                  <span className="text-glow-pink font-medium"> nourish </span> 
                  your skin naturally, 
                  <span className="text-glow-blue font-medium"> align </span> 
                  your wellness routine with your lifestyle, and 
                  <span className="text-primary font-medium"> blossom </span> 
                  into your most confident, radiant self.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-glow rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 bg-card rounded-full flex items-center justify-center shadow-soft">
                    <div className="text-center">
                      <div className="text-6xl mb-2">✨</div>
                      <p className="text-text-primary font-medium">Nicole</p>
                      <p className="text-text-soft text-sm">Founder & Creator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-bold text-text-primary mb-2">Our Mission</h4>
                  <p className="text-text-soft text-sm">
                    Making self-care accessible, simple, and effective for every woman
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2">Our Promise</h4>
                  <p className="text-text-soft text-sm">
                    Quality products that deliver results without compromising your budget
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2">Our Values</h4>
                  <p className="text-text-soft text-sm">
                    Authenticity, transparency, and empowering women to feel their best
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
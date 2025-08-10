import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Netlify Forms
      const formData = new FormData();
      formData.append('email', email);
      formData.append('form-name', 'waitlist');
      formData.append('timestamp', new Date().toISOString());
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        toast({
          title: "Welcome to the Glow List! ✨",
          description: "You'll be the first to know when we launch on January 1st, 2026!",
        });
        setEmail("");
        
        // Store in localStorage as backup
        const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
        if (!existingEmails.includes(email)) {
          existingEmails.push({
            email,
            timestamp: new Date().toISOString(),
            source: 'newsletter'
          });
          localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));
        }
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Oops! Something went wrong 😔",
        description: "Please try again or email us directly at hello@nabglow.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-glow">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Be the First to Glow
          </h2>
          <p className="text-lg text-text-soft max-w-2xl mx-auto">
            Join our exclusive waitlist and be the first to discover our carefully curated 
            collection when we launch on <span className="font-semibold text-text-primary">January 1st, 2026</span>!
          </p>
        </div>
        
        <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-card max-w-md mx-auto">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center text-lg py-3"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Glow List"}
              </Button>
            </form>
            
            <div className="mt-6 space-y-3">
              <p className="text-sm text-text-soft">
                ✨ Exclusive early access to new products
              </p>
              <p className="text-sm text-text-soft">
                💕 Special launch discounts and bundles
              </p>
              <p className="text-sm text-text-soft">
                🌸 Weekly self-care tips and routines
              </p>
            </div>
            
            <p className="text-xs text-text-soft mt-6">
              No spam, just glow. Unsubscribe anytime.
            </p>
          </div>
        </Card>
        
        <div className="mt-12">
          <p className="text-text-soft mb-4">Follow our journey:</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://instagram.com/glow.withnab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="soft" className="group-hover:shadow-glow transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @glow.withnab
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
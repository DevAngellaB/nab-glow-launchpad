const Footer = () => {
  return (
    <footer className="bg-text-primary text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-glow">N.A.B Glow</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Affordable skincare, body care, and digital wellness tools for women 
              seeking a simple but powerful self-care routine.
            </p>
            <p className="text-background/60 text-sm">
              Launching January 1st, 2026
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-glow-pink">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-glow-pink transition-colors">About Nicole</a></li>
              <li><a href="#products" className="hover:text-glow-pink transition-colors">Our Products</a></li>
              <li><a href="#newsletter" className="hover:text-glow-pink transition-colors">Join Waitlist</a></li>
              <li><a href="#shop" className="hover:text-glow-pink transition-colors">Glow Kits</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-glow-blue">Connect</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a 
                  href="https://instagram.com/glow.withnab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-glow-blue transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@nabglow.com" className="hover:text-glow-blue transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-glow-blue transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 N.A.B Glow. All rights reserved. | Made with 💕 for glowing skin and wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
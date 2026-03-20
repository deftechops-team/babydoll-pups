import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>Bijou Babies</h3>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">
            Extreme Babydoll Korean Maltese
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center">
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Navigate</h4>
            <div className="space-y-2">
              {["Home", "Parents", "Puppies", "Gallery"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Information</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", path: "/about-us" },
                { label: "About the Breed", path: "/about-the-breed" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "FAQ", path: "/faq" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Forms</h4>
            <div className="space-y-2">
              {[
                { label: "Puppy Application", path: "/puppy-application" },
                { label: "Waitlist Agreement", path: "/waitlist-agreement" },
                { label: "Purchase Agreement", path: "/purchase-agreement" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/shop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Shop</Link>
              <a href="https://www.facebook.com/profile.php?id=61576885446436" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Bijou Babies. Made with <Heart className="w-3 h-3 text-primary fill-primary" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

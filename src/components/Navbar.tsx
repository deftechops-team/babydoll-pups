import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Heart } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Parents", path: "/parents" },
  { label: "Puppies", path: "/puppies" },
  { label: "FAQ", path: "/faq" },
  {
    label: "Info",
    path: "#",
    dropdown: [
      { label: "About Us", path: "/about-us" },
      { label: "About the Breed", path: "/about-the-breed" },
      { label: "How It Works", path: "/how-it-works" },
      { label: "Puppy Go Home", path: "/puppy-go-home" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  {
    label: "Forms",
    path: "#",
    dropdown: [
      { label: "Puppy Application", path: "/puppy-application" },
      { label: "Waitlist Agreement", path: "/waitlist-agreement" },
      { label: "Purchase Agreement", path: "/purchase-agreement" },
    ],
  },
  { label: "Contact", path: "/contact" },
  { label: "Shop", path: "/shop" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center py-3 border-b border-border">
          <Link to="/" className="text-center">
            <h1 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Bijou Babies
            </h1>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
              Extreme Babydoll Korean Maltese
            </p>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-1 py-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.dropdown ? (
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-xs tracking-[0.15em] uppercase font-body font-light transition-colors hover:text-primary ${
                    openDropdown === item.label ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-xs tracking-[0.15em] uppercase font-body font-light transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 min-w-[200px] bg-card border border-border rounded-md shadow-lg py-2 z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`block px-4 py-2 text-xs tracking-[0.1em] uppercase font-body font-light transition-colors hover:bg-secondary hover:text-primary ${
                        isActive(sub.path) ? "text-primary bg-secondary" : "text-foreground"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center justify-end py-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-xs tracking-[0.15em] uppercase font-body text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-xs tracking-[0.1em] uppercase font-body text-muted-foreground hover:text-primary"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-xs tracking-[0.15em] uppercase font-body transition-colors hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

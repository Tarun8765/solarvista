import LogoImg from "/solarLogo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import navLinks from "../mock/navLinks.json";
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <Link
              to="tel:+18009876543"
              target="blank"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 800 987 6543</span>
            </Link>
            <Link
              to="mailto:info@solarvista.com"
              target="blank"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@solarvista.com</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="hidden sm:inline">🌱</span>
            <span>Go Green, Save More - Get Your Free Quote Today!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
              <div className=" text-primary-foreground py-2 rounded-lg">
                {/* <Sun className="h-6 w-6" />
                 */}
                <img
                  src={LogoImg}
                  alt="logo"
                  style={{
                    width: "60px",
                  }}
                />
              </div>
              <div>
                <span className="text-foreground">SolarVista</span>
                <p className="text-xs text-muted-foreground font-normal">
                  Clean Energy Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center gap-8">
                {navLinks?.navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Get a Quote Button - Right */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <Button asChild size="lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks?.navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

import logoImg from "/solarLogo.png";
import { Link } from "react-router-dom";
import SocialLinks from "../components/ui/socialLinks";
import { Phone, Mail, MapPin } from "lucide-react";
import AllLinks from "../mock/navLinks.json";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Layout */}
        <div className="md:hidden text-center space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center ">
            <div className="flex items-center gap-2 mb-2 mr-10">
              <div className=" text-primary-foreground  rounded-lg">
                <img
                  src={logoImg}
                  alt="logo"
                  style={{
                    width: "60px",
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">SolarVista</h3>
                <p className="text-xs text-muted-foreground">
                  Clean Energy Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading the solar revolution with innovative solutions for homes
              and businesses.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {AllLinks?.navLinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                    {item.separator == true ? (
                      <span className="ml-2">|</span>
                    ) : (
                      ""
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Our services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {AllLinks?.usefullLinks?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                    {item.separator == true ? (
                      <span className="ml-2">|</span>
                    ) : (
                      ""
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Have a question or need guidance?
            </p>
            <p className="text-sm text-muted-foreground">
              Our support team is here to help you every step of the way.
            </p>
            {/* Social links */}
            <SocialLinks />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className=" text-primary-foreground  rounded-lg">
                <img
                  src={logoImg}
                  alt="logo"
                  style={{
                    width: "60px",
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">SolarVista</h3>
                <p className="text-xs text-muted-foreground">
                  Clean Energy Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Leading the solar revolution with innovative solutions for homes
              and businesses.
            </p>
            {/* <div className="flex gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircleHeart className="h-5 w-5" />
              </a>
            </div> */}
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/solar-panel-installation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Solar Panel Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/energy-storage-systems"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Energy Storage Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services/system-maintenance"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  System Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/solar-consulting"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Solar Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+18009876543"
                  className="hover:text-primary transition-colors"
                >
                  +1 800 987 6543
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@solarvista.com"
                  className="hover:text-primary transition-colors"
                >
                  info@solarvista.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Solar Street, Green City, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SolarVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

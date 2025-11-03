import { Link } from "react-router-dom";
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground rotate-45" />
              </div>
              <span className="font-heading text-2xl font-bold">GlobeVista</span>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              Curated trips, flexible bookings, unforgettable experiences. Discover the world with GlobeVista.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/destinations" className="text-white/70 hover:text-white transition-fast text-sm">Destinations</Link></li>
              <li><Link to="/packages" className="text-white/70 hover:text-white transition-fast text-sm">Packages</Link></li>
              <li><Link to="/gallery" className="text-white/70 hover:text-white transition-fast text-sm">Gallery</Link></li>
              <li><Link to="/booking" className="text-white/70 hover:text-white transition-fast text-sm">Book Now</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-fast text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-fast text-sm">Contact Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-fast text-sm">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-fast text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-fast text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-fast text-sm">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-3">
              Subscribe to our newsletter for exclusive deals and travel inspiration.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              <span className="text-white/70">hello@globevista.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={18} />
              <span className="text-white/70">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={18} />
              <span className="text-white/70">123 Travel Street, Adventure City</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} GlobeVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

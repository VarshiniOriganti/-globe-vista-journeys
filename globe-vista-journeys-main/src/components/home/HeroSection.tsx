import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Globe2, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Majestic mountain landscape with turquoise lake"
          className="w-full h-full object-cover animate-scale-in brightness-75"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 text-balance"
          >
            Discover More.
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Travel Better.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-background/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto text-balance"
          >
            Curated trips, flexible bookings, unforgettable experiences. Your perfect journey starts here with GlobeVista.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/destinations">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14 transition-smooth group"
              >
                Explore Destinations
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Button>
            </Link>
            <Link to="/packages">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground text-base px-8 h-14 transition-smooth"
              >
                View Packages
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Compass className="text-accent" size={24} />
              </div>
              <div className="text-background font-bold text-2xl md:text-3xl mb-1">150+</div>
              <div className="text-background/70 text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-accent" size={24} />
              </div>
              <div className="text-background font-bold text-2xl md:text-3xl mb-1">50K+</div>
              <div className="text-background/70 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe2 className="text-accent" size={24} />
              </div>
              <div className="text-background font-bold text-2xl md:text-3xl mb-1">25+</div>
              <div className="text-background/70 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;

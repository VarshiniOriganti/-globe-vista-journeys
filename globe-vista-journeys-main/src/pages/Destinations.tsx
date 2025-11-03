import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight } from "lucide-react";
import santoriniImg from "@/assets/dest-santorini.jpg";
import japanImg from "@/assets/dest-japan.jpg";
import alpsImg from "@/assets/dest-alps.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import safariImg from "@/assets/dest-safari.jpg";
import icelandImg from "@/assets/dest-iceland.jpg";
import { motion, useInView } from "framer-motion";
import React from "react";

const destinations = [
  { 
    id: 1, 
    name: "Santorini, Greece", 
    region: "Europe", 
    image: santoriniImg, 
    trips: 24, 
    rating: 4.9, 
    price: 1299, 
    description: "Stunning sunsets and white-washed villages",
    detailText: "Experience the romance of Santorini with its iconic blue-domed churches, pristine beaches, and world-renowned sunsets over the caldera. Savor authentic Greek cuisine and explore ancient ruins."
  },
  { 
    id: 2, 
    name: "Kyoto, Japan", 
    region: "Asia", 
    image: japanImg, 
    trips: 18, 
    rating: 5.0, 
    price: 1899, 
    description: "Ancient temples and cherry blossoms",
    detailText: "Immerse yourself in Japanese culture through serene temples, traditional tea ceremonies, and the breathtaking beauty of cherry blossom season. Discover geisha districts and exquisite gardens."
  },
  { 
    id: 3, 
    name: "Swiss Alps", 
    region: "Europe", 
    image: alpsImg, 
    trips: 31, 
    rating: 4.8, 
    price: 1599, 
    description: "Majestic peaks and alpine charm",
    detailText: "Adventure awaits in the Swiss Alps with world-class skiing, scenic train journeys, and charming mountain villages. Enjoy fresh mountain air and luxurious alpine resorts."
  },
  { 
    id: 4, 
    name: "Maldives", 
    region: "Asia", 
    image: maldivesImg, 
    trips: 15, 
    rating: 4.9, 
    price: 2499, 
    description: "Tropical paradise and luxury resorts",
    detailText: "Indulge in ultimate relaxation at overwater bungalows, pristine coral reefs, and turquoise lagoons. Perfect for honeymoons, snorkeling, and unwinding in paradise."
  },
  { 
    id: 5, 
    name: "African Safari", 
    region: "Africa", 
    image: safariImg, 
    trips: 12, 
    rating: 5.0, 
    price: 3499, 
    description: "Wildlife encounters and vast savannas",
    detailText: "Witness the Big Five in their natural habitat on an unforgettable safari adventure. From morning game drives to sunset savanna vistas, experience Africa's untamed wilderness."
  },
  { 
    id: 6, 
    name: "Iceland", 
    region: "Europe", 
    image: icelandImg, 
    trips: 20, 
    rating: 4.8, 
    price: 1899, 
    description: "Northern lights and dramatic landscapes",
    detailText: "Chase the aurora borealis, explore ice caves, and relax in geothermal hot springs. Iceland's rugged beauty offers waterfalls, glaciers, and unique cultural experiences."
  },
];

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const regions = ["All", "Europe", "Asia", "Africa", "Americas", "Oceania"];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredDestinations = selectedRegion === "All" 
    ? destinations 
    : destinations.filter(d => d.region === selectedRegion);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary py-20 text-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            >
              <MapPin size={16} />
              <span className="text-sm font-medium">Explore the World</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl font-bold mb-6"
            >
              Destinations That Inspire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto"
            >
              From pristine beaches to snow-capped mountains, discover handpicked destinations around the globe.
            </motion.p>
          </div>
        </section>

      {/* Overview Copy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Your Perfect Adventure
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Not sure where to go? Start with regions that match your travel style. 
              Love beaches, food, or culture? Use the filters below and explore 
              our editor‑picked spots along with the best seasons to visit and local tips.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-smooth">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-heading text-xl font-semibold mb-2">Handpicked Destinations</h3>
                <p className="text-muted-foreground text-sm">
                  Each location is carefully selected by our travel experts for unique experiences and authentic local culture.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-smooth">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-heading text-xl font-semibold mb-2">Curated Experiences</h3>
                <p className="text-muted-foreground text-sm">
                  From luxury retreats to adventure expeditions, find trips that match your interests and travel goals.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-smooth">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-heading text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Benefit from insider knowledge with recommendations from locals and experienced travelers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Filters */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  className={selectedRegion === region ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={`${destination.name} scenic view`}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute top-4 right-4 bg-background px-3 py-1 rounded-full text-xs font-semibold">
                      {destination.region}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{destination.description}</p>
                    <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-3">
                      {destination.detailText}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-accent text-accent" />
                        <span className="text-sm font-semibold">{destination.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{destination.trips} trips</span>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <div className="text-xl font-bold text-primary">${destination.price}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA removed from Destinations page */}
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;

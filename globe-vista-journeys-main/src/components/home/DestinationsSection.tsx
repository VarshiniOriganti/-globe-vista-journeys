import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import santoriniImg from "@/assets/dest-santorini.jpg";
import japanImg from "@/assets/dest-japan.jpg";
import alpsImg from "@/assets/dest-alps.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import { motion, useInView } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "White-washed villages overlooking the Aegean Sea",
    image: santoriniImg,
    trips: 24,
    price: "from $1,299",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Ancient temples and cherry blossom serenity",
    image: japanImg,
    trips: 18,
    price: "from $1,899",
  },
  {
    id: 3,
    name: "Swiss Alps",
    description: "Majestic peaks and charming alpine villages",
    image: alpsImg,
    trips: 31,
    price: "from $1,599",
  },
  {
    id: 4,
    name: "Maldives",
    description: "Overwater bungalows in tropical paradise",
    image: maldivesImg,
    trips: 15,
    price: "from $2,499",
  },
];

const DestinationsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="destinations" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MapPin size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">Popular Destinations</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Where Will You Go Next?
          </h2>
          <p className="text-muted-foreground text-lg">
            From sun-soaked beaches to snow-capped mountains, discover handpicked destinations that inspire wonder.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-smooth cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name} scenic view`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="font-heading text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-background/80 text-sm mb-3">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-background/70 text-xs">{destination.trips} trips available</span>
                    <span className="font-semibold text-accent">{destination.price}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button variant="outline" className="bg-background text-primary border-none hover:bg-background/90">
                    Explore Now
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/destinations">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              View All Destinations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

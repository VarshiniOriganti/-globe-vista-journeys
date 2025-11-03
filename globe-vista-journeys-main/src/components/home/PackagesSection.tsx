import React from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import santoriniImg from "@/assets/dest-santorini.jpg";
import safariImg from "@/assets/dest-safari.jpg";
import icelandImg from "@/assets/dest-iceland.jpg";
import { motion, useInView } from "framer-motion";

const packages = [
  {
    id: 1,
    name: "Greek Island Hopping",
    destination: "Santorini & Mykonos",
    image: santoriniImg,
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 people",
    rating: 4.9,
    reviews: 187,
    price: 1299,
    highlights: ["Island Ferry Tours", "Wine Tasting", "Beach Days"],
    badge: "Most Popular",
  },
  {
    id: 2,
    name: "African Safari Adventure",
    destination: "Kenya & Tanzania",
    image: safariImg,
    duration: "10 Days / 9 Nights",
    groupSize: "4-8 people",
    rating: 5.0,
    reviews: 142,
    price: 3499,
    highlights: ["Big Five Safari", "Masai Village", "Serengeti"],
    badge: "Premium",
  },
  {
    id: 3,
    name: "Northern Lights Quest",
    destination: "Iceland",
    image: icelandImg,
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 people",
    rating: 4.8,
    reviews: 203,
    price: 1899,
    highlights: ["Aurora Hunt", "Blue Lagoon", "Glacier Hike"],
    badge: "Adventure",
  },
];

const PackagesSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready-Made Adventures
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertly crafted itineraries with everything included. Just pick, book, and go.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} package`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-none">
                  {pkg.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.destination}</p>

                {/* Package Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="fill-accent text-accent" />
                    <span className="text-sm font-semibold text-foreground">{pkg.rating}</span>
                    <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/packages">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              Browse All Packages
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Clock, Users, Star, ArrowRight } from "lucide-react";
import santoriniImg from "@/assets/dest-santorini.jpg";
import japanImg from "@/assets/dest-japan.jpg";
import safariImg from "@/assets/dest-safari.jpg";
import icelandImg from "@/assets/dest-iceland.jpg";
import alpsImg from "@/assets/dest-alps.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
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
    highlights: ["Island Ferry Tours", "Wine Tasting", "Beach Days", "Local Cuisine"],
    badge: "Most Popular",
    category: "Beach & Islands",
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
    highlights: ["Big Five Safari", "Masai Village", "Serengeti", "Ngorongoro Crater"],
    badge: "Premium",
    category: "Wildlife & Safari",
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
    highlights: ["Aurora Hunt", "Blue Lagoon", "Glacier Hike", "Ice Cave"],
    badge: "Adventure",
    category: "Adventure",
  },
  {
    id: 4,
    name: "Japanese Culture Immersion",
    destination: "Tokyo & Kyoto",
    image: japanImg,
    duration: "8 Days / 7 Nights",
    groupSize: "2-15 people",
    rating: 4.9,
    reviews: 256,
    price: 2199,
    highlights: ["Temple Tours", "Tea Ceremony", "Sushi Class", "Mount Fuji"],
    badge: "Cultural",
    category: "Cultural",
  },
  {
    id: 5,
    name: "Alpine Adventure",
    destination: "Swiss Alps",
    image: alpsImg,
    duration: "6 Days / 5 Nights",
    groupSize: "2-12 people",
    rating: 4.8,
    reviews: 164,
    price: 1799,
    highlights: ["Mountain Hiking", "Cable Car Rides", "Alpine Villages", "Swiss Chocolate"],
    badge: "Adventure",
    category: "Adventure",
  },
  {
    id: 6,
    name: "Maldives Luxury Escape",
    destination: "Maldives",
    image: maldivesImg,
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 people",
    rating: 5.0,
    reviews: 198,
    price: 2999,
    highlights: ["Overwater Villa", "Spa Treatments", "Snorkeling", "Private Dinners"],
    badge: "Luxury",
    category: "Beach & Islands",
  },
];

const Packages = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary to-primary py-20 text-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            >
              <Package size={16} />
              <span className="text-sm font-medium">Curated Travel Packages</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl font-bold mb-6"
            >
              All-Inclusive Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Expertly crafted itineraries with flights, accommodation, tours, and more. Just book and enjoy.
            </motion.p>
          </div>
        </section>

      {/* How it works */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Tell us your plan", text: "Share dates, budget, and interests." },
              { step: "2", title: "Get a custom itinerary", text: "We fine‑tune hotels, tours, and travel." },
              { step: "3", title: "Travel stress‑free", text: "We manage bookings and on‑trip support." },
            ].map((s) => (
              <div key={s.step} className="bg-card rounded-xl p-6 shadow-card">
                <div className="text-primary font-bold text-2xl mb-2">Step {s.step}</div>
                <h3 className="font-heading font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Packages Grid */}
        <section className="py-16 bg-background" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth group"
                >
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

                  <div className="p-6">
                    <div className="text-xs text-primary font-semibold mb-2">{pkg.category}</div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{pkg.destination}</p>
                    
                    <p className="text-sm text-foreground/90 mb-4 line-clamp-2">
                      {pkg.id === 1 && "Experience the magic of the Greek islands with our carefully curated tour. Sail through the crystal-clear Aegean Sea, explore whitewashed villages, and enjoy breathtaking sunsets over the caldera."}
                      {pkg.id === 2 && "Embark on an unforgettable journey through East Africa's most famous game reserves. Witness the Great Migration, meet the Maasai people, and stay in luxury safari lodges under the African sky."}
                      {pkg.id === 3 && "Chase the mesmerizing Northern Lights across Iceland's dramatic landscapes. Soak in geothermal hot springs, walk behind waterfalls, and explore ice caves in this land of fire and ice."}
                      {pkg.id === 4 && "Immerse yourself in Japan's rich cultural heritage, from the neon-lit streets of Tokyo to the ancient temples of Kyoto. Experience traditional tea ceremonies, sushi-making classes, and the beauty of cherry blossoms."}
                      {pkg.id === 5 && "Breathe in the fresh Alpine air as you hike through picturesque Swiss villages and mountain trails. Enjoy cable car rides, cheese fondue, and stunning views of the snow-capped peaks."}
                      {pkg.id === 6 && "Indulge in the ultimate tropical paradise with our luxury Maldives escape. Stay in overwater bungalows, snorkel in vibrant coral reefs, and enjoy world-class spa treatments by the ocean."}
                    </p>

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

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights.slice(0, 3).map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                        View Details
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";
import santoriniImg from "@/assets/dest-santorini.jpg";
import japanImg from "@/assets/dest-japan.jpg";
import alpsImg from "@/assets/dest-alps.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import safariImg from "@/assets/dest-safari.jpg";
import icelandImg from "@/assets/dest-iceland.jpg";
import { motion, useInView } from "framer-motion";

const galleryImages = [
  { id: 1, image: santoriniImg, title: "Santorini Sunset", location: "Greece" },
  { id: 2, image: japanImg, title: "Kyoto Temple", location: "Japan" },
  { id: 3, image: alpsImg, title: "Alpine Village", location: "Switzerland" },
  { id: 4, image: maldivesImg, title: "Maldives Paradise", location: "Maldives" },
  { id: 5, image: safariImg, title: "African Safari", location: "Kenya" },
  { id: 6, image: icelandImg, title: "Northern Lights", location: "Iceland" }
];

const Gallery = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent to-primary py-20 text-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            >
              <Camera size={16} />
              <span className="text-sm font-medium">Travel Gallery</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl font-bold mb-6"
            >
              Moments That Inspire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Explore stunning photography from travelers around the world. Let these moments inspire your next adventure.
            </motion.p>
          </div>
        </section>

      {/* Page intro text */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground">
            Each image tells a story from our community of travelers. Click any
            photo to see the location and use the gallery as inspiration when
            building your own itinerary.
          </p>
        </div>
      </section>

        {/* Masonry Gallery */}
        <section className="py-16 bg-background" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-smooth cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} in ${item.location}`}
                    className="w-full h-auto transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                    <div className="text-background">
                      <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-background/80 text-sm">{item.location}</p>
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

export default Gallery;

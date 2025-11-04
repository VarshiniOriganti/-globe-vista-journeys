import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Globe2, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Partnerships in over 150 destinations worldwide, ensuring authentic local experiences.",
  },
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We love what we do, and it shows in every trip we curate and every traveler we serve.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning service recognized by industry leaders and loved by our customers.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction drives everything we do. We're here for you 24/7, wherever you are.",
  },
];

const About = () => {
  const valuesRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

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
              <Globe2 size={16} />
              <span className="text-sm font-medium">About Our Journey</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto"
            >
              For over 25 years, GlobeVista has been crafting unforgettable journeys for travelers worldwide.
            </motion.p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At GlobeVista, we believe travel is more than visiting new places—it's about creating lasting memories, 
                  forging connections, and discovering the world's beauty. Our mission is to make exceptional travel 
                  accessible, seamless, and unforgettable for every adventurer.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From solo explorers to family vacationers, we curate personalized experiences with expert local guides, 
                  vetted accommodations, and flexible itineraries that put you in control of your journey.
                </p>
              </div>
              <div className="md:w-2/5 lg:w-1/3 rounded-lg overflow-hidden shadow-xl mx-auto">
                <img 
                  src="https://brabbu.com/blog/wp-content/uploads/2015/10/10-best-inspirational-travel-quotes1.jpg" 
                  alt="Travel Inspiration" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30" ref={valuesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at GlobeVista.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background" ref={statsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "25+", label: "Years of Excellence" },
                { value: "50K+", label: "Happy Travelers" },
                { value: "150+", label: "Destinations" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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

export default About;

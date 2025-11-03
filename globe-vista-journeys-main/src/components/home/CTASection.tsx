import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

const CTASection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Your Journey, Your Way
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          >
            Discover breathtaking destinations with tailor‑made itineraries and seamless planning
            from start to finish. We make every trip simple, personal, and unforgettable.
          </motion.p>

          {/* Three features instead of newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10"
          >
            {[
              { title: "Curated Destinations", desc: "Handpicked places and stays for every budget and mood." },
              { title: "Seamless Planning", desc: "One place to book flights, stays, and unique experiences." },
              { title: "Real Stories & Tips", desc: "Traveler‑tested guides to make the most of your time." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6 text-gray-800 shadow-sm">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-8 group">
                Discover Trips
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 px-8">
                Plan with an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

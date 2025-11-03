import React from "react";
import { Shield, Award, HeartHandshake, Headphones, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Travel with confidence knowing your booking is protected and secure.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized globally for excellence in travel experiences and customer care.",
  },
  {
    icon: HeartHandshake,
    title: "Tailored Experiences",
    description: "Customize every detail to match your unique travel style and preferences.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our travel experts are always here to help, wherever you are in the world.",
  },
];

const trustmarks = [
  "Best Price Guarantee",
  "Flexible Booking",
  "Instant Confirmation",
  "Local Experts",
  "Sustainable Travel",
  "Trusted by 50K+ Travelers",
];

const WhyChooseSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose GlobeVista?
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to making your travel dreams a reality with unmatched service and expertise.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-smooth">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trustmarks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-muted/30 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustmarks.map((mark, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-secondary-foreground" />
                </div>
                <span className="text-foreground font-medium">{mark}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

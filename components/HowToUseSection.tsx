
import { motion } from "framer-motion";
import { Beaker, Leaf, Clock } from "lucide-react";

const howToUse = [
  {
    step: 1,
    title: "Clean & Dry",
    description: "Start with clean, dry hair and scalp",
    icon: Beaker,
  },
  {
    step: 2,
    title: "Apply",
    description: "Use dropper to apply directly to areas of concern",
    icon: Leaf,
  },
  {
    step: 3,
    title: "Massage",
    description: "Gently massage into scalp for 1-2 minutes",
    icon: Clock,
  },
];

export default function HowToUseSection() {
  return (
    <section className="py-24 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">How to Use</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img 
              src="/images/How-To-Use-Topical.webp" 
              alt="GrowNatural Application Process"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="space-y-8">
            {howToUse.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-2">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
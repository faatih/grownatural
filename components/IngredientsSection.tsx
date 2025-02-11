import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Leaf, Beaker } from "lucide-react";

const ingredients = [
  {
    name: "Biotin",
    description: "Supports hair growth and overall hair health",
    icon: Leaf,
  },
  {
    name: "Saw Palmetto",
    description: "Helps prevent hair loss by blocking DHT",
    icon: Beaker,
  },
  {
    name: "Collagen",
    description: "Improves hair strength and elasticity",
    icon: Leaf,
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-24 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Key Ingredients</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow border-none bg-white">
                <ingredient.icon className="h-12 w-12 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-serif mb-4">{ingredient.name}</h3>
                <p className="text-gray-600 leading-relaxed">{ingredient.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

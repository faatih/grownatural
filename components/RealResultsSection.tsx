import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const results = [
  {
    duration: "3 Months",
    description: "Visible reduction in hair loss and improved scalp health",
    image: "/images/results1.PNG",
  },
  {
    duration: "6 Months",
    description: "Noticeable hair regrowth and increased density",
    image: "/images/results2.PNG",
  },
  {
    duration: "12 Months",
    description: "Significant improvement in overall hair thickness and coverage",
    image: "/images/results3.PNG",
  },
];

export default function RealResultsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Real Results</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none">
                <div className="relative h-64">
                  <Image
                    src={result.image}
                    alt={`Results after ${result.duration}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 bg-[#F8F7F4]">
                  <h3 className="text-xl font-serif mb-2">{result.duration}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FlaskConical, Leaf, Clock } from "lucide-react";

const benefits = [
  {
    title: "Bilimsel Kanıtlarla Formüle Edilmiş",
    description: "Klinik araştırmalarla desteklenen etkili içeriklerle.",
    icon: FlaskConical,
  },
  {
    title: "Doğal İçerikler",
    description: "Doğal ve kanıtlanmış içeriklerin mükemmel sentezi.",
    icon: Leaf,
  },
  {
    title: "Gözle Görülür Sonuçlar",
    description: "Sadece 3 ayda fark edilir değişim.",
    icon: Clock,
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          GrowNatural Farkı
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon; // extract Icon component
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow border-none bg-[#F8F7F4]">
                  <Icon className="h-12 w-12 mx-auto mb-6 text-primary" />
                  <h3 className="text-xl font-serif mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FlaskRound, Microscope } from "lucide-react"; // Ensure these icons are correctly imported

const science = [
  {
    title: "Klinik Kanıtlı",
    description: "Formülümüz, saç büyümesini destekleyen klinik çalışmalarla kanıtlanmıştır.",
    icon: FlaskRound,
  },
  {
    title: "İleri Araştırma",
    description: "Saç restorasyonunda uzman bilim insanları tarafından titizlikle geliştirildi.",
    icon: Microscope,
  },
];

export default function ScienceBehindSection() {
  return (
    <section id="science" className="py-24 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          GrowNatural’ın Bilimsel Temelleri
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {science.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow border-none bg-white">
                <item.icon className="h-12 w-12 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
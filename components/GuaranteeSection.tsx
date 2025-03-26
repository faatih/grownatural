import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-24 bg-[#F8F7F4]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <ShieldCheck className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Gururla Garantili</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Ürünümüzün etkinliğine tam anlamıyla inanıyoruz. Eğer 90 gün içinde memnun kalmazsanız, paranızı eksiksiz iade ediyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
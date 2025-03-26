import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Hayalinizdeki Saçlara Kavuşmaya Hazır mısınız?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Binlerce mutlu müşteri deneyiminden ilham alın; sağlıklı, dolgun saçlara ulaşmanın tam zamanı.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Hemen Başlayın
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
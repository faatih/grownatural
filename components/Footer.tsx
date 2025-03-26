import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-xl font-serif">GrowNatural</span>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GrowNatural. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
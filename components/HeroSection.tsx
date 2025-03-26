import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F8F7F4] pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-8 leading-tight">
              Saçlarınızda Doğal Mucizeler
              <br />
              <span className="text-primary">GrowNatural</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Daha dolgun ve sağlıklı saçlara ulaşın. Klinik kanıtlarla desteklenen formülümüzle, bilimin ve doğanın mükemmel uyumunu deneyimleyin.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Şimdi Alışveriş Yap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Daha Fazla Bilgi
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <Image 
              src="/images/logo.png" 
              alt="GrowNatural Saç Çözümü"
              width={600}
              height={600}
              className="w-full max-w-[900px] mx-auto"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-primary/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
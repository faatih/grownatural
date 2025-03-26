import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

// Yeni formül bileşenleri listesi
const formulaItems = [
  
  {
    name: "Kafein",
    percentage: "2.00%",
    description: "Kan dolaşımını artırarak folikül canlanmasını sağlar.",
    icon: "/images/coffee.jpg"
  },
  {
    name: "Biberiye Yağı",
    percentage: "1.00%",
    description: "Dolaşımı artırır ve potansiyel DHT inhibisyonu etkisi gösterir.",
    icon: "/images/rosemary2.jpg"
  },
  {
    name: "Çay Ağacı Yağı",
    percentage: "2.00%",
    description: "Saç derisinin sağlığını korur ve antimikrobiyal etki sunar.",
    icon: "/images/teatreeoil.jpg"
  },


  {
    name: "Minoxidil USP",
    percentage: "2.00%",
    description: "Saç foliküllerini uyarır ve saç büyümesini destekler.",
    icon: "/images/minoxidil.jpg"
  },
  {
    name: "Azelaik Asit",
    percentage: "1.50%",
    description: "DHT inhibisyonuna katkı sağlar, ancak düşük doz nedeniyle etkisi sınırlı olabilir.",
    icon: "/images/azelaicacid.jpg"
  },
  {
    name: "Niasinamid",
    percentage: "2.00%",
    description: "Saç derisinin sağlığını iyileştirir ve dolaşımı artırır.",
    icon: "/images/niacinamide.jpg"
  },

];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-24 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Ürün Formül Detayları
        </h2>
        {/* Ingredients grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formulaItems.map(item => (
            <div key={item.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {item.icon && (
                <div className="relative h-48 w-full">
                  <Image 
                    src={item.icon} 
                    alt={item.name} 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {item.name}{" "}
                  <span className="text-lg text-gray-500">({item.percentage})</span>
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Advantages section remains unchanged */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-serif mb-6">Bilimsel Kanıtlarla Desteklenen Avantajlar</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Çok hedefli yaklaşım: Saç büyümesini desteklemek için çeşitli mekanizmalar kullanır.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">DHT İnhibisyonu: Azelaik Asit düşük dozda olsa da etkisini gösterir.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Vazodilatasyon & folikül stimülasyonu: Minoxidil ile desteklenir.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Folikül uyarımı & dolaşım: Kafein sayesinde artırılır.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Dolaşım & potansiyel DHT inhibisyonu: Biberiye Yağı ile desteklenir.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Saç derisi sağlığı & antimikrobiyal etki: Çay Ağacı Yağı ile sağlanır.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Nemlendirme & bariyer fonksiyonu: Panthenol katkısıyla desteklenir.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Saç derisi sağlığı & dolaşım: Niasinamid ile güçlendirilir.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Altın standart: Minoxidil, saç dökülmesinde kanıtlanmış etkilidir.</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-600">Destekleyici bileşenler: Panthenol & Niasinamid, saç derisini iyileştirir.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Sonuçları görmek ne kadar sürer?",
    answer: "Çoğu kullanıcı, düzenli kullanım sonucunda 3 ila 6 ay içinde belirgin sonuçlar görür.",
  },
  {
    question: "Herhangi bir yan etki var mı?",
    answer: "Formülümüz doğal içeriklerden üretilmiş olup genellikle iyi tolere edilir. Ancak, yeni bir tedaviye başlamadan önce bir sağlık uzmanına danışmanızı öneririz.",
  },
  {
    question: "Ürünü ne sıklıkta kullanmalıyım?",
    answer: "En iyi sonuçlar için, ürünü günde bir kez kullanım talimatına uygun olarak kullanın.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Sıkça Sorulan Sorular</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F8F7F4] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-serif mb-4">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
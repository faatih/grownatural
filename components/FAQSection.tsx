
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most users see visible results within 3 to 6 months of consistent use.",
  },
  {
    question: "Are there any side effects?",
    answer: "Our formula is made with natural ingredients and is generally well-tolerated. However, we recommend consulting with a healthcare provider before starting any new treatment.",
  },
  {
    question: "How often should I use the product?",
    answer: "For best results, use the product daily as directed.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Frequently Asked Questions</h2>
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
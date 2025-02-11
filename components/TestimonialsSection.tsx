
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Doe",
    feedback: "I've seen a significant improvement in my hair thickness and overall health. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "My hair feels stronger and looks fuller. This product really works!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Sam Wilson",
    feedback: "Amazing results! My hair loss has reduced and I can see new growth.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow border-none bg-[#F8F7F4]">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-serif mb-4">{testimonial.name}</h3>
                <p className="text-gray-600 leading-relaxed">{testimonial.feedback}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Leaf, FlaskRound as Flask, Clock, Star, ShieldCheck, ArrowRight, Menu, X, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ingredients = [
  {
    name: "Minoxidil USP",
    description: "The gold standard for hair regrowth, clinically proven to promote new hair growth and prevent further hair loss.",
    icon: Flask,
    study: "https://pubmed.ncbi.nlm.nih.gov/30974011/",
  },
  {
    name: "Azelaic Acid",
    description: "Reduces inflammation and DHT levels in the scalp, creating an optimal environment for hair growth.",
    icon: ShieldCheck,
    study: "https://pubmed.ncbi.nlm.nih.gov/15863844/",
  },
  {
    name: "Rosemary Oil",
    description: "Natural compound shown to be as effective as 2% minoxidil in promoting hair growth.",
    icon: Leaf,
    study: "https://pubmed.ncbi.nlm.nih.gov/25842469/",
  },
];

const benefits = [
  {
    title: "Scientifically Formulated",
    description: "Each ingredient is backed by clinical research",
    icon: Flask,
  },
  {
    title: "Natural Ingredients",
    description: "Blend of proven natural and clinical ingredients",
    icon: Leaf,
  },
  {
    title: "Visible Results",
    description: "See improvement in as little as 3 months",
    icon: Clock,
  },
];

const navItems = [
  { name: "Benefits", href: "#benefits" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "New York, NY",
    quote: "After 6 months of using GrowNatural, I've noticed significant improvement in my hair density. The natural ingredients give me peace of mind.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Los Angeles, CA",
    quote: "I've tried many products before, but GrowNatural is the first one that actually delivered results. My hairline has visibly improved.",
    rating: 5,
  },
  {
    name: "Emma L.",
    location: "Chicago, IL",
    quote: "The science-backed formula really works. My hair feels thicker and healthier than ever before.",
    rating: 5,
  },
];

const results = [
  {
    duration: "3 Months",
    description: "Visible reduction in hair loss and improved scalp health",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=1000",
  },
  {
    duration: "6 Months",
    description: "Noticeable hair regrowth and increased density",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    duration: "12 Months",
    description: "Significant improvement in overall hair thickness and coverage",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000",
  },
];

const howToUse = [
  {
    step: 1,
    title: "Clean & Dry",
    description: "Start with clean, dry hair and scalp",
    icon: Flask,
  },
  {
    step: 2,
    title: "Apply",
    description: "Use dropper to apply directly to areas of concern",
    icon: Leaf,
  },
  {
    step: 3,
    title: "Massage",
    description: "Gently massage into scalp for 1-2 minutes",
    icon: Clock,
  },
];

export default function Home() {
  const [activeIngredient, setActiveIngredient] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 2px 4px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <motion.header
        className="fixed w-full z-50 transition-colors"
        style={{
          backgroundColor: headerBackground,
          boxShadow: headerShadow,
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-serif">GrowNatural</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-primary transition-colors text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 bg-white"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 text-sm tracking-wide"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#F8F7F4] pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-8 leading-tight">
                Transform Your Hair
                <br />
                <span className="text-primary">Naturally</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                Experience the perfect blend of science and nature with our clinically proven formula for thicker, fuller hair.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="/_next/static/media/GrowNatural.png"
                alt="GrowNatural Hair Solution"
                className="w-full max-w-[400px] mx-auto"
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

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">The GrowNatural Difference</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow border-none bg-[#F8F7F4]">
                  <benefit.icon className="h-12 w-12 mx-auto mb-6 text-primary" />
                  <h3 className="text-xl font-serif mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">How to Use</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative rounded-lg overflow-hidden"
            >
              <img 
                src="https://i.imgur.com/8XkCpfR.jpg" 
                alt="GrowNatural Application Process"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="space-y-8">
              {howToUse.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-2">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none">
                  <div className="relative h-64">
                    <img 
                      src={result.image} 
                      alt={`Results after ${result.duration}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 bg-[#F8F7F4]">
                    <h3 className="text-xl font-serif mb-2">{result.duration}</h3>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Scientifically Proven Ingredients</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card 
                  className={`p-8 h-full cursor-pointer transition-all border-none ${
                    activeIngredient === index ? 'shadow-xl' : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveIngredient(activeIngredient === index ? null : index)}
                >
                  <ingredient.icon className="h-12 w-12 mb-6 text-primary" />
                  <h3 className="text-xl font-serif mb-4">{ingredient.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{ingredient.description}</p>
                  {activeIngredient === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <a 
                        href={ingredient.study}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center font-medium"
                      >
                        View Scientific Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
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
                <Card className="p-8 h-full border-none bg-[#F8F7F4]">
                  <Quote className="h-8 w-8 text-primary mb-6" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Behind Section */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">The Science Behind GrowNatural</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our formula is backed by extensive clinical research and developed by experts in hair science. 
              Each ingredient is carefully selected and combined in optimal concentrations for maximum efficacy.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Learn More About Our Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Common Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-none bg-[#F8F7F4] rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline hover:text-primary">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Most users begin to see initial results within 3-6 months of consistent use. However, individual results may vary based on factors such as genetics and overall health.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none bg-[#F8F7F4] rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline hover:text-primary">
                Is GrowNatural safe to use?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, GrowNatural is formulated with scientifically proven ingredients that have been extensively studied for safety and efficacy. As with any topical product, we recommend performing a patch test before first use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none bg-[#F8F7F4] rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline hover:text-primary">
                How do I apply GrowNatural?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Apply GrowNatural twice daily to clean, dry scalp. Use the dropper to apply directly to areas of concern and gently massage into the scalp. For best results, use consistently as part of your daily routine.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Promise to You</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              We're confident in the effectiveness of GrowNatural. If you're not satisfied with your results 
              within 90 days, we'll refund your purchase. No questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-serif text-xl mb-4">90-Day Guarantee</h3>
                <p className="text-gray-600">Try GrowNatural risk-free for 90 days</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4">Free Shipping</h3>
                <p className="text-gray-600">On all orders over $50</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4">Expert Support</h3>
                <p className="text-gray-600">Get guidance from our hair care experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="how-it-works" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Transform Your Hair?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have discovered the science-backed solution for thicker, fuller hair.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Start Your Journey Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F7F4] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif mb-6">GrowNatural</h3>
              <p className="text-gray-600 leading-relaxed">
                Science-backed hair growth solutions for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6">Contact</h3>
              <p className="text-gray-600">support@grownatural.com</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} GrowNatural. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
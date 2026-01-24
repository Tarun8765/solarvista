import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollAnimation from "./ScrollAnimation";
import { Zap, DollarSign, Clock, Shield, Sun, Battery, Home, CloudRain } from "lucide-react";

const faqs = [
  {
    icon: Zap,
    question: "How much can I save with solar panels?",
    answer: "Most homeowners save between 50-90% on their electricity bills after installing solar panels. The exact savings depend on your current energy usage, roof size, local sunlight conditions, and available incentives. On average, our customers save $1,200-$2,400 per year on electricity costs."
  },
  {
    icon: Clock,
    question: "How long does solar panel installation take?",
    answer: "A typical residential installation takes 1-3 days once all permits are approved. The entire process from initial consultation to system activation usually takes 4-8 weeks, which includes site assessment, system design, permitting, installation, and utility interconnection."
  },
  {
    icon: DollarSign,
    question: "What financing options are available?",
    answer: "We offer multiple financing options including $0-down solar loans, solar leases, and power purchase agreements (PPAs). Many customers qualify for the 30% federal solar tax credit, plus state and local incentives. We'll help you find the best financial solution for your situation."
  },
  {
    icon: Shield,
    question: "What warranties do you provide?",
    answer: "We provide comprehensive warranty coverage: 25-year performance warranty on solar panels, 10-25 year warranty on inverters, and a 10-year workmanship warranty on installation. All warranties are transferable if you sell your home, adding value to your property."
  },
  {
    icon: Sun,
    question: "Do solar panels work on cloudy days?",
    answer: "Yes! Solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of peak output). Modern solar panels are designed to capture both direct and diffused sunlight. With net metering, excess energy produced on sunny days offsets usage during cloudy periods."
  },
  {
    icon: Home,
    question: "Will solar panels damage my roof?",
    answer: "When installed properly by certified professionals, solar panels actually protect your roof from weather elements. We use industry-leading mounting systems and conduct thorough roof inspections before installation. If any issues arise, our 10-year workmanship warranty covers all installation-related concerns."
  },
  {
    icon: Battery,
    question: "Should I add battery storage to my system?",
    answer: "Battery storage is an excellent addition if you want backup power during outages, want to maximize self-consumption of solar energy, or live in an area with time-of-use electricity rates. We'll analyze your energy patterns and help you decide if battery storage makes financial sense for your situation."
  },
  {
    icon: CloudRain,
    question: "How do solar panels perform in extreme weather?",
    answer: "Our solar panels are designed to withstand extreme weather conditions including heavy rain, snow, high winds (up to 140 mph), and hail. They're rigorously tested to meet international durability standards. In fact, panels often perform better in cooler temperatures, and snow typically slides off due to the panel angle."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about solar installation, savings, and maintenance.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border rounded-lg bg-background px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
                        <faq.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-base md:text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-5 pl-14 pr-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

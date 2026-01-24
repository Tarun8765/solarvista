import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  DollarSign,
  Shield,
  CloudRain,
  Send,
} from "lucide-react";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .max(20, "Phone must be less than 20 characters"),
  address: z
    .string()
    .trim()
    .min(1, "Address is required")
    .max(200, "Address must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be less than 1000 characters")
    .optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    // TODO: Integrate with backend email service (Lovable Cloud + Resend)
    // For now, just show success message
    toast({
      title: "Quote Request Received!",
      description:
        "We'll contact you within 24 hours to discuss your solar needs.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 800 987 6543",
      link: "tel:+18009876543",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@solarvista.com",
      link: "mailto:info@solarvista.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Solar Street, Green City, CA 90210",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8am-6pm, Sat: 9am-4pm",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Ready to start saving with solar? Fill out the form below and our
            team will contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main St, City, State ZIP"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Additional Details (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your energy needs, roof type, or any questions you have..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Get My Free Quote
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and
                  consent to be contacted.
                </p>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions? We're here to help! Reach out to us through
                  any of the following channels.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Map Placeholder */}
              {/* <Card className="p-0 overflow-hidden h-64">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Map View</p>
                  </div>
                </div>
              </Card> */}

              <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.65119396031!2d78.53715878913277!3d25.451473626760073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771edefd3743d%3A0xd857da325ad64f46!2sMohan%20lal!5e0!3m2!1sen!2sin!4v1769094056664!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IronForge Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about solar installation,
              warranties, and performance.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  icon: Zap,
                  q: "How long does the installation process take?",
                  a: "Most residential installations are completed in 1-3 days, depending on system size and complexity. Commercial projects typically take 1-2 weeks. We handle all permits, inspections, and utility coordination to ensure a smooth process.",
                },
                {
                  icon: DollarSign,
                  q: "Do you offer financing options?",
                  a: "Yes, we offer flexible financing options with zero upfront costs and competitive rates. We work with multiple financing partners to find the best solution for your budget, including solar loans, leases, and power purchase agreements (PPAs).",
                },
                {
                  icon: Shield,
                  q: "What warranties do you provide?",
                  a: "We offer comprehensive coverage including 25+ year panel performance warranties, 10-year installation workmanship warranty, and full equipment warranties. All warranties are transferable if you sell your home, adding value to your property.",
                },
                {
                  icon: CloudRain,
                  q: "Will solar panels work during cloudy days?",
                  a: "Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of peak output). Modern solar panels are designed to capture diffused sunlight. Your system will produce the most energy on sunny days and store excess in the grid through net metering.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg bg-background px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                        <faq.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4 pl-14">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

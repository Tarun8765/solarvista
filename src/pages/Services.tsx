import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Sun,
  Battery,
  Wrench,
  TrendingDown,
  Shield,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const Services = () => {
  const services = [
    {
      id: "solar-panel-installation",
      icon: Sun,
      title: "Solar Panel Installation",
      description:
        "Professional installation of high-efficiency solar panels for residential and commercial properties.",
      features: [
        "Site assessment and energy audit",
        "Custom system design",
        "Professional installation",
        "Grid connection and permits",
        "Performance testing",
      ],
    },
    {
      id: "energy-storage-systems",
      icon: Battery,
      title: "Energy Storage Systems",
      description:
        "Advanced battery storage solutions to maximize your solar energy independence.",
      features: [
        "Battery system design",
        "Integration with solar panels",
        "Backup power capability",
        "Energy management software",
        "24/7 monitoring",
      ],
    },
    {
      id: "system-maintenance",
      icon: Wrench,
      title: "System Maintenance",
      description:
        "Regular maintenance and monitoring to ensure optimal performance of your solar system.",
      features: [
        "Annual system inspections",
        "Panel cleaning services",
        "Performance monitoring",
        "Inverter maintenance",
        "Warranty support",
      ],
    },
    {
      id: "solar-consulting",
      icon: TrendingDown,
      title: "Energy Consulting",
      description:
        "Expert guidance to help you maximize your energy savings and sustainability goals.",
      features: [
        "Energy usage analysis",
        "ROI calculations",
        "Incentive identification",
        "Financing guidance",
        "Long-term planning",
      ],
    },
    {
      id: "",
      icon: Shield,
      title: "System Warranties",
      description:
        "Comprehensive warranty coverage for peace of mind and long-term protection.",
      features: [
        "25+ year panel warranties",
        "10-year installation warranty",
        "Equipment warranties",
        "Performance guarantees",
        "Extended coverage options",
      ],
    },
    {
      id: "",
      icon: Headphones,
      title: "Customer Support",
      description:
        "Dedicated support team available to help with any questions or concerns.",
      features: [
        "24/7 emergency support",
        "Online monitoring portal",
        "Regular system reports",
        "Troubleshooting assistance",
        "Technical support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Comprehensive solar solutions designed to meet your energy needs and
            exceed your expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="p-8 hover:shadow-lg transition-all h-full group">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.id && (
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/services/${service.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our Installation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to getting your solar system up and
                running.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free in-home assessment and energy audit",
              },
              {
                step: "02",
                title: "Design",
                description: "Custom system design tailored to your needs",
              },
              {
                step: "03",
                title: "Installation",
                description:
                  "Professional installation by certified technicians",
              },
              {
                step: "04",
                title: "Activation",
                description:
                  "System testing, grid connection, and monitoring setup",
              },
            ].map((item, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale">
            <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and learn how we can
                help you save money with solar energy.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;

import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sun,
  Battery,
  Wrench,
  TrendingDown,
  Shield,
  Headphones,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

interface ServiceData {
  id: string;
  icon: typeof Sun;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  image: string;
}

const servicesData: ServiceData[] = [
  {
    id: "solar-panel-installation",
    icon: Sun,
    title: "Solar Panel Installation",
    shortDescription:
      "Professional installation of high-efficiency solar panels for residential and commercial properties.",
    fullDescription:
      "Our expert team provides comprehensive solar panel installation services, transforming your property into a clean energy powerhouse. We use only premium-grade panels from leading manufacturers, ensuring maximum energy production and durability for decades to come.",
    features: [
      "Site assessment and energy audit",
      "Custom system design",
      "Professional installation by certified technicians",
      "Grid connection and permit handling",
      "Performance testing and optimization",
      "Post-installation monitoring setup",
    ],
    benefits: [
      "Reduce electricity bills by up to 80%",
      "Increase property value by 4-6%",
      "25+ year panel warranty",
      "Federal tax credit of 30%",
      "Environmental impact reduction",
      "Energy independence",
    ],
    process: [
      {
        step: "01",
        title: "Free Consultation",
        description: "We assess your property and energy needs",
      },
      {
        step: "02",
        title: "Custom Design",
        description: "Our engineers create an optimal system layout",
      },
      {
        step: "03",
        title: "Permitting",
        description: "We handle all paperwork and approvals",
      },
      {
        step: "04",
        title: "Installation",
        description: "Professional installation in 1-3 days",
      },
      {
        step: "05",
        title: "Activation",
        description: "System testing and grid connection",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    id: "energy-storage-systems",
    icon: Battery,
    title: "Energy Storage Systems",
    shortDescription:
      "Advanced battery storage solutions to maximize your solar energy independence.",
    fullDescription:
      "Take control of your energy with our cutting-edge battery storage systems. Store excess solar energy during the day and use it when you need it most – during peak hours, at night, or during power outages. Our storage solutions integrate seamlessly with new or existing solar installations.",
    features: [
      "Battery system design and sizing",
      "Integration with solar panels",
      "Backup power capability",
      "Smart energy management software",
      "24/7 monitoring and alerts",
      "Scalable storage capacity",
    ],
    benefits: [
      "Power your home during outages",
      "Maximize solar self-consumption",
      "Reduce peak demand charges",
      "Time-of-use optimization",
      "Grid independence option",
      "Environmental sustainability",
    ],
    process: [
      {
        step: "01",
        title: "Energy Analysis",
        description: "We analyze your usage patterns",
      },
      {
        step: "02",
        title: "System Sizing",
        description: "Determine optimal battery capacity",
      },
      {
        step: "03",
        title: "Integration Plan",
        description: "Design seamless solar integration",
      },
      {
        step: "04",
        title: "Installation",
        description: "Professional battery installation",
      },
      {
        step: "05",
        title: "Optimization",
        description: "Configure smart energy management",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
  },
  {
    id: "system-maintenance",
    icon: Wrench,
    title: "System Maintenance",
    shortDescription:
      "Regular maintenance and monitoring to ensure optimal performance of your solar system.",
    fullDescription:
      "Protect your solar investment with our comprehensive maintenance services. Our team of certified technicians ensures your system operates at peak efficiency year after year. From routine inspections to performance optimization, we keep your solar panels producing maximum power.",
    features: [
      "Annual system inspections",
      "Professional panel cleaning",
      "Performance monitoring",
      "Inverter maintenance",
      "Wiring and connection checks",
      "Warranty support coordination",
    ],
    benefits: [
      "Maximize energy production",
      "Extend system lifespan",
      "Early problem detection",
      "Maintain warranty coverage",
      "Peace of mind",
      "Optimized ROI",
    ],
    process: [
      {
        step: "01",
        title: "Schedule",
        description: "Book your maintenance visit",
      },
      {
        step: "02",
        title: "Inspection",
        description: "Comprehensive system checkup",
      },
      {
        step: "03",
        title: "Cleaning",
        description: "Professional panel cleaning",
      },
      { step: "04", title: "Testing", description: "Performance verification" },
      {
        step: "05",
        title: "Report",
        description: "Detailed maintenance report",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  },
  {
    id: "solar-consulting",
    icon: TrendingDown,
    title: "Solar Consulting",
    shortDescription:
      "Expert guidance to help you maximize your energy savings and sustainability goals.",
    fullDescription:
      "Navigate the solar landscape with confidence. Our experienced consultants provide personalized guidance on system sizing, financing options, incentives, and long-term energy planning. Whether you're a homeowner or business owner, we help you make informed decisions that maximize your investment.",
    features: [
      "Comprehensive energy usage analysis",
      "ROI and payback calculations",
      "Incentive and rebate identification",
      "Financing guidance and options",
      "Long-term energy planning",
      "Vendor-neutral recommendations",
    ],
    benefits: [
      "Make informed decisions",
      "Maximize available incentives",
      "Optimal system sizing",
      "Best financing options",
      "Clear ROI projections",
      "Expert guidance",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Understand your goals and needs",
      },
      {
        step: "02",
        title: "Analysis",
        description: "Review energy data and options",
      },
      {
        step: "03",
        title: "Recommendations",
        description: "Present optimal solutions",
      },
      {
        step: "04",
        title: "Planning",
        description: "Develop implementation roadmap",
      },
      {
        step: "05",
        title: "Support",
        description: "Ongoing advisory services",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = servicesData.findIndex((s) => s.id === slug);
  const service = servicesData[currentIndex];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1
      ? servicesData[currentIndex + 1]
      : null;

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-hero-from to-hero-to text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-xl">
                <Icon className="h-10 w-10" />
              </div>
              <span className="text-white/80">Our Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl max-w-3xl text-white/90">
              {service.fullDescription}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollAnimation animation="fade-right">
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left">
              <Card className="p-8 h-full bg-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Sun className="h-6 w-6 text-primary" />
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.shortDescription}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pagination Navigation */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(`/services/${prevService.id}`)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{prevService.title}</span>
                <span className="sm:hidden">Previous</span>
              </Button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              {servicesData.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => navigate(`/services/${s.id}`)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to ${s.title}`}
                />
              ))}
            </div>

            {nextService ? (
              <Button
                size="lg"
                onClick={() => navigate(`/services/${nextService.id}`)}
                className="flex items-center gap-2"
              >
                <span className="hidden sm:inline">{nextService.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and learn how{" "}
                {service.title.toLowerCase()} can benefit you.
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

export default ServiceDetail;

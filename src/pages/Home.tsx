import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Sun,
  Battery,
  Wrench,
  ArrowRight,
  CheckCircle,
  Play,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import installationImage from "@/assets/installation.jpg";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import ScrollAnimation from "@/components/ScrollAnimation";
import FAQSection from "../components/FAQSection";
const Home = () => {
  const stats = [
    { value: "2500+", label: "Happy Customers" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const features = [
    {
      icon: Sun,
      title: "Premium Quality Panels",
      description: "Industry-leading solar panels with 25+ year warranties",
    },
    {
      icon: Zap,
      title: "Save Up to 80%",
      description: "Drastically reduce your electricity bills from day one",
    },
    {
      icon: CheckCircle,
      title: "Zero Upfront Cost",
      description: "Flexible financing options available for all budgets",
    },
  ];

  const services = [
    {
      icon: Sun,
      title: "Solar Panel Installation",
      description:
        "Professional installation of high-efficiency solar panels for residential and commercial properties.",
    },
    {
      icon: Battery,
      title: "Energy Storage Systems",
      description:
        "Advanced battery storage solutions to maximize your solar energy independence.",
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description:
        "Regular maintenance and monitoring to ensure optimal performance of your solar system.",
    },
  ];

  const whyChooseUs = [
    "Industry-leading 25+ year warranties",
    "Certified and experienced professionals",
    "Premium quality equipment",
    "Flexible financing options",
    "Comprehensive post-installation support",
    "98% customer satisfaction rate",
  ];

  const projects = [
    {
      title: "Residential Solar Installation",
      location: "San Diego, CA",
      capacity: "8.5 kW",
      image: residentialImage,
    },
    {
      title: "Commercial Solar Array",
      location: "Los Angeles, CA",
      capacity: "250 kW",
      image: commercialImage,
    },
  ];

  const testimonials = [
    {
      quote:
        "Switching to solar was the best decision for our family. The installation was seamless and our energy bills have dropped by 80%!",
      author: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      quote:
        "The team was professional and efficient. Our commercial solar system has significantly reduced operating costs while helping the environment.",
      author: "Michael Chen",
      role: "Business Owner",
    },
    {
      quote:
        "Outstanding service from consultation to installation. The solar panels look great and the energy savings are remarkable.",
      author: "Emily Rodriguez",
      role: "Property Manager",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-hero-from to-hero-to overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Power Your Future with Clean Energy
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Home with{" "}
                <span className="text-primary">Solar Energy</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of homeowners who are saving money and protecting
                the planet. Our expert team makes switching to solar simple,
                affordable, and worry-free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-primary hover:bg-success/90 text-white"
                >
                  <Link to="/contact">
                    Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                >
                  <a href="#video">
                    <Play className="mr-2 h-4 w-4" /> Watch Video
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl lg:text-4xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/80">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2500+", label: "Installations Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "50MW+", label: "Total Capacity Installed" },
            ].map((stat, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold mb-2">Our Services</p>
              <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 150}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation animation="fade-up" delay={500}>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-right">
              <img
                src={installationImage}
                alt="Solar Installation"
                className="rounded-lg shadow-lg w-full"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Choose <span className="text-primary">SolarVista</span>?
                </h2>
                <div className="space-y-4 mb-8">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg">
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold mb-2">Our Work</p>
              <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.map((project, index) => (
              <ScrollAnimation
                key={index}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 100}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.location} • {project.capacity}
                    </p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Customer Reviews Carousel */}
      <TestimonialsCarousel />
      <FAQSection />
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale">
            <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a free consultation and quote today. Our experts will help
                you design the perfect solar solution.
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

export default Home;

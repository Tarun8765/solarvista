import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import installationImage from "@/assets/installation.jpg";

const Projects = () => {
  const projects = [
    {
      id: "residential-solar-installation",
      title: "Residential Solar Installation",
      location: "San Diego, CA",
      capacity: "8.5 kW",
      type: "Residential",
      description: "Complete solar panel system for a single-family home, reducing energy bills by 85% annually.",
      image: residentialImage,
      features: ["25 Solar Panels", "Tesla Powerwall", "Net Metering"],
    },
    {
      id: "commercial-solar-array",
      title: "Commercial Solar Array",
      location: "Los Angeles, CA",
      capacity: "250 kW",
      type: "Commercial",
      description: "Large-scale solar installation for a commercial warehouse, providing clean energy and significant cost savings.",
      image: commercialImage,
      features: ["500+ Solar Panels", "Battery Storage", "Remote Monitoring"],
    },
    {
      id: "residential-rooftop-system",
      title: "Residential Rooftop System",
      location: "San Francisco, CA",
      capacity: "12 kW",
      type: "Residential",
      description: "Premium solar installation with advanced monitoring and energy storage for maximum efficiency.",
      image: installationImage,
      features: ["30 Premium Panels", "Smart Inverter", "Energy Management"],
    },
    {
      id: "industrial-solar-farm",
      title: "Industrial Solar Farm",
      location: "Sacramento, CA",
      capacity: "500 kW",
      type: "Industrial",
      description: "Massive solar array powering manufacturing facilities with clean, renewable energy.",
      image: commercialImage,
      features: ["1000+ Panels", "Ground Mount", "Grid Integration"],
    },
    {
      id: "multi-family-housing",
      title: "Multi-Family Housing",
      location: "Oakland, CA",
      capacity: "75 kW",
      type: "Residential",
      description: "Solar solution for apartment complex providing shared energy benefits to all residents.",
      image: residentialImage,
      features: ["150 Solar Panels", "Shared Metering", "Community Solar"],
    },
    {
      id: "office-building-solar",
      title: "Office Building Solar",
      location: "San Jose, CA",
      capacity: "180 kW",
      type: "Commercial",
      description: "Corporate office building achieving carbon neutrality through comprehensive solar installation.",
      image: installationImage,
      features: ["360 Panels", "EV Charging", "LEED Certified"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Explore our portfolio of successful solar installations across California.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50MW+</div>
              <div className="text-muted-foreground">Total Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} to={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all group h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.location} • {project.capacity}
                    </p>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium">
                      View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Be Our Next Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, affordable solar energy.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;

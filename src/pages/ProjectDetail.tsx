import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  MapPin, 
  Zap, 
  Calendar, 
  CheckCircle2, 
  Sun, 
  Battery, 
  Gauge, 
  Clock,
  Users,
  Award,
  Play,
  ArrowRight
} from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import installationImage from "@/assets/installation.jpg";

interface ProjectData {
  id: string;
  title: string;
  location: string;
  capacity: string;
  type: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  completionDate: string;
  duration: string;
  client: string;
  savings: string;
  panelCount: number;
  inverterType: string;
  warrantyYears: number;
  co2Offset: string;
  timeline: {
    phase: string;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
  }[];
  videoUrl?: string;
  specs: {
    label: string;
    value: string;
    icon: React.ElementType;
  }[];
}

const projectsData: Record<string, ProjectData> = {
  "residential-solar-installation": {
    id: "residential-solar-installation",
    title: "Residential Solar Installation",
    location: "San Diego, CA",
    capacity: "8.5 kW",
    type: "Residential",
    description: "Complete solar panel system for a single-family home, reducing energy bills by 85% annually.",
    longDescription: "This comprehensive residential solar installation transformed the Johnson family's energy consumption entirely. Located in sunny San Diego, this project maximizes solar potential with south-facing panels optimized for peak production. The system includes premium monocrystalline panels paired with a Tesla Powerwall for energy storage, ensuring power availability even during grid outages.",
    image: residentialImage,
    gallery: [residentialImage, installationImage, commercialImage],
    features: ["25 Solar Panels", "Tesla Powerwall", "Net Metering", "Smart Monitoring"],
    completionDate: "March 2024",
    duration: "3 days",
    client: "Johnson Family",
    savings: "$2,400/year",
    panelCount: 25,
    inverterType: "SolarEdge SE7600H",
    warrantyYears: 25,
    co2Offset: "6.2 tons/year",
    timeline: [
      { phase: "1", title: "Site Assessment", description: "Roof inspection, shading analysis, and energy audit", duration: "Day 1", completed: true },
      { phase: "2", title: "Design & Permits", description: "Custom system design and permit applications", duration: "Week 1-2", completed: true },
      { phase: "3", title: "Installation", description: "Panel mounting, wiring, and inverter setup", duration: "Day 1-2", completed: true },
      { phase: "4", title: "Inspection & Activation", description: "City inspection and utility connection", duration: "Day 3", completed: true },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    specs: [
      { label: "System Size", value: "8.5 kW", icon: Zap },
      { label: "Panel Count", value: "25 panels", icon: Sun },
      { label: "Battery Storage", value: "13.5 kWh", icon: Battery },
      { label: "Efficiency", value: "21.5%", icon: Gauge },
    ],
  },
  "commercial-solar-array": {
    id: "commercial-solar-array",
    title: "Commercial Solar Array",
    location: "Los Angeles, CA",
    capacity: "250 kW",
    type: "Commercial",
    description: "Large-scale solar installation for a commercial warehouse, providing clean energy and significant cost savings.",
    longDescription: "This enterprise-scale commercial solar project demonstrates the viability of renewable energy for large industrial operations. The 250kW system covers the entire warehouse rooftop, generating enough clean energy to power operations and feed excess back to the grid. Advanced monitoring systems provide real-time performance data accessible from anywhere.",
    image: commercialImage,
    gallery: [commercialImage, installationImage, residentialImage],
    features: ["500+ Solar Panels", "Battery Storage", "Remote Monitoring", "EV Charging Stations"],
    completionDate: "January 2024",
    duration: "2 weeks",
    client: "Pacific Logistics Inc.",
    savings: "$45,000/year",
    panelCount: 520,
    inverterType: "SMA Sunny Tripower CORE2",
    warrantyYears: 25,
    co2Offset: "182 tons/year",
    timeline: [
      { phase: "1", title: "Feasibility Study", description: "Structural analysis and energy modeling", duration: "Week 1", completed: true },
      { phase: "2", title: "Engineering & Design", description: "Detailed system engineering and procurement", duration: "Week 2-3", completed: true },
      { phase: "3", title: "Roof Preparation", description: "Structural reinforcement and mounting system", duration: "Week 4", completed: true },
      { phase: "4", title: "Panel Installation", description: "Solar panel installation and wiring", duration: "Week 5-6", completed: true },
      { phase: "5", title: "Electrical Work", description: "Inverter installation and grid connection", duration: "Week 7", completed: true },
      { phase: "6", title: "Testing & Commissioning", description: "System testing and final activation", duration: "Week 8", completed: true },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    specs: [
      { label: "System Size", value: "250 kW", icon: Zap },
      { label: "Panel Count", value: "520 panels", icon: Sun },
      { label: "Battery Storage", value: "100 kWh", icon: Battery },
      { label: "Efficiency", value: "22.1%", icon: Gauge },
    ],
  },
  "residential-rooftop-system": {
    id: "residential-rooftop-system",
    title: "Residential Rooftop System",
    location: "San Francisco, CA",
    capacity: "12 kW",
    type: "Residential",
    description: "Premium solar installation with advanced monitoring and energy storage for maximum efficiency.",
    longDescription: "This premium residential installation showcases the latest in solar technology. The Chen family's San Francisco home now features a cutting-edge 12kW system with bifacial panels that capture light from both sides, increasing overall energy production. Integrated with a whole-home battery system, this installation provides complete energy independence.",
    image: installationImage,
    gallery: [installationImage, residentialImage, commercialImage],
    features: ["30 Premium Panels", "Smart Inverter", "Energy Management", "Bifacial Technology"],
    completionDate: "February 2024",
    duration: "4 days",
    client: "Chen Family",
    savings: "$3,600/year",
    panelCount: 30,
    inverterType: "Enphase IQ8+",
    warrantyYears: 25,
    co2Offset: "8.8 tons/year",
    timeline: [
      { phase: "1", title: "Consultation", description: "Energy needs assessment and system sizing", duration: "Day 1", completed: true },
      { phase: "2", title: "Permitting", description: "City permits and HOA approval", duration: "Week 1-2", completed: true },
      { phase: "3", title: "Installation", description: "Premium panel installation with microinverters", duration: "Day 1-3", completed: true },
      { phase: "4", title: "Smart Home Integration", description: "Energy management system setup", duration: "Day 4", completed: true },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    specs: [
      { label: "System Size", value: "12 kW", icon: Zap },
      { label: "Panel Count", value: "30 panels", icon: Sun },
      { label: "Battery Storage", value: "20 kWh", icon: Battery },
      { label: "Efficiency", value: "23.5%", icon: Gauge },
    ],
  },
  "industrial-solar-farm": {
    id: "industrial-solar-farm",
    title: "Industrial Solar Farm",
    location: "Sacramento, CA",
    capacity: "500 kW",
    type: "Industrial",
    description: "Massive solar array powering manufacturing facilities with clean, renewable energy.",
    longDescription: "This ground-mounted industrial solar farm represents our largest installation to date. Spanning several acres, the 500kW system provides clean energy for multiple manufacturing facilities in the Sacramento industrial district. The ground-mount design allows for optimal panel angle adjustment and easy maintenance access.",
    image: commercialImage,
    gallery: [commercialImage, installationImage, residentialImage],
    features: ["1000+ Panels", "Ground Mount", "Grid Integration", "Tracking System"],
    completionDate: "December 2023",
    duration: "6 weeks",
    client: "Sacramento Industrial Park",
    savings: "$95,000/year",
    panelCount: 1040,
    inverterType: "ABB PVS-175",
    warrantyYears: 30,
    co2Offset: "365 tons/year",
    timeline: [
      { phase: "1", title: "Land Survey", description: "Topographical survey and soil analysis", duration: "Week 1", completed: true },
      { phase: "2", title: "Foundation Work", description: "Ground preparation and mounting structure", duration: "Week 2-3", completed: true },
      { phase: "3", title: "Panel Installation", description: "Large-scale panel deployment", duration: "Week 4-5", completed: true },
      { phase: "4", title: "Grid Connection", description: "High-voltage connection and testing", duration: "Week 6", completed: true },
    ],
    specs: [
      { label: "System Size", value: "500 kW", icon: Zap },
      { label: "Panel Count", value: "1040 panels", icon: Sun },
      { label: "Land Area", value: "3.5 acres", icon: MapPin },
      { label: "Efficiency", value: "22.8%", icon: Gauge },
    ],
  },
  "multi-family-housing": {
    id: "multi-family-housing",
    title: "Multi-Family Housing",
    location: "Oakland, CA",
    capacity: "75 kW",
    type: "Residential",
    description: "Solar solution for apartment complex providing shared energy benefits to all residents.",
    longDescription: "This innovative community solar project brings renewable energy to apartment living. The 75kW shared system serves 48 units, with energy credits distributed among all residents based on their consumption. This model makes solar accessible to renters who previously couldn't benefit from solar energy.",
    image: residentialImage,
    gallery: [residentialImage, commercialImage, installationImage],
    features: ["150 Solar Panels", "Shared Metering", "Community Solar", "Resident Portal"],
    completionDate: "November 2023",
    duration: "10 days",
    client: "Oakland Heights Apartments",
    savings: "$18,000/year (shared)",
    panelCount: 150,
    inverterType: "Fronius Symo",
    warrantyYears: 25,
    co2Offset: "54.8 tons/year",
    timeline: [
      { phase: "1", title: "Stakeholder Meeting", description: "HOA approval and resident information session", duration: "Week 1", completed: true },
      { phase: "2", title: "System Design", description: "Shared metering system architecture", duration: "Week 2", completed: true },
      { phase: "3", title: "Installation", description: "Multi-building panel installation", duration: "Week 3-4", completed: true },
      { phase: "4", title: "Resident Onboarding", description: "Portal setup and energy credit allocation", duration: "Week 5", completed: true },
    ],
    specs: [
      { label: "System Size", value: "75 kW", icon: Zap },
      { label: "Panel Count", value: "150 panels", icon: Sun },
      { label: "Units Served", value: "48 apartments", icon: Users },
      { label: "Efficiency", value: "21.2%", icon: Gauge },
    ],
  },
  "office-building-solar": {
    id: "office-building-solar",
    title: "Office Building Solar",
    location: "San Jose, CA",
    capacity: "180 kW",
    type: "Commercial",
    description: "Corporate office building achieving carbon neutrality through comprehensive solar installation.",
    longDescription: "This flagship commercial installation helped TechForward Inc. achieve their carbon neutrality goals. The 180kW rooftop system, combined with EV charging stations, demonstrates how modern office buildings can embrace sustainability. The sleek, integrated design maintains the building's aesthetic while maximizing energy production.",
    image: installationImage,
    gallery: [installationImage, commercialImage, residentialImage],
    features: ["360 Panels", "EV Charging", "LEED Certified", "Green Building"],
    completionDate: "October 2023",
    duration: "12 days",
    client: "TechForward Inc.",
    savings: "$32,000/year",
    panelCount: 360,
    inverterType: "SolarEdge SE100K",
    warrantyYears: 25,
    co2Offset: "131 tons/year",
    timeline: [
      { phase: "1", title: "LEED Assessment", description: "Green building certification planning", duration: "Week 1", completed: true },
      { phase: "2", title: "Design Integration", description: "Architectural integration and EV planning", duration: "Week 2", completed: true },
      { phase: "3", title: "Solar Installation", description: "Rooftop panel installation", duration: "Week 3-4", completed: true },
      { phase: "4", title: "EV Infrastructure", description: "Charging station installation", duration: "Week 5", completed: true },
    ],
    specs: [
      { label: "System Size", value: "180 kW", icon: Zap },
      { label: "Panel Count", value: "360 panels", icon: Sun },
      { label: "EV Chargers", value: "12 stations", icon: Battery },
      { label: "Efficiency", value: "22.4%", icon: Gauge },
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Button asChild variant="ghost" className="mb-4 text-white hover:bg-white/10">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Badge className="mb-4">{project.type}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                {project.capacity}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {project.completionDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Specifications Grid */}
              <div>
                <h2 className="text-3xl font-bold mb-6">System Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.specs.map((spec, index) => (
                    <Card key={index} className="p-4 text-center">
                      <spec.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">{spec.value}</p>
                      <p className="text-sm text-muted-foreground">{spec.label}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Video */}
              {project.videoUrl && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Project Video</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center relative group cursor-pointer">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="bg-primary rounded-full p-6 group-hover:scale-110 transition-transform">
                          <Play className="h-12 w-12 text-primary-foreground fill-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Timeline */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Installation Timeline</h2>
                <div className="space-y-4">
                  {project.timeline.map((step, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.completed ? (
                            <CheckCircle2 className="h-6 w-6" />
                          ) : (
                            <span className="font-bold">{step.phase}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      {index < project.timeline.length - 1 && (
                        <div className="ml-6 mt-4 h-8 w-0.5 bg-border" />
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Stats Card */}
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Client
                    </span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Duration
                    </span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      Panels
                    </span>
                    <span className="font-medium">{project.panelCount}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Inverter
                    </span>
                    <span className="font-medium text-sm">{project.inverterType}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Warranty
                    </span>
                    <span className="font-medium">{project.warrantyYears} years</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
                  <p className="text-3xl font-bold text-primary">{project.savings}</p>
                </div>

                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">CO₂ Offset</p>
                  <p className="text-xl font-bold text-green-600">{project.co2Offset}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Features</h4>
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full mt-6">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Inspired by This Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us create a custom solar solution for your property. Get a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

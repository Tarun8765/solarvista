import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Home, Heart, ArrowLeft, ArrowRight, TrendingUp, Zap, Calendar, CheckCircle, Sun, Battery, Gauge } from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import installationImage from "@/assets/installation.jpg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const caseStudiesData: Record<string, {
  title: string;
  customerType: string;
  icon: typeof Home;
  location: string;
  systemSize: string;
  images: string[];
  summary: string;
  annualSavings: string;
  roiTimeline: string;
  co2Offset: string;
  challenge: string;
  solution: string;
  results: string[];
  installationTimeline: { phase: string; duration: string; description: string }[];
  energyData: { month: string; production: number; consumption: number }[];
  roiData: { year: string; cumulative: number; investment: number }[];
  specs: { panels: number; inverter: string; battery: string; warranty: string };
}> = {
  "johnson-residence": {
    title: "Johnson Family Residence",
    customerType: "Residential",
    icon: Home,
    location: "Los Angeles, CA",
    systemSize: "8.5 kW",
    images: [residentialImage, installationImage, commercialImage],
    summary: "A family of four reduced their energy bills by 75% with a rooftop solar installation.",
    annualSavings: "$2,400",
    roiTimeline: "6 years",
    co2Offset: "8.2 tons/year",
    challenge: "The Johnson family was spending over $300/month on electricity for their 2,500 sq ft home. With two teenagers and multiple devices, their energy consumption was steadily increasing each year.",
    solution: "We designed a 8.5 kW rooftop system with 25 high-efficiency panels optimized for their south-facing roof. A Tesla Powerwall provides backup power during outages and stores excess energy for evening use.",
    results: [
      "75% reduction in monthly electricity bills",
      "Excess energy sold back to grid via net metering",
      "Complete energy independence during peak hours",
      "Home value increased by approximately $17,000",
      "Qualified for federal and state tax incentives"
    ],
    installationTimeline: [
      { phase: "Site Assessment", duration: "1 day", description: "Roof inspection, shading analysis, and system design" },
      { phase: "Permitting", duration: "2 weeks", description: "City permits and utility interconnection approval" },
      { phase: "Installation", duration: "2 days", description: "Panel mounting, wiring, and inverter setup" },
      { phase: "Inspection", duration: "1 day", description: "City inspection and utility meter installation" },
      { phase: "Activation", duration: "1 day", description: "System activation and monitoring setup" }
    ],
    energyData: [
      { month: "Jan", production: 580, consumption: 720 },
      { month: "Feb", production: 650, consumption: 680 },
      { month: "Mar", production: 820, consumption: 640 },
      { month: "Apr", production: 950, consumption: 580 },
      { month: "May", production: 1100, consumption: 620 },
      { month: "Jun", production: 1250, consumption: 750 },
      { month: "Jul", production: 1300, consumption: 900 },
      { month: "Aug", production: 1200, consumption: 880 },
      { month: "Sep", production: 1000, consumption: 720 },
      { month: "Oct", production: 780, consumption: 650 },
      { month: "Nov", production: 600, consumption: 680 },
      { month: "Dec", production: 520, consumption: 750 },
    ],
    roiData: [
      { year: "Year 0", cumulative: -18000, investment: 18000 },
      { year: "Year 1", cumulative: -15600, investment: 18000 },
      { year: "Year 2", cumulative: -13200, investment: 18000 },
      { year: "Year 3", cumulative: -10800, investment: 18000 },
      { year: "Year 4", cumulative: -8400, investment: 18000 },
      { year: "Year 5", cumulative: -6000, investment: 18000 },
      { year: "Year 6", cumulative: -3600, investment: 18000 },
      { year: "Year 7", cumulative: 0, investment: 18000 },
      { year: "Year 8", cumulative: 2400, investment: 18000 },
      { year: "Year 9", cumulative: 4800, investment: 18000 },
      { year: "Year 10", cumulative: 7200, investment: 18000 },
    ],
    specs: {
      panels: 25,
      inverter: "SolarEdge SE7600H",
      battery: "Tesla Powerwall 2 (13.5 kWh)",
      warranty: "25 years on panels, 12 years on inverter"
    }
  },
  "rodriguez-restaurant": {
    title: "Rodriguez Family Restaurant",
    customerType: "Commercial",
    icon: Building2,
    location: "Austin, TX",
    systemSize: "45 kW",
    images: [commercialImage, installationImage, residentialImage],
    summary: "An iconic local restaurant cut energy costs in half while attracting eco-conscious diners.",
    annualSavings: "$8,500",
    roiTimeline: "4 years",
    co2Offset: "42 tons/year",
    challenge: "Running a busy restaurant with commercial kitchen equipment, refrigeration, and HVAC resulted in electricity bills exceeding $1,500/month. The owners wanted to reduce costs and appeal to environmentally conscious customers.",
    solution: "A 45 kW commercial rooftop system with 120 panels covers the flat roof of the restaurant. Smart energy management integrates with kitchen schedules to maximize solar usage during peak cooking hours.",
    results: [
      "50% reduction in energy costs",
      "Marketing advantage with eco-friendly branding",
      "Qualified for commercial solar tax credits",
      "Featured in local news for sustainability efforts",
      "Inspired neighboring businesses to go solar"
    ],
    installationTimeline: [
      { phase: "Energy Audit", duration: "2 days", description: "Commercial energy analysis and load profiling" },
      { phase: "Design & Engineering", duration: "2 weeks", description: "Structural analysis and system optimization" },
      { phase: "Permitting", duration: "3 weeks", description: "Commercial permits and utility coordination" },
      { phase: "Installation", duration: "1 week", description: "Rooftop installation with minimal business disruption" },
      { phase: "Commissioning", duration: "2 days", description: "System testing and monitoring activation" }
    ],
    energyData: [
      { month: "Jan", production: 3200, consumption: 4500 },
      { month: "Feb", production: 3600, consumption: 4200 },
      { month: "Mar", production: 4500, consumption: 4800 },
      { month: "Apr", production: 5200, consumption: 5000 },
      { month: "May", production: 5800, consumption: 5500 },
      { month: "Jun", production: 6200, consumption: 6000 },
      { month: "Jul", production: 6500, consumption: 6500 },
      { month: "Aug", production: 6300, consumption: 6200 },
      { month: "Sep", production: 5500, consumption: 5800 },
      { month: "Oct", production: 4600, consumption: 5200 },
      { month: "Nov", production: 3400, consumption: 4600 },
      { month: "Dec", production: 3000, consumption: 4800 },
    ],
    roiData: [
      { year: "Year 0", cumulative: -65000, investment: 65000 },
      { year: "Year 1", cumulative: -56500, investment: 65000 },
      { year: "Year 2", cumulative: -48000, investment: 65000 },
      { year: "Year 3", cumulative: -39500, investment: 65000 },
      { year: "Year 4", cumulative: -31000, investment: 65000 },
      { year: "Year 5", cumulative: 0, investment: 65000 },
      { year: "Year 6", cumulative: 8500, investment: 65000 },
      { year: "Year 7", cumulative: 17000, investment: 65000 },
      { year: "Year 8", cumulative: 25500, investment: 65000 },
      { year: "Year 9", cumulative: 34000, investment: 65000 },
      { year: "Year 10", cumulative: 42500, investment: 65000 },
    ],
    specs: {
      panels: 120,
      inverter: "SMA Sunny Tripower 50",
      battery: "None (Grid-tied)",
      warranty: "25 years on panels, 10 years on inverter"
    }
  },
  "community-center": {
    title: "Hope Community Center",
    customerType: "Non-Profit",
    icon: Heart,
    location: "Portland, OR",
    systemSize: "32 kW",
    images: [installationImage, residentialImage, commercialImage],
    summary: "A community center serving 500+ families redirects energy savings to expand programs.",
    annualSavings: "$6,200",
    roiTimeline: "5 years",
    co2Offset: "28 tons/year",
    challenge: "The community center operated on a tight budget, with energy costs consuming funds that could support programs for low-income families. They needed a solution that minimized upfront costs.",
    solution: "We helped secure grant funding and special non-profit financing for a 32 kW system. The installation was completed during summer break to avoid disrupting programs.",
    results: [
      "Zero upfront cost through grant funding",
      "Energy savings redirected to community programs",
      "Educational opportunity for youth groups",
      "Recognition as community sustainability leader",
      "Inspired similar projects at partner organizations"
    ],
    installationTimeline: [
      { phase: "Grant Application", duration: "6 weeks", description: "Non-profit solar grant and incentive applications" },
      { phase: "Planning", duration: "3 weeks", description: "System design around community schedules" },
      { phase: "Permitting", duration: "2 weeks", description: "Expedited permits for non-profit project" },
      { phase: "Installation", duration: "4 days", description: "Summer installation during program break" },
      { phase: "Community Launch", duration: "1 day", description: "Dedication ceremony and education session" }
    ],
    energyData: [
      { month: "Jan", production: 1800, consumption: 2800 },
      { month: "Feb", production: 2100, consumption: 2600 },
      { month: "Mar", production: 2800, consumption: 2400 },
      { month: "Apr", production: 3200, consumption: 2200 },
      { month: "May", production: 3800, consumption: 2000 },
      { month: "Jun", production: 4200, consumption: 1800 },
      { month: "Jul", production: 4400, consumption: 1600 },
      { month: "Aug", production: 4100, consumption: 1800 },
      { month: "Sep", production: 3400, consumption: 2200 },
      { month: "Oct", production: 2600, consumption: 2600 },
      { month: "Nov", production: 1900, consumption: 2800 },
      { month: "Dec", production: 1600, consumption: 3000 },
    ],
    roiData: [
      { year: "Year 0", cumulative: 0, investment: 0 },
      { year: "Year 1", cumulative: 6200, investment: 0 },
      { year: "Year 2", cumulative: 12400, investment: 0 },
      { year: "Year 3", cumulative: 18600, investment: 0 },
      { year: "Year 4", cumulative: 24800, investment: 0 },
      { year: "Year 5", cumulative: 31000, investment: 0 },
      { year: "Year 6", cumulative: 37200, investment: 0 },
      { year: "Year 7", cumulative: 43400, investment: 0 },
      { year: "Year 8", cumulative: 49600, investment: 0 },
      { year: "Year 9", cumulative: 55800, investment: 0 },
      { year: "Year 10", cumulative: 62000, investment: 0 },
    ],
    specs: {
      panels: 85,
      inverter: "Enphase IQ8+ Microinverters",
      battery: "None (Grant budget limitation)",
      warranty: "25 years on panels, 25 years on microinverters"
    }
  },
  "kim-warehouse": {
    title: "Kim Logistics Warehouse",
    customerType: "Commercial",
    icon: Building2,
    location: "Seattle, WA",
    systemSize: "150 kW",
    images: [commercialImage, installationImage, residentialImage],
    summary: "A 24/7 distribution center achieved massive savings with a large-scale solar array.",
    annualSavings: "$15,200",
    roiTimeline: "5 years",
    co2Offset: "120 tons/year",
    challenge: "Operating 24/7, the warehouse had astronomical energy costs for lighting, conveyor systems, and climate control. Peak demand charges alone added thousands to monthly bills.",
    solution: "A 150 kW ground-mounted and rooftop hybrid system maximizes available space. Battery storage helps shave peak demand charges and provides backup power for critical operations.",
    results: [
      "60% reduction in energy costs",
      "Peak demand charges nearly eliminated",
      "Backup power ensures uninterrupted operations",
      "Met corporate sustainability mandates",
      "Case study featured in industry publications"
    ],
    installationTimeline: [
      { phase: "Feasibility Study", duration: "2 weeks", description: "Load analysis and demand charge optimization" },
      { phase: "Engineering", duration: "4 weeks", description: "Hybrid ground/roof system engineering" },
      { phase: "Permitting", duration: "4 weeks", description: "Industrial permits and utility negotiations" },
      { phase: "Installation", duration: "3 weeks", description: "Phased installation to maintain operations" },
      { phase: "Integration", duration: "1 week", description: "Energy management system integration" }
    ],
    energyData: [
      { month: "Jan", production: 8500, consumption: 15000 },
      { month: "Feb", production: 9500, consumption: 14500 },
      { month: "Mar", production: 12000, consumption: 14000 },
      { month: "Apr", production: 14000, consumption: 13500 },
      { month: "May", production: 16000, consumption: 13000 },
      { month: "Jun", production: 18000, consumption: 14000 },
      { month: "Jul", production: 18500, consumption: 15000 },
      { month: "Aug", production: 17000, consumption: 14500 },
      { month: "Sep", production: 14500, consumption: 13500 },
      { month: "Oct", production: 11000, consumption: 14000 },
      { month: "Nov", production: 8000, consumption: 14500 },
      { month: "Dec", production: 7000, consumption: 15000 },
    ],
    roiData: [
      { year: "Year 0", cumulative: -180000, investment: 180000 },
      { year: "Year 1", cumulative: -164800, investment: 180000 },
      { year: "Year 2", cumulative: -149600, investment: 180000 },
      { year: "Year 3", cumulative: -134400, investment: 180000 },
      { year: "Year 4", cumulative: -119200, investment: 180000 },
      { year: "Year 5", cumulative: -104000, investment: 180000 },
      { year: "Year 6", cumulative: 0, investment: 180000 },
      { year: "Year 7", cumulative: 15200, investment: 180000 },
      { year: "Year 8", cumulative: 30400, investment: 180000 },
      { year: "Year 9", cumulative: 45600, investment: 180000 },
      { year: "Year 10", cumulative: 60800, investment: 180000 },
    ],
    specs: {
      panels: 400,
      inverter: "Multiple SMA Sunny Tripower CORE1",
      battery: "Tesla Megapack (200 kWh)",
      warranty: "25 years on panels, 10 years on inverters, 15 years on battery"
    }
  },
  "first-baptist-church": {
    title: "First Baptist Church",
    customerType: "Non-Profit",
    icon: Heart,
    location: "Nashville, TN",
    systemSize: "40 kW",
    images: [installationImage, commercialImage, residentialImage],
    summary: "A historic church embraces sustainability while expanding community outreach.",
    annualSavings: "$7,800",
    roiTimeline: "5 years",
    co2Offset: "35 tons/year",
    challenge: "The 100-year-old church building had high energy costs and the congregation wanted to demonstrate environmental stewardship. Historic preservation requirements added complexity.",
    solution: "A carefully designed system on the newer fellowship hall roof, with ground-mounted panels in a garden area. The installation respects the historic main building while maximizing generation.",
    results: [
      "Savings fund expanded food bank operations",
      "Solar garden serves as meditation space",
      "Youth group involved in monitoring program",
      "Recognition from denomination for sustainability",
      "Inspired 3 other churches to go solar"
    ],
    installationTimeline: [
      { phase: "Historic Review", duration: "4 weeks", description: "Historic preservation compliance review" },
      { phase: "Community Input", duration: "2 weeks", description: "Congregation meetings and design approval" },
      { phase: "Permitting", duration: "3 weeks", description: "Special permits for historic district" },
      { phase: "Installation", duration: "6 days", description: "Careful installation preserving grounds" },
      { phase: "Dedication", duration: "1 day", description: "Special service and community celebration" }
    ],
    energyData: [
      { month: "Jan", production: 2200, consumption: 3500 },
      { month: "Feb", production: 2600, consumption: 3200 },
      { month: "Mar", production: 3400, consumption: 2800 },
      { month: "Apr", production: 4000, consumption: 2500 },
      { month: "May", production: 4600, consumption: 2800 },
      { month: "Jun", production: 5000, consumption: 3500 },
      { month: "Jul", production: 5200, consumption: 4000 },
      { month: "Aug", production: 4800, consumption: 3800 },
      { month: "Sep", production: 4000, consumption: 3200 },
      { month: "Oct", production: 3200, consumption: 2800 },
      { month: "Nov", production: 2400, consumption: 3200 },
      { month: "Dec", production: 2000, consumption: 3500 },
    ],
    roiData: [
      { year: "Year 0", cumulative: -55000, investment: 55000 },
      { year: "Year 1", cumulative: -47200, investment: 55000 },
      { year: "Year 2", cumulative: -39400, investment: 55000 },
      { year: "Year 3", cumulative: -31600, investment: 55000 },
      { year: "Year 4", cumulative: -23800, investment: 55000 },
      { year: "Year 5", cumulative: -16000, investment: 55000 },
      { year: "Year 6", cumulative: 0, investment: 55000 },
      { year: "Year 7", cumulative: 7800, investment: 55000 },
      { year: "Year 8", cumulative: 15600, investment: 55000 },
      { year: "Year 9", cumulative: 23400, investment: 55000 },
      { year: "Year 10", cumulative: 31200, investment: 55000 },
    ],
    specs: {
      panels: 105,
      inverter: "SolarEdge SE33.3K",
      battery: "LG Chem RESU16H Prime",
      warranty: "25 years on panels, 12 years on inverter, 10 years on battery"
    }
  },
  "garcia-manufacturing": {
    title: "Garcia Manufacturing",
    customerType: "Commercial",
    icon: Building2,
    location: "Albuquerque, NM",
    systemSize: "250 kW",
    images: [commercialImage, installationImage, residentialImage],
    summary: "Industrial manufacturing facility meets sustainability goals with massive solar installation.",
    annualSavings: "$22,400",
    roiTimeline: "5 years",
    co2Offset: "180 tons/year",
    challenge: "Heavy manufacturing equipment requires massive amounts of power. Rising energy costs threatened competitiveness, and customers increasingly demanded sustainable supply chains.",
    solution: "A 250 kW ground-mounted solar field adjacent to the facility, combined with rooftop panels. Advanced monitoring integrates with production scheduling for optimal energy use.",
    results: [
      "Competitive advantage with sustainable credentials",
      "New contracts from eco-conscious clients",
      "Energy independence from grid volatility",
      "Featured as model for industrial solar",
      "Employee pride in environmental leadership"
    ],
    installationTimeline: [
      { phase: "Feasibility & ROI Analysis", duration: "3 weeks", description: "Industrial energy audit and financial modeling" },
      { phase: "Engineering Design", duration: "6 weeks", description: "Large-scale system engineering and structural analysis" },
      { phase: "Permitting", duration: "6 weeks", description: "Industrial permits and environmental review" },
      { phase: "Ground Preparation", duration: "2 weeks", description: "Site preparation and foundation installation" },
      { phase: "Installation", duration: "4 weeks", description: "Panel installation and electrical infrastructure" },
      { phase: "Testing & Commissioning", duration: "1 week", description: "System testing and production integration" }
    ],
    energyData: [
      { month: "Jan", production: 18000, consumption: 28000 },
      { month: "Feb", production: 21000, consumption: 27000 },
      { month: "Mar", production: 26000, consumption: 26000 },
      { month: "Apr", production: 30000, consumption: 25000 },
      { month: "May", production: 34000, consumption: 26000 },
      { month: "Jun", production: 38000, consumption: 28000 },
      { month: "Jul", production: 40000, consumption: 30000 },
      { month: "Aug", production: 37000, consumption: 29000 },
      { month: "Sep", production: 31000, consumption: 27000 },
      { month: "Oct", production: 24000, consumption: 26000 },
      { month: "Nov", production: 19000, consumption: 27000 },
      { month: "Dec", production: 16000, consumption: 28000 },
    ],
    roiData: [
      { year: "Year 0", cumulative: -320000, investment: 320000 },
      { year: "Year 1", cumulative: -297600, investment: 320000 },
      { year: "Year 2", cumulative: -275200, investment: 320000 },
      { year: "Year 3", cumulative: -252800, investment: 320000 },
      { year: "Year 4", cumulative: -230400, investment: 320000 },
      { year: "Year 5", cumulative: -208000, investment: 320000 },
      { year: "Year 6", cumulative: 0, investment: 320000 },
      { year: "Year 7", cumulative: 22400, investment: 320000 },
      { year: "Year 8", cumulative: 44800, investment: 320000 },
      { year: "Year 9", cumulative: 67200, investment: 320000 },
      { year: "Year 10", cumulative: 89600, investment: 320000 },
    ],
    specs: {
      panels: 650,
      inverter: "Multiple ABB PVS-175",
      battery: "BYD Battery Box Premium (400 kWh)",
      warranty: "30 years on panels, 10 years on inverters, 15 years on battery"
    }
  },
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudiesData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = study.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4">
          <Link to="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <IconComponent className="h-3 w-3 mr-1" />
              {study.customerType}
            </Badge>
            <span className="text-white/80">{study.location}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{study.summary}</p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Sun className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{study.systemSize}</div>
              <div className="text-muted-foreground">System Size</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{study.annualSavings}</div>
              <div className="text-muted-foreground">Annual Savings</div>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{study.roiTimeline}</div>
              <div className="text-muted-foreground">ROI Timeline</div>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{study.co2Offset}</div>
              <div className="text-muted-foreground">CO₂ Offset</div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Photos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Installation Photos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {study.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src={image} 
                  alt={`Installation phase ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">
                    {index === 0 ? "Before Installation" : index === 1 ? "During Installation" : "Completed System"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground">{study.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Key Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.results.map((result, index) => (
              <Card key={index} className="p-4 flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{result}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Production Chart */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Energy Production vs Consumption</h2>
          <Card className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={study.energyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => [`${value} kWh`, '']}
                />
                <Bar dataKey="production" fill="hsl(var(--primary))" name="Solar Production" radius={[4, 4, 0, 0]} />
                <Bar dataKey="consumption" fill="hsl(var(--muted-foreground))" name="Energy Consumption" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary" />
                <span className="text-sm text-muted-foreground">Solar Production</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-muted-foreground" />
                <span className="text-sm text-muted-foreground">Energy Consumption</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ROI Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Return on Investment Timeline</h2>
          <Card className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={study.roiData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="year" className="text-muted-foreground" />
                <YAxis 
                  className="text-muted-foreground"
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                />
                <Line 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="Cumulative Savings"
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center text-muted-foreground mt-4">
              Break-even point reached at {study.roiTimeline}, with continuous savings thereafter
            </p>
          </Card>
        </div>
      </section>

      {/* Installation Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Installation Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
            {study.installationTimeline.map((phase, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <Card className="p-6 inline-block text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground text-sm">{phase.description}</p>
                  </Card>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">System Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Sun className="h-10 w-10 mx-auto text-primary mb-4" />
              <div className="text-2xl font-bold mb-2">{study.specs.panels}</div>
              <div className="text-muted-foreground">Solar Panels</div>
            </Card>
            <Card className="p-6 text-center">
              <Gauge className="h-10 w-10 mx-auto text-primary mb-4" />
              <div className="text-lg font-bold mb-2">{study.specs.inverter}</div>
              <div className="text-muted-foreground">Inverter</div>
            </Card>
            <Card className="p-6 text-center">
              <Battery className="h-10 w-10 mx-auto text-primary mb-4" />
              <div className="text-lg font-bold mb-2">{study.specs.battery}</div>
              <div className="text-muted-foreground">Battery Storage</div>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-10 w-10 mx-auto text-primary mb-4" />
              <div className="text-sm font-bold mb-2">{study.specs.warranty}</div>
              <div className="text-muted-foreground">Warranty</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join {study.title.split(" ")[0]} and thousands of others who are saving money while helping the environment.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Home, Heart, ArrowRight, TrendingUp, Zap, Calendar } from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import installationImage from "@/assets/installation.jpg";

const caseStudies = [
  {
    id: "johnson-residence",
    title: "Johnson Family Residence",
    customerType: "Residential",
    icon: Home,
    location: "Los Angeles, CA",
    systemSize: "8.5 kW",
    image: residentialImage,
    summary: "A family of four reduced their energy bills by 75% with a rooftop solar installation.",
    annualSavings: "$2,400",
    roiTimeline: "6 years",
    co2Offset: "8.2 tons/year",
  },
  {
    id: "rodriguez-restaurant",
    title: "Rodriguez Family Restaurant",
    customerType: "Commercial",
    icon: Building2,
    location: "Austin, TX",
    systemSize: "45 kW",
    image: commercialImage,
    summary: "An iconic local restaurant cut energy costs in half while attracting eco-conscious diners.",
    annualSavings: "$8,500",
    roiTimeline: "4 years",
    co2Offset: "42 tons/year",
  },
  {
    id: "community-center",
    title: "Hope Community Center",
    customerType: "Non-Profit",
    icon: Heart,
    location: "Portland, OR",
    systemSize: "32 kW",
    image: installationImage,
    summary: "A community center serving 500+ families redirects energy savings to expand programs.",
    annualSavings: "$6,200",
    roiTimeline: "5 years",
    co2Offset: "28 tons/year",
  },
  {
    id: "kim-warehouse",
    title: "Kim Logistics Warehouse",
    customerType: "Commercial",
    icon: Building2,
    location: "Seattle, WA",
    systemSize: "150 kW",
    image: commercialImage,
    summary: "A 24/7 distribution center achieved massive savings with a large-scale solar array.",
    annualSavings: "$15,200",
    roiTimeline: "5 years",
    co2Offset: "120 tons/year",
  },
  {
    id: "first-baptist-church",
    title: "First Baptist Church",
    customerType: "Non-Profit",
    icon: Heart,
    location: "Nashville, TN",
    systemSize: "40 kW",
    image: installationImage,
    summary: "A historic church embraces sustainability while expanding community outreach.",
    annualSavings: "$7,800",
    roiTimeline: "5 years",
    co2Offset: "35 tons/year",
  },
  {
    id: "garcia-manufacturing",
    title: "Garcia Manufacturing",
    customerType: "Commercial",
    icon: Building2,
    location: "Albuquerque, NM",
    systemSize: "250 kW",
    image: commercialImage,
    summary: "Industrial manufacturing facility meets sustainability goals with massive solar installation.",
    annualSavings: "$22,400",
    roiTimeline: "5 years",
    co2Offset: "180 tons/year",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Success Stories</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Discover how homes, businesses, and organizations transformed their energy future with solar power.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$62K+</div>
              <div className="text-muted-foreground">Annual Savings Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">525 kW</div>
              <div className="text-muted-foreground">Total Capacity Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">413 tons</div>
              <div className="text-muted-foreground">CO₂ Offset Annually</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5 yrs</div>
              <div className="text-muted-foreground">Average ROI Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    <study.icon className="h-3 w-3 mr-1" />
                    {study.customerType}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {study.location} • {study.systemSize}
                  </p>
                  <p className="text-sm mb-4">{study.summary}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-muted rounded-lg p-2">
                      <TrendingUp className="h-4 w-4 mx-auto text-primary mb-1" />
                      <div className="text-xs text-muted-foreground">Savings</div>
                      <div className="text-sm font-semibold text-primary">{study.annualSavings}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-2">
                      <Calendar className="h-4 w-4 mx-auto text-primary mb-1" />
                      <div className="text-xs text-muted-foreground">ROI</div>
                      <div className="text-sm font-semibold text-primary">{study.roiTimeline}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-2">
                      <Zap className="h-4 w-4 mx-auto text-primary mb-1" />
                      <div className="text-xs text-muted-foreground">CO₂ Offset</div>
                      <div className="text-sm font-semibold text-primary">{study.co2Offset}</div>
                    </div>
                  </div>
                  
                  <Link to={`/case-studies/${study.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these satisfied customers and start saving with solar energy today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

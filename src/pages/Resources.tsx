import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Zap,
  MapPin,
  Sun,
  Battery,
  Leaf,
  FileText,
  BookOpen,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogSection from "@/components/BlogSection";

interface CalculatorResults {
  systemSize: string;
  panelCount: string;
  annualProduction: string;
  monthlySavings: string;
  annualSavings: string;
  systemCost: string;
  federalTaxCredit: string;
  stateTaxCredit: string;
  netCost: string;
  paybackPeriod: string;
  twentyFiveYearSavings: string;
  co2Offset: string;
}

const Resources = () => {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofSize, setRoofSize] = useState("");
  const [sunlightHours, setSunlightHours] = useState("");
  const [state, setState] = useState("");
  const [systemType, setSystemType] = useState("standard");
  const [includeStorage, setIncludeStorage] = useState(false);
  const [roofAngle, setRoofAngle] = useState([30]);
  const [electricityRate, setElectricityRate] = useState([0.15]);
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const stateIncentives: Record<
    string,
    { stateTaxCredit: number; rebate: number }
  > = {
    CA: { stateTaxCredit: 0, rebate: 1000 },
    TX: { stateTaxCredit: 0, rebate: 500 },
    AZ: { stateTaxCredit: 0.25, rebate: 0 },
    FL: { stateTaxCredit: 0, rebate: 0 },
    NY: { stateTaxCredit: 0.25, rebate: 0 },
    NJ: { stateTaxCredit: 0, rebate: 1500 },
    CO: { stateTaxCredit: 0, rebate: 2000 },
    MA: { stateTaxCredit: 0.15, rebate: 0 },
  };

  const systemTypeMultipliers: Record<
    string,
    { efficiency: number; cost: number }
  > = {
    standard: { efficiency: 1, cost: 2.5 },
    premium: { efficiency: 1.15, cost: 3.0 },
    highEfficiency: { efficiency: 1.25, cost: 3.5 },
  };

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const roof = parseFloat(roofSize) || 0;
    const hours = parseFloat(sunlightHours) || 5;
    const rate = electricityRate[0];
    const angle = roofAngle[0];

    // Roof angle efficiency factor (optimal is ~30 degrees)
    const angleEfficiency = 1 - Math.abs(30 - angle) * 0.005;

    // System type multipliers
    const systemMultiplier = systemTypeMultipliers[systemType];

    // Calculate system size (kW) - ~150W per sq ft with efficiency adjustments
    const baseSystemSize =
      roof * 0.015 * angleEfficiency * systemMultiplier.efficiency;
    const systemSize = Math.min(baseSystemSize, 25); // Cap at 25kW for residential

    // Panel count (~400W per panel for modern panels)
    const panelCount = Math.ceil((systemSize * 1000) / 400);

    // Annual production (kWh)
    const annualProduction = systemSize * hours * 365 * 0.8; // 80% system efficiency

    // Savings calculations
    const annualSavings = annualProduction * rate;
    const monthlySavings = annualSavings / 12;

    // Cost calculations
    let systemCost = systemSize * systemMultiplier.cost * 1000;

    // Add battery storage cost if selected (~$10,000 for 10kWh)
    if (includeStorage) {
      systemCost += 10000;
    }

    // Federal tax credit (30% ITC)
    const federalTaxCredit = systemCost * 0.3;

    // State incentives
    const stateData = stateIncentives[state] || {
      stateTaxCredit: 0,
      rebate: 0,
    };
    const stateTaxCredit =
      systemCost * stateData.stateTaxCredit + stateData.rebate;

    // Net cost after incentives
    const netCost = systemCost - federalTaxCredit - stateTaxCredit;

    // Payback period
    const paybackPeriod = netCost / annualSavings;

    // 25-year net savings
    const twentyFiveYearSavings = annualSavings * 25 - netCost;

    // CO2 offset (average 0.92 lbs CO2 per kWh)
    const co2Offset = (annualProduction * 0.92) / 2000; // Convert to tons

    setResults({
      systemSize: systemSize.toFixed(1),
      panelCount: panelCount.toString(),
      annualProduction: Math.round(annualProduction).toLocaleString(),
      monthlySavings: Math.round(monthlySavings).toLocaleString(),
      annualSavings: Math.round(annualSavings).toLocaleString(),
      systemCost: Math.round(systemCost).toLocaleString(),
      federalTaxCredit: Math.round(federalTaxCredit).toLocaleString(),
      stateTaxCredit: Math.round(stateTaxCredit).toLocaleString(),
      netCost: Math.round(netCost).toLocaleString(),
      paybackPeriod: paybackPeriod.toFixed(1),
      twentyFiveYearSavings: Math.round(twentyFiveYearSavings).toLocaleString(),
      co2Offset: co2Offset.toFixed(1),
    });
  };

  const resources = [
    {
      icon: FileText,
      title: "Solar Buyer's Guide",
      description: "Everything you need to know before going solar",
      type: "PDF Guide",
    },
    {
      icon: BookOpen,
      title: "Understanding Net Metering",
      description: "How to maximize your solar investment with net metering",
      type: "Article",
    },
    {
      icon: Download,
      title: "Federal & State Incentives",
      description: "Complete guide to solar tax credits and rebates",
      type: "Downloadable",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Solar Resources</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Calculate your savings, explore guides, and learn everything about
            going solar.
          </p>
        </div>
      </section>

      {/* Enhanced Solar Calculator */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Advanced Solar Calculator
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Estimate Your Solar Savings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a detailed estimate including tax credits, state incentives,
              and environmental impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Calculator Input */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Enter Your Details</h3>
              <div className="space-y-6">
                {/* Basic Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="monthlyBill">
                      Monthly Electric Bill (₹)
                    </Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      placeholder="150"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="roofSize">Roof Space (sq ft)</Label>
                    <Input
                      id="roofSize"
                      type="number"
                      value={roofSize}
                      onChange={(e) => setRoofSize(e.target.value)}
                      placeholder="500"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="state" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    State (for incentives)
                  </Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="NJ">New Jersey</SelectItem>
                      <SelectItem value="CO">Colorado</SelectItem>
                      <SelectItem value="MA">Massachusetts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sunlight Hours */}
                <div>
                  <Label htmlFor="sunlight" className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    Average Daily Sunlight
                  </Label>
                  <Select
                    value={sunlightHours}
                    onValueChange={setSunlightHours}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select sunlight hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 hours (Low sun)</SelectItem>
                      <SelectItem value="5">5 hours (Average)</SelectItem>
                      <SelectItem value="6">6 hours (Good)</SelectItem>
                      <SelectItem value="7">7 hours (Excellent)</SelectItem>
                      <SelectItem value="8">
                        8+ hours (Peak sun belt)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* System Type */}
                <div>
                  <Label
                    htmlFor="systemType"
                    className="flex items-center gap-2"
                  >
                    <Zap className="h-4 w-4" />
                    Panel Quality
                  </Label>
                  <Select value={systemType} onValueChange={setSystemType}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        Standard Efficiency (₹2.50/W)
                      </SelectItem>
                      <SelectItem value="premium">
                        Premium (+15% efficiency, ₹3.00/W)
                      </SelectItem>
                      <SelectItem value="highEfficiency">
                        High Efficiency (+25%, ₹3.50/W)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Roof Angle Slider */}
                <div>
                  <Label className="flex items-center justify-between">
                    <span>Roof Angle</span>
                    <span className="text-sm text-muted-foreground">
                      {roofAngle[0]}°
                    </span>
                  </Label>
                  <Slider
                    value={roofAngle}
                    onValueChange={setRoofAngle}
                    min={0}
                    max={60}
                    step={5}
                    className="mt-4"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Optimal: 25-35° for most locations
                  </p>
                </div>

                {/* Electricity Rate Slider */}
                <div>
                  <Label className="flex items-center justify-between">
                    <span>Electricity Rate</span>
                    <span className="text-sm text-muted-foreground">
                      ₹{electricityRate[0].toFixed(2)}/kWh
                    </span>
                  </Label>
                  <Slider
                    value={electricityRate}
                    onValueChange={setElectricityRate}
                    min={0.08}
                    max={0.35}
                    step={0.01}
                    className="mt-4"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    US average: ₹0.13/kWh
                  </p>
                </div>

                {/* Battery Storage Toggle */}
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Battery className="h-5 w-5 text-primary" />
                    <div>
                      <Label htmlFor="storage" className="cursor-pointer">
                        Battery Storage
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Add 10kWh battery (~₹10,000)
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="storage"
                    checked={includeStorage}
                    onCheckedChange={setIncludeStorage}
                  />
                </div>

                <Button onClick={calculateSavings} size="lg" className="w-full">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate My Savings
                </Button>
              </div>
            </Card>

            {/* Results */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <h3 className="text-2xl font-bold mb-6">
                Your Estimated Savings
              </h3>
              {results ? (
                <div className="space-y-6">
                  {/* System Overview */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Zap className="h-4 w-4" />
                        System Size
                      </div>
                      <p className="text-2xl font-bold">
                        {results.systemSize} kW
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {results.panelCount} panels
                      </p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <TrendingUp className="h-4 w-4" />
                        Annual Production
                      </div>
                      <p className="text-2xl font-bold">
                        {results.annualProduction} kWh
                      </p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <DollarSign className="h-4 w-4" />
                        Monthly Savings
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        ₹{results.monthlySavings}
                      </p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <DollarSign className="h-4 w-4" />
                        Annual Savings
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        ₹{results.annualSavings}
                      </p>
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="bg-background p-6 rounded-lg">
                    <h4 className="font-semibold mb-4 text-lg">
                      Investment Breakdown
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          System Cost:
                        </span>
                        <span className="font-semibold">
                          ₹{results.systemCost}
                        </span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Federal Tax Credit (30%):</span>
                        <span className="font-semibold">
                          -₹{results.federalTaxCredit}
                        </span>
                      </div>
                      {parseInt(results.stateTaxCredit.replace(/,/g, "")) >
                        0 && (
                        <div className="flex justify-between text-green-600">
                          <span>State Incentives:</span>
                          <span className="font-semibold">
                            -₹{results.stateTaxCredit}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-3">
                        <span className="font-medium">Net Cost:</span>
                        <span className="font-bold text-xl">
                          ₹{results.netCost}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ROI & Environmental */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        Payback Period
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        {results.paybackPeriod}
                      </p>
                      <p className="text-xs text-muted-foreground">years</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        25-Year Savings
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        ${results.twentyFiveYearSavings}
                      </p>
                    </div>
                  </div>

                  {/* Environmental Impact */}
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-400">
                        Environmental Impact
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-500">
                        {results.co2Offset} tons of CO₂ offset annually
                      </p>
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">
                      Get Your Free Quote{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Estimates based on average conditions. Actual savings may
                    vary.
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-muted-foreground">
                  <div className="text-center">
                    <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">
                      Enter your details to see your potential savings
                    </p>
                    <p className="text-sm mt-2">
                      Including tax credits and state incentives
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Blog & News Section */}
      <BlogSection />

      {/* Additional Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download guides and learn more about solar energy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group bg-background"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs font-medium text-primary mb-2">
                  {resource.type}
                </p>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for a personalized consultation and accurate quote.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Request Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;

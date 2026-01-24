import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, DollarSign, Zap } from "lucide-react";

export const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofSize, setRoofSize] = useState("");
  const [sunlightHours, setSunlightHours] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const roof = parseFloat(roofSize) || 0;
    const hours = parseFloat(sunlightHours) || 5;

    // Simple calculation logic
    const systemSize = roof * 0.15; // kW (assuming 150W per sq ft)
    const annualProduction = systemSize * hours * 365; // kWh per year
    const currentAnnualCost = bill * 12;
    const costPerKwh = 0.13; // Average US electricity cost
    const annualSavings = annualProduction * costPerKwh;
    const monthlySavings = annualSavings / 12;
    const systemCost = systemSize * 2500; // $2.50/W average
    const paybackPeriod = systemCost / annualSavings;
    const twentyFiveYearSavings = annualSavings * 25 - systemCost;

    setResults({
      systemSize: systemSize.toFixed(1),
      annualProduction: annualProduction.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1),
      twentyFiveYearSavings: twentyFiveYearSavings.toFixed(0),
    });
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Solar Savings Calculator</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Estimate Your Solar Savings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much you could save by switching to solar energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Input */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Enter Your Details</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="monthlyBill">Average Monthly Electric Bill ($)</Label>
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
                <Label htmlFor="roofSize">Usable Roof Space (sq ft)</Label>
                <Input
                  id="roofSize"
                  type="number"
                  value={roofSize}
                  onChange={(e) => setRoofSize(e.target.value)}
                  placeholder="500"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="sunlight">Average Daily Sunlight Hours</Label>
                <Select value={sunlightHours} onValueChange={setSunlightHours}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select sunlight hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4 hours (Low sun)</SelectItem>
                    <SelectItem value="5">5 hours (Average)</SelectItem>
                    <SelectItem value="6">6 hours (Good)</SelectItem>
                    <SelectItem value="7">7 hours (Excellent)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={calculateSavings} size="lg" className="w-full">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Savings
              </Button>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <h3 className="text-2xl font-bold mb-6">Your Estimated Savings</h3>
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Zap className="h-4 w-4" />
                      System Size
                    </div>
                    <p className="text-2xl font-bold">{results.systemSize} kW</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <TrendingUp className="h-4 w-4" />
                      Annual Production
                    </div>
                    <p className="text-2xl font-bold">{results.annualProduction} kWh</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <DollarSign className="h-4 w-4" />
                      Monthly Savings
                    </div>
                    <p className="text-2xl font-bold text-primary">${results.monthlySavings}</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <DollarSign className="h-4 w-4" />
                      Annual Savings
                    </div>
                    <p className="text-2xl font-bold text-primary">${results.annualSavings}</p>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-lg">Investment Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated System Cost:</span>
                      <span className="font-semibold">${results.systemCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payback Period:</span>
                      <span className="font-semibold">{results.paybackPeriod} years</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-muted-foreground">25-Year Net Savings:</span>
                      <span className="font-bold text-primary text-xl">${results.twentyFiveYearSavings}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  * Estimates based on average solar panel efficiency and local electricity rates. Actual savings may vary based on your specific conditions, location, and energy usage patterns.
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your details and click Calculate to see your potential savings</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

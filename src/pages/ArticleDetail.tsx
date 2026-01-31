import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bookmark, User, Newspaper, Lightbulb, TrendingUp, Building2 } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const articlesData: Record<string, {
  title: string;
  category: string;
  categoryIcon: React.ElementType;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  relatedArticles: number[];
}> = {
  "1": {
    title: "Solar Energy Hits Record Low Prices in 2024",
    category: "Industry News",
    categoryIcon: Newspaper,
    excerpt: "The cost of solar installations has dropped by 70% over the past decade, making it more accessible than ever for homeowners and businesses alike.",
    content: [
      "The solar energy industry has reached a historic milestone in 2024, with installation costs dropping to unprecedented lows. This dramatic decrease of 70% over the past decade has transformed solar power from a luxury investment into an accessible option for everyday homeowners and small businesses.",
      "Several factors have contributed to this remarkable price reduction. Manufacturing efficiencies have improved dramatically, with solar panel production becoming increasingly automated and streamlined. The scale of production has also grown exponentially, with global solar panel manufacturing capacity exceeding 600 gigawatts annually.",
      "Technological advancements have played a crucial role as well. Modern solar panels achieve efficiency ratings of 22-23% for residential installations, compared to just 15% a decade ago. This means homeowners need fewer panels to generate the same amount of electricity, reducing overall system costs.",
      "The supply chain for solar components has matured significantly. Competition among manufacturers has intensified, driving down prices for everything from solar cells to inverters and mounting hardware. Installation labor costs have also decreased as the workforce has expanded and become more experienced.",
      "Government incentives continue to support the solar industry. The federal Investment Tax Credit (ITC) remains at 30% through 2032, providing substantial savings for solar adopters. Many states offer additional rebates, tax credits, and net metering programs that further improve the economics of going solar.",
      "Looking ahead, analysts predict that solar prices will continue to decline, though at a slower pace. The focus is now shifting toward energy storage solutions and smart grid integration, which will further enhance the value proposition of residential and commercial solar installations.",
      "For homeowners considering solar, 2024 presents an exceptional opportunity. The combination of low prices, generous incentives, and proven technology makes this an ideal time to invest in clean energy for your home."
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    author: "Sarah Mitchell",
    authorRole: "Energy Market Analyst",
    relatedArticles: [2, 5, 6]
  },
  "2": {
    title: "10 Ways to Maximize Your Solar Panel Efficiency",
    category: "Tips & Guides",
    categoryIcon: Lightbulb,
    excerpt: "Learn expert tips to get the most out of your solar installation, from optimal panel placement to regular maintenance schedules.",
    content: [
      "Getting the most out of your solar panel investment requires more than just installation. With proper care and optimization, you can significantly increase your system's energy production and extend its lifespan. Here are ten proven strategies to maximize your solar panel efficiency.",
      "1. Optimal Panel Positioning: The angle and direction of your panels dramatically affect energy production. In the Northern Hemisphere, panels should face south at an angle roughly equal to your latitude. Consider adjustable mounting systems for seasonal optimization.",
      "2. Keep Panels Clean: Dust, pollen, bird droppings, and debris can reduce efficiency by 5-25%. Clean your panels at least twice a year, or more frequently in dusty areas. Use soft brushes and water without harsh chemicals.",
      "3. Minimize Shading: Even partial shading on one panel can significantly reduce output for the entire string. Trim trees regularly and consider micro-inverters or power optimizers to minimize shading impact.",
      "4. Monitor Performance: Install a monitoring system to track daily energy production. This helps you identify issues early and ensure your system operates at peak performance. Many modern inverters include built-in monitoring apps.",
      "5. Schedule Regular Inspections: Have a professional inspect your system annually. They can identify potential issues like loose connections, degrading components, or wildlife damage before they become serious problems.",
      "6. Upgrade to Smart Inverters: Modern inverters with MPPT (Maximum Power Point Tracking) technology optimize energy harvest throughout the day. Consider upgrading if your system uses older inverter technology.",
      "7. Add Battery Storage: Pair your panels with battery storage to capture excess energy produced during peak hours. This maximizes the value of every kilowatt-hour your system generates.",
      "8. Manage Energy Consumption: Shift high-energy tasks like laundry and dishwashing to peak solar production hours. Smart home devices can automate this process for maximum efficiency.",
      "9. Check for Damage After Storms: High winds, hail, and debris can damage panels or mounting systems. Inspect your installation after severe weather events to catch problems early.",
      "10. Plan for the Future: Consider your system's expansion potential. Leaving room for additional panels or storage allows you to grow your solar capacity as energy needs change."
    ],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=600&fit=crop",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    author: "James Chen",
    authorRole: "Solar Installation Expert",
    relatedArticles: [1, 3, 5]
  },
  "3": {
    title: "The Rise of Solar + Battery Storage Systems",
    category: "Trends",
    categoryIcon: TrendingUp,
    excerpt: "Why more homeowners are pairing solar panels with battery storage for complete energy independence and backup power during outages.",
    content: [
      "The combination of solar panels and battery storage is revolutionizing how homeowners think about energy independence. As battery technology improves and prices decline, more families are opting for complete solar-plus-storage systems that provide power around the clock, regardless of grid conditions.",
      "Battery storage addresses one of solar energy's traditional limitations: intermittency. While solar panels only produce electricity during daylight hours, batteries store excess daytime production for use in the evening and at night. This allows homeowners to use their own clean energy 24/7.",
      "Energy independence is a primary motivator for many solar-plus-storage adopters. With a properly sized battery system, homes can operate independently of the grid during outages. This has become increasingly valuable as extreme weather events cause more frequent and prolonged power disruptions.",
      "The economics of battery storage have improved dramatically. Lithium-ion battery prices have fallen by over 80% in the past decade, making storage systems accessible to mainstream homeowners. Many utility companies also offer time-of-use rates that allow storage owners to arbitrage electricity prices.",
      "Modern battery systems integrate seamlessly with solar installations. Products like the Tesla Powerwall, Enphase IQ Battery, and LG RESU have streamlined installation processes and intuitive smartphone apps for monitoring and control. Most systems can be installed in a single day.",
      "Government incentives now support battery storage alongside solar. The federal Investment Tax Credit applies to batteries installed with solar systems, providing a 30% credit on storage costs. Many states offer additional incentives specifically for energy storage.",
      "For new solar buyers, adding battery storage at the time of installation is often the most cost-effective approach. This allows for optimized system design and reduces overall installation labor costs. Retrofitting batteries to existing solar systems is also increasingly straightforward.",
      "The future of home energy clearly includes storage. As electric vehicles become more common, batteries will play a crucial role in managing household energy flows. Vehicle-to-home (V2H) technology may eventually allow EV batteries to serve as home backup power sources.",
      "For homeowners considering solar, now is an excellent time to evaluate solar-plus-storage options. The combination provides energy security, maximum savings, and environmental benefits that solar alone cannot achieve."
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    author: "Michael Rodriguez",
    authorRole: "Renewable Energy Consultant",
    relatedArticles: [1, 2, 6]
  },
  "4": {
    title: "SolarVista Expands to 5 New States",
    category: "Company Updates",
    categoryIcon: Building2,
    excerpt: "We're excited to announce our expansion into Colorado, Nevada, Oregon, Washington, and New Mexico to serve more communities.",
    content: [
      "SolarVista is thrilled to announce our expansion into five new states: Colorado, Nevada, Oregon, Washington, and New Mexico. This growth marks a significant milestone in our mission to make solar energy accessible to communities across the nation.",
      "Our expansion was driven by overwhelming demand from homeowners and businesses in these regions. Each state offers excellent solar potential, supportive policies, and growing communities eager to embrace clean energy. We're honored to bring our expertise and customer-focused approach to these new markets.",
      "Colorado, with its 300+ days of annual sunshine and progressive renewable energy goals, presents an ideal market for solar adoption. The state's generous incentives and net metering policies make solar an excellent investment for Front Range homeowners and beyond.",
      "Nevada's desert climate makes it one of the nation's best states for solar production. Combined with recently strengthened net metering rules and the state's commitment to 50% renewable energy by 2030, Nevada homeowners can expect exceptional returns on solar investments.",
      "Oregon and Washington may surprise some as solar markets, but both states have proven that solar works effectively in the Pacific Northwest. Strong incentive programs, high electricity rates, and environmentally conscious communities have created robust demand for residential solar.",
      "New Mexico rounds out our expansion with abundant sunshine and a growing commitment to renewable energy. The state's solar tax credit and utility programs make solar installations highly attractive for homeowners throughout the region.",
      "Our expansion brings new jobs to each state. We're hiring local installation teams, customer service representatives, and sales professionals. SolarVista is committed to creating economic opportunity in the communities we serve.",
      "Existing customers can expect the same high-quality service and support that has made SolarVista a trusted name in solar. Our comprehensive warranties, 24/7 monitoring, and responsive maintenance teams will extend to all new markets.",
      "If you live in Colorado, Nevada, Oregon, Washington, or New Mexico, we invite you to schedule a free consultation. Our energy advisors will assess your property's solar potential and create a customized proposal tailored to your energy goals and budget."
    ],
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&h=600&fit=crop",
    date: "Dec 28, 2023",
    readTime: "3 min read",
    author: "Jennifer Walsh",
    authorRole: "VP of Communications",
    relatedArticles: [1, 5, 6]
  },
  "5": {
    title: "Understanding Solar Tax Credits in 2024",
    category: "Tips & Guides",
    categoryIcon: Lightbulb,
    excerpt: "A comprehensive guide to federal and state solar incentives, including the 30% Investment Tax Credit and local rebate programs.",
    content: [
      "Navigating solar incentives can feel overwhelming, but understanding available tax credits and rebates is essential for maximizing your solar investment. This guide covers the major incentives available to homeowners in 2024 and how to take full advantage of them.",
      "The federal Investment Tax Credit (ITC) remains the most valuable solar incentive. The Inflation Reduction Act of 2022 extended and enhanced the ITC, providing a 30% tax credit for residential solar installations through 2032. This credit applies to the full cost of your solar system, including equipment, labor, and permitting.",
      "The ITC is a dollar-for-dollar reduction in your federal income tax liability. For example, if your solar installation costs $25,000, you can claim a $7,500 tax credit. If your tax liability for the year is less than the credit amount, you can carry the unused credit forward to future tax years.",
      "Battery storage systems installed alongside solar are also eligible for the 30% ITC. This significantly improves the economics of solar-plus-storage systems and makes energy independence more accessible to homeowners.",
      "Many states offer additional incentives that stack with the federal credit. State tax credits, rebates, and performance payments vary widely, so it's important to research programs specific to your location. Popular state programs include:",
      "- California's Self-Generation Incentive Program (SGIP) for battery storage\n- New York's Megawatt Block Incentive for solar installations\n- Massachusetts SMART program for solar performance payments\n- Arizona's residential solar tax credit\n- Colorado's renewable energy property tax exemption",
      "Net metering policies allow solar owners to receive credit for excess electricity sent to the grid. While policies vary by state and utility, net metering can significantly reduce electricity bills and improve solar payback periods. Check with your local utility for current net metering terms.",
      "Some utilities offer time-of-use (TOU) rate structures that benefit solar owners. Under TOU rates, electricity costs more during peak demand periods. Solar owners can use their own clean energy during expensive peak hours and draw from the grid during cheaper off-peak times.",
      "To claim the federal ITC, you'll need to file IRS Form 5695 with your annual tax return. Keep detailed records of all installation costs, including invoices, contracts, and proof of payment. Consult with a tax professional if you have questions about eligibility or how to claim the credit.",
      "Don't wait too long to go solar. While the 30% ITC is available through 2032, the credit will begin stepping down in 2033. Lock in maximum savings by installing solar while incentives remain at their peak."
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    author: "David Patterson",
    authorRole: "Solar Finance Specialist",
    relatedArticles: [1, 2, 4]
  },
  "6": {
    title: "New Solar Panel Technology Breaks Efficiency Records",
    category: "Industry News",
    categoryIcon: Newspaper,
    excerpt: "Perovskite solar cells achieve 33% efficiency in lab tests, promising even more powerful and affordable panels in the near future.",
    content: [
      "A breakthrough in solar technology has captured the attention of the renewable energy industry. Researchers have achieved a record-breaking 33% efficiency rating with perovskite-silicon tandem solar cells, surpassing the practical efficiency limits of traditional silicon-only panels.",
      "This achievement represents a significant leap forward in solar technology. Current residential panels typically achieve 20-22% efficiency, meaning they convert about one-fifth of incoming sunlight into electricity. A 33% efficient panel would generate roughly 50% more power from the same amount of sunlight.",
      "Perovskite materials have emerged as the most promising advancement in solar technology in decades. These crystalline compounds can be manufactured at lower temperatures than silicon and applied as thin films, potentially reducing manufacturing costs significantly.",
      "Tandem cell technology combines perovskite layers with traditional silicon cells. The perovskite layer captures high-energy blue light, while the silicon layer captures lower-energy red light. By harvesting more of the solar spectrum, tandem cells dramatically outperform single-material approaches.",
      "The implications for residential solar are profound. Higher-efficiency panels would allow homeowners to generate more electricity from smaller roof areas. This could make solar viable for homes with limited roof space or challenging orientations that currently struggle to meet energy needs with solar alone.",
      "Cost benefits may be even more significant than efficiency gains. Perovskite materials are abundant and inexpensive compared to the ultra-pure silicon required for current panels. Manufacturing processes could be simplified, using printing techniques similar to newspaper production.",
      "Challenges remain before perovskite technology reaches residential rooftops. Durability has been a concern, as early perovskite cells degraded quickly under real-world conditions. However, recent advances in encapsulation and cell design have dramatically improved longevity, with some cells now demonstrating 25+ year lifespans in accelerated testing.",
      "Industry experts predict commercial perovskite-silicon tandem panels could reach the market within 3-5 years. Major manufacturers are investing heavily in production facilities, suggesting confidence in the technology's commercial viability.",
      "For homeowners considering solar now, there's no need to wait for next-generation technology. Current panels are highly efficient, reliable, and more affordable than ever. Future technology advances will complement existing installations through upgrades and additions rather than replacements.",
      "The solar industry's continued innovation ensures that clean energy will become increasingly accessible and cost-effective for years to come. Today's breakthrough is tomorrow's standard technology."
    ],
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=600&fit=crop",
    date: "Dec 15, 2023",
    readTime: "4 min read",
    author: "Dr. Lisa Thompson",
    authorRole: "Solar Technology Researcher",
    relatedArticles: [1, 2, 3]
  }
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? articlesData[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/resources">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = article.relatedArticles
    .map(relId => ({ id: relId.toString(), ...articlesData[relId.toString()] }))
    .filter(a => a.title);

  const CategoryIcon = article.categoryIcon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <Link 
              to="/resources" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <CategoryIcon className="h-3.5 w-3.5 mr-1.5" />
                {article.category}
              </Badge>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={150}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              {article.title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {article.excerpt}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={250}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{article.author}</p>
                  <p className="text-xs">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 -mt-8">
        <ScrollAnimation animation="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {article.content.map((paragraph, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6 whitespace-pre-line">
                  {paragraph}
                </p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollAnimation animation="fade-up">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related, index) => {
                const RelatedIcon = related.categoryIcon;
                return (
                  <ScrollAnimation key={related.id} animation="fade-up" delay={index * 100}>
                    <Link to={`/articles/${related.id}`}>
                      <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow h-full">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={related.image} 
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <Badge variant="secondary" className="absolute top-3 left-3">
                            <RelatedIcon className="h-3 w-3 mr-1" />
                            {related.category}
                          </Badge>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{related.date}</span>
                            <span>{related.readTime}</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Get a free consultation and see how much you can save with solar energy.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;

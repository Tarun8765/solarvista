import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, Lightbulb, Building2, Newspaper } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const blogPosts = [
  {
    id: 1,
    category: "Industry News",
    categoryIcon: Newspaper,
    title: "Solar Energy Hits Record Low Prices in 2024",
    excerpt: "The cost of solar installations has dropped by 70% over the past decade, making it more accessible than ever for homeowners and businesses alike.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Tips & Guides",
    categoryIcon: Lightbulb,
    title: "10 Ways to Maximize Your Solar Panel Efficiency",
    excerpt: "Learn expert tips to get the most out of your solar installation, from optimal panel placement to regular maintenance schedules.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Trends",
    categoryIcon: TrendingUp,
    title: "The Rise of Solar + Battery Storage Systems",
    excerpt: "Why more homeowners are pairing solar panels with battery storage for complete energy independence and backup power during outages.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Company Updates",
    categoryIcon: Building2,
    title: "SolarVista Expands to 5 New States",
    excerpt: "We're excited to announce our expansion into Colorado, Nevada, Oregon, Washington, and New Mexico to serve more communities.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
    date: "Dec 28, 2023",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Tips & Guides",
    categoryIcon: Lightbulb,
    title: "Understanding Solar Tax Credits in 2024",
    excerpt: "A comprehensive guide to federal and state solar incentives, including the 30% Investment Tax Credit and local rebate programs.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Industry News",
    categoryIcon: Newspaper,
    title: "New Solar Panel Technology Breaks Efficiency Records",
    excerpt: "Perovskite solar cells achieve 33% efficiency in lab tests, promising even more powerful and affordable panels in the near future.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
    date: "Dec 15, 2023",
    readTime: "4 min read",
    featured: false,
  },
];

const BlogSection = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Newspaper className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Blog & News</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Latest Solar Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest solar energy trends, tips, and company news.
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Post */}
        {featuredPost && (
          <ScrollAnimation animation="fade-up" delay={100}>
            <Card className="overflow-hidden mb-12 group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <featuredPost.categoryIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="w-fit">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.slice(0, 5).map((post, index) => (
            <ScrollAnimation key={post.id} animation="fade-up" delay={150 + index * 50}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="w-fit p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BlogSection;

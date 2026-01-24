import { Card } from "@/components/ui/card";
import { Star, Building2, Home, Heart } from "lucide-react";
import { VideoTestimonials } from "./VideoTestimonials";
import sarahImg from "@/assets/testimonial-sarah.jpg";
import michaelImg from "@/assets/testimonial-michael.jpg";
import jenniferImg from "@/assets/testimonial-jennifer.jpg";
import davidImg from "@/assets/testimonial-david.jpg";
import patriciaImg from "@/assets/testimonial-patricia.jpg";
import robertImg from "@/assets/testimonial-robert.jpg";
import lisaImg from "@/assets/testimonial-lisa.jpg";
import jamesImg from "@/assets/testimonial-james.jpg";
import mariaImg from "@/assets/testimonial-maria.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: sarahImg,
    text: "The installation was seamless and professional. Our energy bills dropped by 75% in the first month! The team was knowledgeable and answered all our questions.",
    savings: "$2,400/year",
  },
  {
    name: "David Rodriguez",
    location: "Austin, TX",
    customerType: "Commercial",
    icon: Building2,
    rating: 5,
    image: davidImg,
    text: "Switching to solar was one of the best business decisions we've made. Our restaurant's energy costs have been cut in half, and our customers love that we're eco-friendly. The system paid for itself in just 4 years!",
    savings: "$8,500/year",
  },
  {
    name: "Patricia Williams",
    location: "Portland, OR",
    customerType: "Non-Profit",
    icon: Heart,
    rating: 5,
    image: patriciaImg,
    text: "As a community center serving low-income families, reducing our operating costs was crucial. Solar Vista helped us secure grants and financing. Now we can redirect those savings to our programs. Truly life-changing!",
    savings: "$6,200/year",
  },
  {
    name: "Michael Chen",
    location: "San Diego, CA",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: michaelImg,
    text: "Best investment we've made for our home. The solar panels look great and the ROI is incredible. We're now producing more energy than we consume!",
    savings: "$3,100/year",
  },
  {
    name: "Robert Kim",
    location: "Seattle, WA",
    customerType: "Commercial",
    icon: Building2,
    rating: 5,
    image: robertImg,
    text: "Our warehouse runs 24/7, so electricity costs were astronomical. Solar Vista designed a system that handles our high energy demands perfectly. We're saving over $15K annually and our carbon footprint is significantly reduced.",
    savings: "$15,200/year",
  },
  {
    name: "Lisa Thompson",
    location: "Denver, CO",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: lisaImg,
    text: "I was nervous about the upfront cost, but the financing options made it affordable. The installation took just two days, and I'm already seeing the savings. My neighbors are all asking about going solar now!",
    savings: "$2,900/year",
  },
  {
    name: "James Anderson",
    location: "Nashville, TN",
    customerType: "Non-Profit",
    icon: Heart,
    rating: 5,
    image: jamesImg,
    text: "Our church wanted to be good stewards of both the environment and our congregation's donations. Solar Vista helped us install a system that powers our entire facility. The savings allow us to expand our outreach programs.",
    savings: "$7,800/year",
  },
  {
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: jenniferImg,
    text: "From quote to installation, everything was handled professionally. The monitoring app is fantastic and we love seeing our savings grow each month.",
    savings: "$2,800/year",
  },
  {
    name: "Maria Garcia",
    location: "Albuquerque, NM",
    customerType: "Commercial",
    icon: Building2,
    rating: 5,
    image: mariaImg,
    text: "Manufacturing requires massive amounts of power. Going solar was essential for controlling costs and meeting sustainability goals. The system handles our peak loads beautifully, and we're on track for a 5-year ROI.",
    savings: "$22,400/year",
  },
];

export const TestimonialsSection = () => {
  return (
    <>
      {/* Video Testimonials */}
      <VideoTestimonials />
      
      {/* Written Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied homeowners, businesses, and organizations who made the switch to solar energy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <testimonial.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">{testimonial.customerType}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-1">{testimonial.text}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-primary">
                    Annual Savings: {testimonial.savings}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

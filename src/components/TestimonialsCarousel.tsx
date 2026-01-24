import { useEffect, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Building2,
  Home,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
    savings: "₹2,400/year",
  },
  {
    name: "David Rodriguez",
    location: "Austin, TX",
    customerType: "Commercial",
    icon: Building2,
    rating: 5,
    image: davidImg,
    text: "Switching to solar was one of the best business decisions we've made. Our restaurant's energy costs have been cut in half, and our customers love that we're eco-friendly.",
    savings: "₹8,500/year",
  },
  {
    name: "Patricia Williams",
    location: "Portland, OR",
    customerType: "Non-Profit",
    icon: Heart,
    rating: 5,
    image: patriciaImg,
    text: "As a community center serving low-income families, reducing our operating costs was crucial. Solar Vista helped us secure grants and financing. Truly life-changing!",
    savings: "₹6,200/year",
  },
  {
    name: "Michael Chen",
    location: "San Diego, CA",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: michaelImg,
    text: "Best investment we've made for our home. The solar panels look great and the ROI is incredible. We're now producing more energy than we consume!",
    savings: "₹3,100/year",
  },
  {
    name: "Robert Kim",
    location: "Seattle, WA",
    customerType: "Commercial",
    icon: Building2,
    rating: 5,
    image: robertImg,
    text: "Our warehouse runs 24/7, so electricity costs were astronomical. Solar Vista designed a system that handles our high energy demands perfectly.",
    savings: "₹15,200/year",
  },
  {
    name: "Lisa Thompson",
    location: "Denver, CO",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: lisaImg,
    text: "I was nervous about the upfront cost, but the financing options made it affordable. The installation took just two days, and I'm already seeing the savings.",
    savings: "₹2,900/year",
  },
  {
    name: "James Anderson",
    location: "Nashville, TN",
    customerType: "Non-Profit",
    icon: Heart,
    rating: 5,
    image: jamesImg,
    text: "Our church wanted to be good stewards of both the environment and our congregation's donations. The savings allow us to expand our outreach programs.",
    savings: "₹7,800/year",
  },
  {
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    customerType: "Residential",
    icon: Home,
    rating: 5,
    image: jenniferImg,
    text: "From quote to installation, everything was handled professionally. The monitoring app is fantastic and we love seeing our savings grow each month.",
    savings: "₹2,800/year",
  },
  {
    name: "Maria Garcia",
    location: "Albuquerque, NM",
    customerType: "Commercial",
    icon: Building2,
    rating: 5,
    image: mariaImg,
    text: "Manufacturing requires massive amounts of power. Going solar was essential for controlling costs and meeting sustainability goals.",
    savings: "₹22,400/year",
  },
];

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied homeowners, businesses, and
            organizations who made the switch to solar energy.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex h-12 w-12 rounded-full bg-background shadow-lg"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex h-12 w-12 rounded-full bg-background shadow-lg"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0 md:first:pl-4"
                >
                  <Card className="p-6 h-full flex flex-col mx-2">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <testimonial.icon className="h-4 w-4 text-blue-400" />
                          <span className="text-xs font-medium text-blue-400  ">
                            {testimonial.customerType}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-4">
                      {testimonial.text}
                    </p>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-primary">
                        Annual Savings: {testimonial.savings}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button variant="outline" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

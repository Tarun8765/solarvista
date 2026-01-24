import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import installationImage from "@/assets/installation.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make clean, renewable energy accessible and affordable for every home and business.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction and build lasting relationships with every client.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in quality, service, and professionalism.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We stay at the forefront of solar technology to deliver the best solutions.",
    },
  ];

  const achievements = [
    "Industry-leading 25+ year warranties",
    "Certified and experienced professionals",
    "Premium quality equipment",
    "Flexible financing options",
    "Comprehensive post-installation support",
    "98% customer satisfaction rate",
    "Over 2500 successful installations",
    "50MW+ total capacity installed",
  ];

  const team = [
    {
      name: "Sonu Dau",
      role: "CEO & Founder",
      description:
        "20+ years in renewable energy with a passion for sustainable solutions.",
    },
    {
      name: "Arvind Denvar",
      role: "Director of Operations",
      description:
        "Expert in project management and customer service excellence.",
    },
    {
      name: "Tarun Ghawri",
      role: "Chief Technical Officer",
      description:
        "Leading solar engineer with expertise in system design and optimization.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hero-from to-hero-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About SolarVista</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Leading the solar revolution with innovative solutions for a
            sustainable future.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2008, SolarVista has been at the forefront of the
                solar energy revolution. What started as a small team of
                passionate renewable energy advocates has grown into one of
                California's most trusted solar installation companies.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the past 15+ years, we've helped thousands of homeowners
                and businesses make the switch to clean, affordable solar
                energy. Our commitment to quality, customer service, and
                innovation has made us a leader in the industry.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to push the boundaries of what's possible
                with solar technology, helping our clients save money while
                making a positive impact on the environment.
              </p>
            </div>
            <div>
              <img
                src={installationImage}
                alt="Our Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-primary/10 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Join Our Solar Family?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create a cleaner, more sustainable future.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;

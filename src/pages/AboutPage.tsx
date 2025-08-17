import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We're committed to delivering exceptional results and exceeding expectations in every placement."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients and candidates, acting as a true extension of your team."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision",
      description: "Our data-driven approach ensures we find candidates who are the perfect fit for your specific needs."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth",
      description: "We're passionate about helping both companies and individuals achieve their full potential."
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served", description: "From startups to Fortune 500" },
    { number: "10,000+", label: "Successful Placements", description: "Across all industries and levels" },
    { number: "95%", label: "Client Satisfaction", description: "Consistently high ratings" },
    { number: "15+", label: "Years Experience", description: "Deep industry expertise" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "15+ years in executive recruitment with a track record of building high-performing teams at leading companies.",
      specialties: ["Executive Search", "C-Level Placements", "Strategic Consulting"]
    },
    {
      name: "Michael Chen",
      role: "VP of Technology Recruitment",
      bio: "Former tech executive turned recruitment expert, specializing in engineering, product, and data science roles.",
      specialties: ["Software Engineering", "Product Management", "Data Science"]
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Client Success",
      bio: "Dedicated to ensuring our clients have exceptional experiences and achieve their hiring goals.",
      specialties: ["Client Relations", "Process Optimization", "Success Management"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-brand-gradient bg-clip-text text-transparent">HireHub</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're a team of recruitment experts passionate about connecting exceptional talent with innovative companies. 
            Our mission is to make hiring simple, efficient, and successful for everyone involved.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  HireHub was founded in 2009 with a simple belief: hiring great people shouldn't be complicated, 
                  time-consuming, or risky. We saw companies struggling with outdated recruitment processes and 
                  talented professionals missing out on opportunities that would advance their careers.
                </p>
                <p>
                  Today, we've helped over 500 companies find their perfect hires while supporting thousands of 
                  professionals in advancing their careers. Our success comes from combining deep industry expertise 
                  with modern technology and a genuine commitment to understanding what makes a great fit.
                </p>
                <p>
                  We're not just a recruitment agency - we're your strategic partner in building exceptional teams 
                  that drive business success.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-soft border-0 p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform the recruitment industry by making hiring simple, transparent, and successful 
                  while helping both companies and professionals achieve their goals.
                </p>
              </Card>
              <Card className="shadow-soft border-0 p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every company can quickly find the right talent and every professional 
                  can discover opportunities that accelerate their career growth.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven results that speak to our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-soft border-0 text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft border-0 p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-medium border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-brand-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {member.bio}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-center">Specialties:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="bg-brand-gradient-subtle text-brand-primary px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Companies Choose HireHub
            </h2>
            <p className="text-xl text-muted-foreground">
              What sets us apart in the recruitment industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Industry Expertise</h3>
                  <p className="text-muted-foreground">Deep knowledge across all major industries with specialized recruiters for each sector.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Proven Process</h3>
                  <p className="text-muted-foreground">Our refined 3-step process has consistently delivered results for over 15 years.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Technology-Enabled</h3>
                  <p className="text-muted-foreground">Advanced sourcing tools and AI-powered matching ensure we find the best candidates faster.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Success Guarantee</h3>
                  <p className="text-muted-foreground">Our placement guarantee ensures you're satisfied with every hire or we'll find a replacement.</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-medium border-0 p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription className="text-lg">
                  Join hundreds of companies who trust HireHub with their most important hiring decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-brand-primary" />
                    <span className="text-muted-foreground">Free consultation call</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-brand-primary" />
                    <span className="text-muted-foreground">Custom recruitment strategy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-brand-primary" />
                    <span className="text-muted-foreground">No upfront costs</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Start Your Search <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
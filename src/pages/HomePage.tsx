import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Target, Clock, Star, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HomePage = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Talent Matching",
      description: "Our AI-powered platform connects you with pre-vetted candidates that match your exact requirements."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Industry Expertise",
      description: "Specialized recruiters with deep knowledge in your industry ensure perfect cultural and skill fit."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Placement",
      description: "Average time-to-hire reduced by 60% with our streamlined recruitment process."
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served" },
    { number: "10k+", label: "Successful Placements" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "48hrs", label: "Average Response Time" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Engineering",
      company: "TechCorp",
      content: "HireHub helped us find exceptional talent in record time. Their process is seamless and results are outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "HR Director", 
      company: "Innovation Labs",
      content: "The quality of candidates we receive from HireHub is consistently excellent. They truly understand our needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-gradient-subtle pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Top Talent. 
                <span className="bg-brand-gradient bg-clip-text text-transparent"> Build Exceptional Teams.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with pre-vetted professionals who will drive your business forward. Our recruitment experts make hiring simple, fast, and successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/contact">Start Hiring Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8">
                  <Link to="/how-it-works-clients">See How It Works</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-primary" />
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-primary" />
                  <span>30-day guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-primary" />
                  <span>Expert support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional recruitment team" 
                className="rounded-2xl shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose HireHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven recruitment process combines industry expertise with cutting-edge technology to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Recruitment Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're hiring or looking for your next opportunity, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Employers */}
            <Card className="shadow-medium hover:shadow-large transition-all duration-300 border-0 p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl mb-2">For Employers</CardTitle>
                <CardDescription className="text-lg">
                  Find, vet, and hire top talent with our comprehensive recruitment service.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Access to our extensive talent network</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Pre-screened and vetted candidates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Dedicated recruitment specialist</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Fast turnaround and placement guarantee</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/how-it-works-clients">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Job Seekers */}
            <Card className="shadow-medium hover:shadow-large transition-all duration-300 border-0 p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl mb-2">For Job Seekers</CardTitle>
                <CardDescription className="text-lg">
                  Advance your career with access to exclusive opportunities and personalized support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Exclusive job opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Career coaching and guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Resume optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Interview preparation</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full mt-6">
                  <Link to="/how-it-works-candidates">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from companies we've helped.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft border-0 p-6">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of companies who trust HireHub to find their next great hire. 
            Get started today with no upfront costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link to="/contact">Start Hiring Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
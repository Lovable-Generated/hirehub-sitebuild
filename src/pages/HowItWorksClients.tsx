import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, UserCheck, Handshake, ArrowRight, CheckCircle, Clock, Users, Target } from "lucide-react";

const HowItWorksClients = () => {
  const steps = [
    {
      step: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Tell Us Your Needs",
      description: "Share your role requirements, company culture, and ideal candidate profile. Our team will understand exactly what you're looking for.",
      details: [
        "Detailed job specification review",
        "Company culture assessment", 
        "Salary and benefits discussion",
        "Timeline and urgency evaluation"
      ]
    },
    {
      step: "02", 
      icon: <UserCheck className="h-8 w-8" />,
      title: "We Find & Vet Candidates",
      description: "Our recruitment specialists tap into our extensive network and use advanced sourcing techniques to find the perfect matches.",
      details: [
        "Multi-channel candidate sourcing",
        "Comprehensive screening process",
        "Skills and culture fit assessment",
        "Reference and background checks"
      ]
    },
    {
      step: "03",
      icon: <Handshake className="h-8 w-8" />,
      title: "You Interview & Hire",
      description: "We present only the best candidates. You interview, we facilitate, and together we close the deal with your chosen candidate.",
      details: [
        "Curated candidate presentations",
        "Interview coordination and scheduling",
        "Offer negotiation support",
        "Onboarding assistance"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "60% faster hiring process compared to traditional recruitment methods."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Better Quality",
      description: "Pre-vetted candidates with proven track records and cultural fit."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Reduce Risk", 
      description: "30-day replacement guarantee ensures you get the right hire."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works for <span className="bg-brand-gradient bg-clip-text text-transparent">Employers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our streamlined recruitment process makes hiring top talent simple, fast, and risk-free. 
            Here's how we help you build exceptional teams.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and effective recruitment process.
            </p>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-20 top-24 w-0.5 h-16 bg-brand-primary/30"></div>
                )}
                
                <Card className="shadow-medium hover:shadow-large transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-2">
                        <div className="flex flex-col items-center md:items-start">
                          <div className="w-16 h-16 bg-brand-gradient rounded-xl flex items-center justify-center text-white mb-4">
                            {step.icon}
                          </div>
                          <span className="text-sm font-bold text-brand-primary bg-brand-gradient-subtle px-3 py-1 rounded-full">
                            Step {step.step}
                          </span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-6">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="md:col-span-4">
                        <Card className="bg-brand-gradient-subtle border-0">
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-foreground mb-3">
                              {index === 0 && "What We Need From You"}
                              {index === 1 && "What We Deliver"}
                              {index === 2 && "Final Outcome"}
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                              {index === 0 && (
                                <>
                                  <li>• Job description and requirements</li>
                                  <li>• Company information and culture</li>
                                  <li>• Budget and timeline expectations</li>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <li>• 3-5 qualified candidates</li>
                                  <li>• Detailed candidate profiles</li>
                                  <li>• Interview scheduling support</li>
                                </>
                              )}
                              {index === 2 && (
                                <>
                                  <li>• Successful placement</li>
                                  <li>• 30-day guarantee period</li>
                                  <li>• Ongoing support</li>
                                </>
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Process?
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven results that save you time, money, and hiring headaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-soft border-0 text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center text-white mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join hundreds of companies who have streamlined their hiring with HireHub. 
                  No upfront costs, no long-term contracts.
                </p>
                <ul className="space-y-2 mb-6">
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
                    <span className="text-muted-foreground">30-day placement guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <Button size="lg" asChild className="w-full md:w-auto">
                  <Link to="/contact">
                    Start Your Search <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Or <Link to="/pricing" className="text-brand-primary hover:underline">view our pricing</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksClients;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Essential",
      price: "15%",
      period: "of first year salary",
      description: "Perfect for startups and small businesses looking to make key hires.",
      features: [
        "Dedicated recruitment specialist",
        "Pre-screened candidate pool",
        "Basic candidate vetting",
        "Email support",
        "30-day replacement guarantee",
        "Standard placement timeline (2-4 weeks)"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional", 
      price: "20%",
      period: "of first year salary",
      description: "Ideal for growing companies that need comprehensive recruitment support.",
      features: [
        "Everything in Essential",
        "Priority candidate sourcing",
        "Advanced skill assessments",
        "Cultural fit evaluation",
        "Phone & email support",
        "60-day replacement guarantee",
        "Expedited placement (1-2 weeks)",
        "Interview coaching for candidates"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing available",
      description: "For large organizations with complex hiring needs and high-volume requirements.",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom recruitment strategies",
        "Executive search capabilities",
        "24/7 priority support",
        "90-day replacement guarantee",
        "Multiple concurrent searches",
        "Quarterly business reviews",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "When do I pay the recruitment fee?",
      answer: "You only pay when we successfully place a candidate and they complete their first day of work. No upfront fees or retainers required."
    },
    {
      question: "What if the candidate doesn't work out?",
      answer: "We offer replacement guarantees ranging from 30-90 days depending on your plan. If a candidate leaves or isn't a good fit during this period, we'll find a replacement at no additional cost."
    },
    {
      question: "How long does the recruitment process take?",
      answer: "Typical placement timelines range from 1-4 weeks depending on your plan and role complexity. Executive positions may take longer due to the specialized nature of the search."
    },
    {
      question: "Do you work with all industries?",
      answer: "Yes, we have specialized recruiters across all major industries including technology, healthcare, finance, manufacturing, and more."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent <span className="bg-brand-gradient bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Pay only when we successfully place a candidate. No upfront fees, no hidden costs, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-it-works-clients">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible pricing that scales with your hiring needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`shadow-medium hover:shadow-large transition-all duration-300 border-0 relative ${
                  plan.popular ? 'ring-2 ring-brand-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-gradient text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-brand-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-brand-gradient' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contact">
                      {plan.cta}
                      {plan.name !== 'Enterprise' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Our Pricing Makes Sense
            </h2>
            <p className="text-xl text-muted-foreground">
              Compare the true cost of hiring with traditional methods vs. HireHub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Traditional Hiring */}
            <Card className="shadow-soft border-0 p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-foreground">Traditional Hiring</CardTitle>
                <CardDescription className="text-lg">
                  The hidden costs of doing it yourself
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Job board postings</span>
                    <span className="font-medium">$500-2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Internal time (40+ hours)</span>
                    <span className="font-medium">$2,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Background checks</span>
                    <span className="font-medium">$100-300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bad hire cost (30% chance)</span>
                    <span className="font-medium">$15,000+</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span>Total potential cost</span>
                    <span className="text-destructive">$17,600+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HireHub */}
            <Card className="shadow-soft border-0 p-8 ring-2 ring-brand-primary">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-foreground">HireHub</CardTitle>
                <CardDescription className="text-lg">
                  Transparent, success-based pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Upfront costs</span>
                    <span className="font-medium text-brand-primary">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your time investment</span>
                    <span className="font-medium text-brand-primary">Minimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screening & vetting</span>
                    <span className="font-medium text-brand-primary">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Placement guarantee</span>
                    <span className="font-medium text-brand-primary">30-90 days</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span>Fee (only on success)</span>
                    <span className="text-brand-primary">15-20% of salary</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
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
            Ready to Start Hiring?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get a custom quote based on your specific hiring needs. 
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/how-it-works-clients">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Upload, Search, UserCheck, Briefcase, Rocket, Award, ArrowRight, CheckCircle } from "lucide-react";

const HowItWorksCandidates = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      number: "01",
      title: "Create Your Profile",
      description: "Upload your resume and complete your professional profile. Our AI-powered system will optimize it for maximum visibility."
    },
    {
      icon: <Search className="h-8 w-8" />,
      number: "02",
      title: "Get Matched",
      description: "Our advanced matching algorithm connects you with opportunities that align with your skills, experience, and career goals."
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      number: "03",
      title: "Interview Preparation",
      description: "Receive personalized coaching and preparation for your interviews, including company insights and role-specific guidance."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      number: "04",
      title: "Land Your Dream Job",
      description: "Get offer negotiation support and career guidance to ensure you secure the best possible position and compensation."
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Career Advancement",
      description: "Access exclusive opportunities at top companies that aren't advertised publicly."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Support",
      description: "Work with dedicated career advisors who understand your industry and goals."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Confidential Search",
      description: "Your job search remains completely confidential until you're ready to make a move."
    }
  ];

  const faqs = [
    {
      question: "Is the service free for candidates?",
      answer: "Yes! Our service is completely free for job seekers. Employers pay our fees."
    },
    {
      question: "How long does the process take?",
      answer: "Most candidates receive relevant opportunities within 48 hours of profile completion."
    },
    {
      question: "What types of roles do you recruit for?",
      answer: "We recruit for all levels and industries, from entry-level to executive positions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How It Works for 
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Candidates</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your career journey starts here. We connect talented professionals like you with companies that value your skills and experience.
            </p>
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/find-a-job">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures you find the right opportunity quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary to-transparent z-0" />
                )}
                <Card className="relative shadow-soft hover:shadow-medium transition-all duration-300 border-0 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-bold text-brand-primary/20">
                        {step.number}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose HireHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a job board - we're your career partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Benefits List */}
          <Card className="shadow-medium border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">What You Get</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Free professional resume review</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>LinkedIn profile optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Interview coaching and practice</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Salary negotiation guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Access to hidden job market</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized job recommendations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Direct referrals to hiring managers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Ongoing career support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
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
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of professionals who've found their dream jobs through HireHub. 
            Your next opportunity is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link to="/find-a-job">Browse Jobs Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksCandidates;
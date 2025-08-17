import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Users, Briefcase, CreditCard, Clock, Shield } from "lucide-react";

const FAQsPage = () => {
  const faqCategories = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "For Employers",
      questions: [
        {
          question: "How much does your recruitment service cost?",
          answer: "We operate on a success-based fee structure. You only pay when we successfully place a candidate. Our fees typically range from 15-25% of the candidate's first-year salary, depending on the role and service level. Contact us for a detailed quote."
        },
        {
          question: "What is your placement guarantee?",
          answer: "We offer a 30-day replacement guarantee. If a placed candidate leaves within 30 days, we'll find you a replacement at no additional cost. For executive positions, we extend this to 90 days."
        },
        {
          question: "How long does it take to fill a position?",
          answer: "On average, we fill positions within 2-4 weeks. However, this can vary based on the role's complexity, seniority level, and specific requirements. We'll provide a realistic timeline during our initial consultation."
        },
        {
          question: "What industries do you specialize in?",
          answer: "We have expertise across multiple industries including Technology, Healthcare, Finance, Manufacturing, Retail, and Professional Services. Our specialized recruiters understand the unique needs of each sector."
        },
        {
          question: "Can you handle high-volume hiring?",
          answer: "Absolutely! We have dedicated teams for volume hiring projects. Whether you need to hire 5 or 500 employees, we can scale our services to meet your needs with customized solutions."
        },
        {
          question: "Do you provide contract or temporary staffing?",
          answer: "Yes, we offer both permanent placement and contract/temporary staffing solutions. We can help with short-term projects, maternity covers, or temp-to-perm arrangements."
        }
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "For Job Seekers",
      questions: [
        {
          question: "Is your service free for candidates?",
          answer: "Yes, our service is completely free for job seekers. Employers pay our fees, so you can access all our career services at no cost to you."
        },
        {
          question: "How do I get started?",
          answer: "Simply upload your resume on our 'Find A Job' page or contact us directly. One of our career advisors will reach out within 24-48 hours to discuss your career goals and potential opportunities."
        },
        {
          question: "Will my job search remain confidential?",
          answer: "Absolutely. We maintain strict confidentiality throughout the process. We never share your information with employers without your explicit permission, and we can work around your current employment situation."
        },
        {
          question: "What types of positions do you recruit for?",
          answer: "We recruit for all levels, from entry-level to C-suite executives, across various industries. Our database includes permanent, contract, and temporary positions."
        },
        {
          question: "Do you offer career coaching?",
          answer: "Yes! We provide complimentary career coaching including resume optimization, interview preparation, and salary negotiation guidance to all our candidates."
        },
        {
          question: "How long will it take to find a job?",
          answer: "This varies based on your experience, flexibility, and market conditions. Most candidates receive relevant opportunities within 48 hours of profile completion. Active candidates typically secure positions within 2-6 weeks."
        }
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Process & Timeline",
      questions: [
        {
          question: "What is your recruitment process?",
          answer: "Our process includes: 1) Initial consultation to understand requirements, 2) Candidate sourcing and screening, 3) Shortlist presentation, 4) Interview coordination, 5) Reference checks, 6) Offer negotiation, and 7) Onboarding support."
        },
        {
          question: "How do you screen candidates?",
          answer: "We use a multi-step screening process including resume review, initial phone screening, skills assessment, behavioral interviews, reference checks, and background verification (where required)."
        },
        {
          question: "Can you work with our existing HR team?",
          answer: "Absolutely! We're happy to integrate with your existing HR processes and can adapt our approach to complement your internal recruitment efforts."
        },
        {
          question: "Do you handle international recruitment?",
          answer: "Yes, we have a global network and can help with international placements. We're familiar with visa requirements and relocation processes for various countries."
        }
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Pricing & Payment",
      questions: [
        {
          question: "Are there any upfront costs?",
          answer: "No, we don't charge any upfront fees for standard recruitment services. You only pay upon successful placement of a candidate."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, checks, and credit card payments. Payment terms are typically net 30 days from the candidate's start date."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we offer competitive rates for multiple hires and long-term partnerships. Contact us to discuss a customized pricing structure for your needs."
        },
        {
          question: "What's included in your fee?",
          answer: "Our fee covers the entire recruitment process including sourcing, screening, interviewing, reference checks, and our placement guarantee. There are no hidden costs."
        }
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      questions: [
        {
          question: "How do you protect candidate data?",
          answer: "We follow strict data protection protocols including encrypted storage, secure transmission, limited access controls, and compliance with GDPR and other relevant privacy regulations."
        },
        {
          question: "Do you conduct background checks?",
          answer: "Yes, we can conduct comprehensive background checks including criminal records, education verification, employment history, and credit checks (where legally permitted and relevant)."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed as a recruitment agency and carry professional liability insurance. We're also members of relevant professional recruitment associations."
        },
        {
          question: "How do you ensure compliance with employment laws?",
          answer: "Our team stays updated on all employment legislation. We ensure all our practices comply with equal opportunity laws, labor regulations, and industry-specific requirements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <HelpCircle className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked 
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our recruitment services, process, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => {
                  const element = document.getElementById(`category-${index}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category.icon}
                <span>{category.title}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={`category-${categoryIndex}`} className="mb-16">
              <Card className="shadow-soft border-0 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <a href="mailto:info@hirehub.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
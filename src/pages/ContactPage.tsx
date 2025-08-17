import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    urgency: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to discuss your hiring needs.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      role: "",
      urgency: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Find Your Next <span className="bg-brand-gradient bg-clip-text text-transparent">Great Hire</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to get started? Tell us about your hiring needs and we'll create a custom recruitment strategy for your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Start Your Search</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours with a custom recruitment plan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Acme Corporation"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Position You're Hiring For *</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        placeholder="e.g. Senior Software Engineer, Marketing Manager"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="urgency">How Soon Do You Need to Hire?</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (within 2 weeks)</SelectItem>
                            <SelectItem value="month">Within a month</SelectItem>
                            <SelectItem value="quarter">Within 3 months</SelectItem>
                            <SelectItem value="flexible">Flexible timeline</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Salary Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50k">$50k - $75k</SelectItem>
                            <SelectItem value="75k">$75k - $100k</SelectItem>
                            <SelectItem value="100k">$100k - $150k</SelectItem>
                            <SelectItem value="150k">$150k - $200k</SelectItem>
                            <SelectItem value="200k">$200k+</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us More About Your Needs</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Describe the role, required skills, company culture, or any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Prefer to talk directly? Reach out to us using any of these methods.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">hello@hirehub.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p className="text-muted-foreground">123 Business Plaza<br />Suite 500<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                      <p className="text-muted-foreground">Within 24 hours</p>
                      <p className="text-sm text-muted-foreground">Urgent requests: Within 4 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-brand-gradient-subtle">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">Quick Start</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Need to get started immediately? Book a 15-minute discovery call to discuss your hiring needs.
                  </p>
                  <Button variant="default" className="w-full">
                    Book Discovery Call
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">What Happens Next?</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• We'll review your requirements within 24 hours</li>
                    <li>• Schedule a discovery call to understand your needs</li>
                    <li>• Create a custom recruitment strategy</li>
                    <li>• Start sourcing candidates immediately</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
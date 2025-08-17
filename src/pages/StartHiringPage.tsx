import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, Users, Target, Clock, DollarSign, Briefcase, 
  CheckCircle, ArrowRight, Zap, Shield, Award, TrendingUp,
  Calendar, Phone, Mail, Globe
} from "lucide-react";

const StartHiringPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    roleTitle: "",
    roleType: "",
    roleLevel: "",
    roleLocation: "",
    salaryRange: "",
    roleDescription: "",
    requiredSkills: "",
    hiringTimeline: "",
    numberOfPositions: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours to discuss your hiring needs.",
    });
  };

  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail",
    "Education", "Consulting", "Marketing", "Real Estate", "Other"
  ];

  const companySizes = [
    "1-10 employees", "11-50 employees", "51-200 employees", 
    "201-500 employees", "501-1000 employees", "1000+ employees"
  ];

  const roleTypes = ["Full-time", "Part-time", "Contract", "Temporary", "Internship"];
  const roleLevels = ["Entry Level", "Mid Level", "Senior Level", "Manager", "Director", "Executive"];
  const timelines = ["Immediately", "Within 1 week", "Within 2 weeks", "Within 1 month", "1-3 months", "Flexible"];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Placement",
      description: "Average time-to-hire reduced by 60%"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "30-day replacement guarantee on all placements"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Pre-Vetted Talent",
      description: "All candidates thoroughly screened and verified"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Success-Based Pricing",
      description: "No upfront fees - pay only on successful hire"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Start Hiring 
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Top Talent</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tell us about your hiring needs and let our experts find the perfect candidates for your team.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center ${step >= 1 ? 'text-brand-primary' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-brand-gradient text-white' : 'bg-muted'}`}>
                  {step > 1 ? <CheckCircle className="h-6 w-6" /> : '1'}
                </div>
                <span className="ml-3 font-medium">Company Info</span>
              </div>
              <div className={`flex-1 h-1 mx-4 ${step > 1 ? 'bg-brand-primary' : 'bg-muted'}`} />
              <div className={`flex items-center ${step >= 2 ? 'text-brand-primary' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-brand-gradient text-white' : 'bg-muted'}`}>
                  {step > 2 ? <CheckCircle className="h-6 w-6" /> : '2'}
                </div>
                <span className="ml-3 font-medium">Role Details</span>
              </div>
              <div className={`flex-1 h-1 mx-4 ${step > 2 ? 'bg-brand-primary' : 'bg-muted'}`} />
              <div className={`flex items-center ${step >= 3 ? 'text-brand-primary' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-brand-gradient text-white' : 'bg-muted'}`}>
                  3
                </div>
                <span className="ml-3 font-medium">Requirements</span>
              </div>
            </div>
          </div>

          <Card className="shadow-large border-0">
            <CardHeader>
              <CardTitle className="text-2xl">
                {step === 1 && "Tell Us About Your Company"}
                {step === 2 && "Describe the Role"}
                {step === 3 && "Additional Requirements"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Help us understand your company and culture"}
                {step === 2 && "Provide details about the position you're looking to fill"}
                {step === 3 && "Any specific requirements or preferences"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Company Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        placeholder="Your Company Name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        placeholder="Your Full Name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        placeholder="https://yourcompany.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Company Size *</Label>
                    <RadioGroup 
                      value={formData.companySize} 
                      onValueChange={(value) => handleInputChange("companySize", value)}
                      className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                      {companySizes.map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <RadioGroupItem value={size} id={size} />
                          <Label htmlFor={size} className="font-normal cursor-pointer">
                            {size}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 2: Role Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="roleTitle">Job Title *</Label>
                    <Input
                      id="roleTitle"
                      value={formData.roleTitle}
                      onChange={(e) => handleInputChange("roleTitle", e.target.value)}
                      placeholder="e.g., Senior Software Engineer"
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="roleType">Employment Type *</Label>
                      <Select value={formData.roleType} onValueChange={(value) => handleInputChange("roleType", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {roleTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="roleLevel">Seniority Level *</Label>
                      <Select value={formData.roleLevel} onValueChange={(value) => handleInputChange("roleLevel", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          {roleLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="roleLocation">Location *</Label>
                      <Input
                        id="roleLocation"
                        value={formData.roleLocation}
                        onChange={(e) => handleInputChange("roleLocation", e.target.value)}
                        placeholder="e.g., San Francisco, CA or Remote"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="salaryRange">Salary Range</Label>
                      <Input
                        id="salaryRange"
                        value={formData.salaryRange}
                        onChange={(e) => handleInputChange("salaryRange", e.target.value)}
                        placeholder="e.g., $80,000 - $120,000"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="roleDescription">Role Description *</Label>
                    <Textarea
                      id="roleDescription"
                      value={formData.roleDescription}
                      onChange={(e) => handleInputChange("roleDescription", e.target.value)}
                      placeholder="Describe the role, responsibilities, and what you're looking for..."
                      className="mt-2 min-h-[150px]"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="requiredSkills">Required Skills & Qualifications *</Label>
                    <Textarea
                      id="requiredSkills"
                      value={formData.requiredSkills}
                      onChange={(e) => handleInputChange("requiredSkills", e.target.value)}
                      placeholder="List the must-have skills, experience, and qualifications..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hiringTimeline">Hiring Timeline *</Label>
                      <Select value={formData.hiringTimeline} onValueChange={(value) => handleInputChange("hiringTimeline", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="When do you need to hire?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="numberOfPositions">Number of Positions *</Label>
                      <Input
                        id="numberOfPositions"
                        type="number"
                        value={formData.numberOfPositions}
                        onChange={(e) => handleInputChange("numberOfPositions", e.target.value)}
                        placeholder="How many people to hire?"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      placeholder="Any other details about your hiring needs, company culture, or preferences..."
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Services Needed</Label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">Executive search</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">Volume hiring</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">Contract staffing</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">Background checks</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">Skills assessment</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button onClick={() => setStep(step + 1)} className="ml-auto">
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="ml-auto">
                    Submit Request
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact Alternative */}
          <Card className="shadow-soft border-0 mt-8">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer to speak with someone directly? Our recruitment experts are ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href="tel:+1-555-123-4567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (555) 123-4567
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:hiring@hirehub.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://calendly.com/hirehub" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of companies that rely on HireHub for their recruitment needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-20 bg-background rounded-lg flex items-center justify-center">
                <Globe className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartHiringPage;
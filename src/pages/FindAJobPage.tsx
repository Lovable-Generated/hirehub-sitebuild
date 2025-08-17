import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, DollarSign, Clock, Building2, TrendingUp, Heart, Filter, Upload } from "lucide-react";

const FindAJobPage = () => {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150,000 - $200,000",
      posted: "2 days ago",
      description: "We're looking for an experienced software engineer to join our growing team...",
      requirements: ["5+ years experience", "React/Node.js", "AWS"],
      featured: true
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Growth Dynamics",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      posted: "3 days ago",
      description: "Lead our marketing initiatives and drive brand growth...",
      requirements: ["3+ years marketing", "Digital marketing", "Team leadership"],
      featured: true
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio Pro",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120/hour",
      posted: "1 week ago",
      description: "Create beautiful and intuitive user experiences for our clients...",
      requirements: ["Portfolio required", "Figma expert", "User research"],
      featured: false
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Analytics Corp",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      posted: "4 days ago",
      description: "Transform data into actionable insights for business decisions...",
      requirements: ["SQL proficiency", "Python/R", "Visualization tools"],
      featured: false
    },
    {
      id: 5,
      title: "Sales Executive",
      company: "Enterprise Solutions",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$60,000 + Commission",
      posted: "1 day ago",
      description: "Drive revenue growth through strategic B2B sales...",
      requirements: ["2+ years B2B sales", "CRM experience", "Strong communication"],
      featured: false
    },
    {
      id: 6,
      title: "Project Manager",
      company: "Innovation Labs",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      posted: "5 days ago",
      description: "Lead cross-functional teams to deliver complex projects...",
      requirements: ["PMP certification", "Agile/Scrum", "5+ years experience"],
      featured: false
    }
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Marketing", "Sales", 
    "Engineering", "Education", "Manufacturing", "Retail", "Consulting"
  ];

  const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "Internship"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Executive"];
  const locations = ["Remote", "San Francisco", "New York", "Chicago", "Austin", "Boston", "Los Angeles"];

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="bg-brand-gradient-subtle pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find Your 
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Dream Job</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover opportunities that match your skills and career goals.
            </p>
          </div>

          {/* Search Form */}
          <Card className="shadow-large border-0 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Job title or keywords"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Location"
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="w-full">
                Search Jobs
              </Button>
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Remote", "Software Engineer", "Marketing", "Sales", "Design"].map((term) => (
                <Badge key={term} variant="secondary" className="cursor-pointer hover:bg-brand-primary hover:text-white transition-colors">
                  {term}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-soft border-0 sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Filters</span>
                    <Filter className="h-5 w-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Job Type */}
                  <div>
                    <Label className="mb-3 block">Job Type</Label>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <Label className="mb-3 block">Experience Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level.toLowerCase()}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <Label className="mb-3 block">Salary Range</Label>
                    <div className="space-y-2">
                      <Input type="number" placeholder="Min salary" />
                      <Input type="number" placeholder="Max salary" />
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <Label className="mb-3 block">Industry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry.toLowerCase()}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                  <Button variant="outline" className="w-full">Clear All</Button>
                </CardContent>
              </Card>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="all" className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All Jobs (127)</TabsTrigger>
                  <TabsTrigger value="featured">Featured (12)</TabsTrigger>
                  <TabsTrigger value="saved">Saved ({savedJobs.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {jobListings.map((job) => (
                    <Card key={job.id} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              {job.featured && (
                                <Badge className="bg-brand-gradient text-white">Featured</Badge>
                              )}
                              <Badge variant="outline">{job.type}</Badge>
                            </div>
                            <CardTitle className="text-xl hover:text-brand-primary transition-colors cursor-pointer">
                              {job.title}
                            </CardTitle>
                            <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                              <span className="flex items-center">
                                <Building2 className="h-4 w-4 mr-1" />
                                {job.company}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleSaveJob(job.id)}
                            className={savedJobs.includes(job.id) ? "text-red-500" : ""}
                          >
                            <Heart className={`h-5 w-5 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {job.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.requirements.map((req, index) => (
                            <Badge key={index} variant="secondary">
                              {req}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.posted}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline">View Details</Button>
                            <Button>Apply Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="featured" className="space-y-4">
                  {jobListings.filter(job => job.featured).map((job) => (
                    <Card key={job.id} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className="bg-brand-gradient text-white">Featured</Badge>
                              <Badge variant="outline">{job.type}</Badge>
                            </div>
                            <CardTitle className="text-xl hover:text-brand-primary transition-colors cursor-pointer">
                              {job.title}
                            </CardTitle>
                            <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                              <span className="flex items-center">
                                <Building2 className="h-4 w-4 mr-1" />
                                {job.company}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleSaveJob(job.id)}
                            className={savedJobs.includes(job.id) ? "text-red-500" : ""}
                          >
                            <Heart className={`h-5 w-5 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {job.description}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.posted}
                            </span>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="saved">
                  {savedJobs.length === 0 ? (
                    <Card className="shadow-soft border-0 p-12 text-center">
                      <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground mb-4">No saved jobs yet</p>
                      <p className="text-sm text-muted-foreground">Click the heart icon on jobs you're interested in to save them here.</p>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {jobListings.filter(job => savedJobs.includes(job.id)).map((job) => (
                        <Card key={job.id} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                          <CardHeader>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription>{job.company} • {job.location}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">{job.salary}</span>
                              <Button>Apply Now</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-brand-primary text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">4</Button>
                  <Button variant="outline">5</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Resume CTA */}
      <section className="py-20 bg-brand-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Upload className="h-12 w-12 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let Opportunities Find You
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Upload your resume and let our AI match you with perfect job opportunities. 
            Get noticed by top employers looking for talent like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Upload className="mr-2 h-5 w-5" />
              Upload Your Resume
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/how-it-works-candidates">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindAJobPage;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, Search, TrendingUp, Users, Briefcase, Award, BookOpen, Target } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Interview Questions Every Hiring Manager Should Ask",
      excerpt: "Discover the most effective interview questions that reveal a candidate's true potential and cultural fit for your organization.",
      author: "Sarah Mitchell",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Hiring Tips",
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "The Future of Remote Work: Trends for 2025",
      excerpt: "Explore how remote work is evolving and what it means for both employers and job seekers in the coming year.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Industry Trends",
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "How to Write a Resume That Gets Noticed",
      excerpt: "Expert tips on crafting a compelling resume that stands out in today's competitive job market.",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Career Advice",
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 4,
      title: "Building a Strong Employer Brand: A Complete Guide",
      excerpt: "Learn how to create and maintain an employer brand that attracts top talent to your organization.",
      author: "David Thompson",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Employer Branding",
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 5,
      title: "Salary Negotiation Strategies That Work",
      excerpt: "Master the art of salary negotiation with these proven techniques and insider tips.",
      author: "Lisa Wang",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "Career Advice",
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 6,
      title: "The Impact of AI on Recruitment: What You Need to Know",
      excerpt: "Understanding how artificial intelligence is transforming the recruitment landscape and what it means for your hiring process.",
      author: "James Foster",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Technology",
      featured: false,
      image: "/api/placeholder/800/400"
    }
  ];

  const categories = [
    { name: "All Posts", icon: <BookOpen className="h-4 w-4" />, count: 24 },
    { name: "Hiring Tips", icon: <Target className="h-4 w-4" />, count: 8 },
    { name: "Career Advice", icon: <TrendingUp className="h-4 w-4" />, count: 7 },
    { name: "Industry Trends", icon: <Users className="h-4 w-4" />, count: 5 },
    { name: "Employer Branding", icon: <Award className="h-4 w-4" />, count: 4 }
  ];

  const popularPosts = [
    "5 Red Flags to Watch for During Interviews",
    "How to Retain Top Talent in 2025",
    "The Complete Guide to Employee Onboarding",
    "Understanding Generation Z in the Workplace"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-gradient-subtle pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              HireHub 
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert insights, industry trends, and practical advice for employers and job seekers.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-6 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.filter(post => post.featured).map((post) => (
                    <Card key={post.id} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0 overflow-hidden">
                      <div className="aspect-video bg-muted" />
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl hover:text-brand-primary transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h2>
                <div className="space-y-6">
                  {blogPosts.filter(post => !post.featured).map((post) => (
                    <Card key={post.id} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 aspect-video bg-muted rounded-l-lg" />
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-brand-primary transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-brand-primary text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="shadow-soft border-0 mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between hover:bg-muted"
                      >
                        <span className="flex items-center space-x-2">
                          {category.icon}
                          <span>{category.name}</span>
                        </span>
                        <Badge variant="secondary" className="ml-2">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="shadow-soft border-0 mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularPosts.map((title, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-2xl font-bold text-brand-primary/20">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm text-foreground hover:text-brand-primary transition-colors cursor-pointer">
                          {title}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="shadow-medium border-0 bg-brand-gradient text-white">
                <CardHeader>
                  <CardTitle className="text-white">Stay Updated</CardTitle>
                  <CardDescription className="text-white/80">
                    Get the latest recruitment insights delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button variant="secondary" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let our experts help you build exceptional teams with proven recruitment strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/start-hiring">Start Hiring</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
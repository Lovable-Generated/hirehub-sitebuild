import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { 
      label: "How It Works",
      dropdown: [
        { href: "/how-it-works-clients", label: "For Employers" },
        { href: "/how-it-works-candidates", label: "For Job Seekers" }
      ]
    },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-foreground">HireHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-primary flex items-center",
                    "text-muted-foreground"
                  )}>
                    {item.label}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link to={subItem.href} className={cn(
                          isActive(subItem.href) ? "text-brand-primary" : ""
                        )}>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-primary",
                    isActive(item.href) ? "text-brand-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/find-a-job">Find a Job</Link>
              </Button>
              <Button variant="default" asChild>
                <Link to="/start-hiring">Start Hiring</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div key={index}>
                    <div className="px-3 py-2 text-base font-medium text-muted-foreground">
                      {item.label}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className={cn(
                          "block px-6 py-2 text-sm font-medium transition-colors hover:text-brand-primary",
                          isActive(subItem.href) ? "text-brand-primary" : "text-muted-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium transition-colors hover:text-brand-primary",
                      isActive(item.href) ? "text-brand-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/find-a-job" onClick={() => setIsOpen(false)}>
                    Find a Job
                  </Link>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/start-hiring" onClick={() => setIsOpen(false)}>
                    Start Hiring
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
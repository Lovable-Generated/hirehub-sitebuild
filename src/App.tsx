import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowItWorksClients from "./pages/HowItWorksClients";
import HowItWorksCandidates from "./pages/HowItWorksCandidates";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FAQsPage from "./pages/FAQsPage";
import BlogPage from "./pages/BlogPage";
import FindAJobPage from "./pages/FindAJobPage";
import StartHiringPage from "./pages/StartHiringPage";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-it-works-clients" element={<HowItWorksClients />} />
              <Route path="/how-it-works-candidates" element={<HowItWorksCandidates />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/find-a-job" element={<FindAJobPage />} />
              <Route path="/start-hiring" element={<StartHiringPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EOR from "./pages/EOR.tsx";
import Recruitment from "./pages/Recruitment.tsx";
import AIInnovation from "./pages/AIInnovation.tsx";
import About from "./pages/About.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import HROutsourcing from "./pages/HROutsourcing.tsx";
import FAQ from "./pages/FAQ.tsx";
import Insights from "./pages/Insights.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/payroll-anywhere" element={<EOR />} />
          <Route path="/executive-search" element={<Recruitment />} />
          <Route path="/workforce-operations" element={<HROutsourcing />} />
          <Route path="/ai-innovation" element={<AIInnovation />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy path redirects (old slugs → new service slugs) */}
          <Route path="/eor" element={<Navigate to="/payroll-anywhere" replace />} />
          <Route path="/recruitment" element={<Navigate to="/executive-search" replace />} />
          <Route path="/hr-outsourcing" element={<Navigate to="/workforce-operations" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

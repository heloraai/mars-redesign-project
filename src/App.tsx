import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ComingSoon } from "@/components/site/ComingSoon";
import Index from "./pages/Index.tsx";
import EOR from "./pages/EOR.tsx";
import Recruitment from "./pages/Recruitment.tsx";
import AIInnovation from "./pages/AIInnovation.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const LocaleGate = () => {
  const { i18n } = useTranslation();
  if (i18n.resolvedLanguage && i18n.resolvedLanguage !== "en") {
    return <ComingSoon />;
  }
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/eor" element={<EOR />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/ai-innovation" element={<AIInnovation />} />
      <Route path="/about" element={<About />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <LocaleGate />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

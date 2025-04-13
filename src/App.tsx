
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Opportunities from "./pages/Opportunities";
import Skills from "./pages/Skills";
import { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  // Add framer-motion dependency
  useEffect(() => {
    // This helps with potential Three.js WebGL rendering issues
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.log("WebGL context lost. Attempting to restore...");
      // Potentially add code here to handle context loss gracefully
    };

    document.addEventListener("webglcontextlost", handleContextLost);
    return () => {
      document.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="riseroute-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/skills" element={<Skills />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

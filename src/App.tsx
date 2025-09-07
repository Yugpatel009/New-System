import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen"; // 👈 import your splash

const queryClient = new QueryClient();

const App = () => {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {!isSplashComplete ? (
          // 👇 Show splash until it finishes
          <SplashScreen onComplete={() => setIsSplashComplete(true)} />
        ) : (
          // 👇 Then show actual app with navigation + routes
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

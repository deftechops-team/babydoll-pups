import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Parents from "./pages/Parents";
import Puppies from "./pages/Puppies";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import AboutTheBreed from "./pages/AboutTheBreed";
import HowItWorks from "./pages/HowItWorks";
import PuppyGoHome from "./pages/PuppyGoHome";
import PuppyApplication from "./pages/PuppyApplication";
import WaitlistAgreement from "./pages/WaitlistAgreement";
import PurchaseAgreement from "./pages/PurchaseAgreement";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-the-breed" element={<AboutTheBreed />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/puppy-go-home" element={<PuppyGoHome />} />
          <Route path="/puppy-application" element={<PuppyApplication />} />
          <Route path="/waitlist-agreement" element={<WaitlistAgreement />} />
          <Route path="/purchase-agreement" element={<PurchaseAgreement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

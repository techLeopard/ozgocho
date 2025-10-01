import { Hero } from "./components/Hero";
import { AboutOptimized } from "./components/AboutOptimized";
import { Services } from "./components/Services";
import { ContactOptimized } from "./components/ContactOptimized";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutOptimized />
      <Services />
      <ContactOptimized />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
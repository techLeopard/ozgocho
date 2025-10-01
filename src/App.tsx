import { HeroOptimized } from "./components/HeroOptimized";
import { AboutOptimized } from "./components/AboutOptimized";
import { Services } from "./components/Services";
import { ContactOptimized } from "./components/ContactOptimized";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroOptimized />
      <AboutOptimized />
      <Services />
      <ContactOptimized />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
import { HeroOptimized } from "./components/HeroOptimized";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroOptimized />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
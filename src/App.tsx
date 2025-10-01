import { HeroOptimized } from "./components/HeroOptimized";
import { AboutOptimized } from "./components/AboutOptimized";
import { ServicesOptimized } from "./components/ServicesOptimized";
import { ContactOptimized } from "./components/ContactOptimized";
import { FooterOptimized } from "./components/FooterOptimized";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroOptimized />
      <AboutOptimized />
      <ServicesOptimized />
      <ContactOptimized />
      <FooterOptimized />
      <Toaster position="top-center" />
    </div>
  );
}
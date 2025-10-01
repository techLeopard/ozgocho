import logoImage from "figma:asset/e5f2a17d0091c6dd4861a6040cdd81486ebd8ff7.png";
import { Button } from "./ui/button";
import { Phone, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function HeroOptimized() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-orange-500/10 to-yellow-500/10 py-24 md:py-32">
      {/* Simplified floating shapes - only on desktop */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 blur-3xl gpu-accelerated"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-20 blur-3xl gpu-accelerated"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
            style={{ opacity: 0 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full blur-2xl opacity-30" />
              <img
                src={logoImage}
                alt="Өзгөчө логотип"
                className="w-52 h-52 mx-auto relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full border border-teal-200/50 shadow-lg"
            style={{ opacity: 0 }}
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm text-teal-700">Особое место для особенных детей</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-6 text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-orange-600"
            style={{ opacity: 0 }}
          >
            Коррекционный сад
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">«Өзгөчө»</span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-8 max-w-3xl mx-auto"
            style={{ opacity: 0 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Специализированное учреждение для детей с особыми потребностями. 
              Индивидуальный подход, квалифицированные специалисты и современные методики развития.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ opacity: 0 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-xl shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Записаться на консультацию
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать больше
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
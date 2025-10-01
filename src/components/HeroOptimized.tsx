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
          {/* Simplified logo animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <img
                src={logoImage}
                alt="Өзгөчө логотип"
                className="w-32 h-32 md:w-48 md:h-48 mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full blur-2xl opacity-20 animate-pulse" />
            </div>
          </motion.div>

          {/* Simplified text animations */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight"
          >
            Коррекционный сад
            <span className="block bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
              «Өзгөчө»
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed"
          >
            Особое место для особенных детей. Профессиональная помощь и забота в развитии каждого ребенка с индивидуальным подходом и современными методиками.
          </motion.p>

          {/* Simplified button animations */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none sm:w-auto"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 gpu-accelerated"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="mr-2 h-5 w-5" />
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group bg-white/80 border-2 border-teal-300 text-teal-700 hover:bg-white hover:border-teal-400 px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 gpu-accelerated"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Наши программы
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>

          {/* Simplified stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl"
          >
            {[
              { number: "5+", label: "Лет опыта" },
              { number: "200+", label: "Детей помогли" },
              { number: "15+", label: "Специалистов" },
              { number: "100%", label: "Индивидуальный подход" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import logoImage from "figma:asset/e5f2a17d0091c6dd4861a6040cdd81486ebd8ff7.png";
import { Button } from "./ui/button";
import { Phone, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-orange-500/10 to-yellow-500/10 py-24 md:py-32">
      {/* Floating animated shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full blur-2xl opacity-30 animate-pulse" />
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-teal-200/50 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm text-teal-700">Особое место для особенных детей</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-orange-600"
          >
            Коррекционный сад
            <br />
            <span className="text-orange-500">«Өзгөчө»</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed"
          >
            Профессиональная помощь и забота в развитии каждого ребенка
            с индивидуальным подходом и современными методиками
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-7 shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              className="group bg-white/80 backdrop-blur-sm border-2 border-teal-300 text-teal-700 hover:bg-white hover:border-teal-400 px-8 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Наши программы
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
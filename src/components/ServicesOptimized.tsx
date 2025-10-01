import { 
  Utensils, 
  Video, 
  Palette, 
  Music, 
  User, 
  MessageCircle, 
  Brain, 
  Hand,
  Activity,
  Puzzle,
  Heart,
  GraduationCap
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: 1,
    title: "Чистое 4-разовое питание",
    description: "Сбалансированное и здоровое меню для детей",
    icon: Utensils,
    gradient: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-500/20",
    span: "md:col-span-1"
  },
  {
    id: 2,
    title: "Онлайн видео наблюдение",
    description: "Родители могут наблюдать за своими детьми в любое время",
    icon: Video,
    gradient: "from-teal-400 to-teal-600",
    shadow: "shadow-teal-500/20",
    span: "md:col-span-2"
  },
  {
    id: 3,
    title: "Арт-терапия",
    description: "Творческое развитие и самовыражение через искусство",
    icon: Palette,
    gradient: "from-yellow-400 to-orange-500",
    shadow: "shadow-yellow-500/20",
    span: "md:col-span-1"
  },
  {
    id: 4,
    title: "Музыкальная терапия",
    description: "Развитие через музыку и ритм",
    icon: Music,
    gradient: "from-green-400 to-teal-500",
    shadow: "shadow-green-500/20",
    span: "md:col-span-1"
  },
  {
    id: 5,
    title: "Навыки самообслуживания",
    description: "Формирование независимости и уверенности",
    icon: User,
    gradient: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/20",
    span: "md:col-span-1"
  },
  {
    id: 6,
    title: "Индивидуальные занятия у логопеда-дефектолога",
    description: "Коррекция речевых нарушений",
    icon: MessageCircle,
    gradient: "from-teal-400 to-cyan-600",
    shadow: "shadow-teal-500/20",
    span: "md:col-span-2"
  },
  {
    id: 7,
    title: "Индивидуальные занятия у логопеда-дефектолога-нейропсихолога",
    description: "Комплексная работа с речью и когнитивным развитием",
    icon: Brain,
    gradient: "from-yellow-400 to-yellow-600",
    shadow: "shadow-yellow-500/20",
    span: "md:col-span-2"
  },
  {
    id: 8,
    title: "Лого массаж",
    description: "Специализированный массаж для улучшения речи",
    icon: Hand,
    gradient: "from-green-400 to-emerald-600",
    shadow: "shadow-green-500/20",
    span: "md:col-span-1"
  },
  {
    id: 9,
    title: "Сенсорная интеграция / СМК / АФК",
    description: "Развитие сенсорных систем и координации",
    icon: Activity,
    gradient: "from-orange-400 to-pink-500",
    shadow: "shadow-orange-500/20",
    span: "md:col-span-1"
  },
  {
    id: 10,
    title: "АБА-терапия",
    description: "Прикладной анализ поведения",
    icon: Puzzle,
    gradient: "from-teal-400 to-blue-600",
    shadow: "shadow-teal-500/20",
    span: "md:col-span-1"
  },
  {
    id: 11,
    title: "Юмейхо-терапия",
    description: "Японская методика коррекции опорно-двигательного аппарата",
    icon: Heart,
    gradient: "from-pink-400 to-red-500",
    shadow: "shadow-pink-500/20",
    span: "md:col-span-1"
  },
  {
    id: 12,
    title: "Подготовка к школе",
    description: "Комплексная подготовка к новому этапу",
    icon: GraduationCap,
    gradient: "from-green-400 to-teal-600",
    shadow: "shadow-green-500/20",
    span: "md:col-span-1"
  }
];

export function ServicesOptimized() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-white to-teal-50/30 relative overflow-hidden">
      {/* Simplified decorative elements - only on desktop */}
      <div className="hidden md:block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-100 to-orange-100 rounded-full">
            <span className="text-sm text-teal-700">12 программ развития</span>
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
            Наши программы и услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к развитию каждого ребенка с использованием 
            современных методик и индивидуальных программ
          </p>
        </motion.div>
        
        {/* Optimized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: Math.min(index * 0.05, 0.3),
                  ease: [0.25, 0.1, 0.25, 1] // Custom easing for smoother start
                }}
                className={service.span}
              >
                <div 
                  className={`group relative h-full p-6 md:p-8 rounded-3xl bg-white/70 border border-gray-200/50 hover:border-transparent overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-xl ${service.shadow}`}
                >
                  {/* Simplified gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />
                  
                  {/* Icon with gradient background */}
                  <div className="relative mb-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-200 group-hover:scale-105`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="mb-3 text-gray-800 group-hover:text-teal-700 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Simplified decorative corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

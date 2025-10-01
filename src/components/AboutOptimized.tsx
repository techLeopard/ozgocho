import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";
import image3 from "../assets/3.jpg";

export function AboutOptimized() {
  const { ref: textRef, isInView: textInView } = useInView();
  const { ref: imagesRef, isInView: imagesInView } = useInView();

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-white via-teal-50/50 to-orange-50/50 relative overflow-hidden">
      {/* Simplified decorative element - removed motion.div */}
      <div className="hidden md:block">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-300/30 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={textRef}
            className={`fade-in-up ${textInView ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 rounded-full border border-teal-200/50 shadow-lg">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-teal-700">О нашем саде</span>
            </div>
            
            <h2 className="mb-6 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
              Создаем условия для развития особенных детей
            </h2>
            
            <p className="mb-8 text-xl text-gray-700 leading-relaxed">
              Коррекционный сад «өзгөчө» — это специализированное учреждение, 
              где каждый ребенок получает индивидуальный подход и профессиональную 
              поддержку квалифицированных специалистов.
            </p>
            
            <div className="space-y-5">
              {[
                {
                  title: "Индивидуальный подход",
                  desc: "Программа развития для каждого ребенка учитывает его особенности и потребности",
                  gradient: "from-teal-500 to-teal-600"
                },
                {
                  title: "Квалифицированные специалисты",
                  desc: "Команда опытных логопедов, дефектологов, нейропсихологов и терапевтов",
                  gradient: "from-orange-500 to-orange-600"
                },
                {
                  title: "Современные методики",
                  desc: "Используем проверенные и эффективные программы коррекции и развития",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Комфортная среда",
                  desc: "Безопасное и уютное пространство для обучения и развития детей",
                  gradient: "from-green-500 to-teal-500"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-200"
                >
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1 group-hover:text-teal-700 transition-colors duration-200">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div
            ref={imagesRef}
            className={`relative fade-in-up stagger-2 ${imagesInView ? 'visible' : ''}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1612539466809-8be5e4e01256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc1OTIyMDQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Занятия с детьми"
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1720729706612-040e610e611c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHRoZXJhcHklMjBpbmRvb3J8ZW58MXx8fHwxNzU5MjkwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Игровая комната"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src={image3}
                    alt="Дети в детском саду"
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

export function ContactOptimized() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-teal-50/30 via-white to-orange-50/30 relative overflow-hidden">
      {/* Simplified decorative element - only on desktop */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            <span className="text-sm text-teal-700">Свяжитесь с нами</span>
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
            Начните путь развития
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Запишитесь на консультацию или задайте интересующие вопросы
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex"
          >
            <div className="h-full w-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-2xl shadow-teal-500/30 relative overflow-hidden">
              {/* Simplified decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="mb-8 text-white">
                  Наши контакты
                </h3>
                
                <div className="space-y-6">
                  {/* Simplified contact items - no individual animations */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white mb-2">Телефон</h4>
                      <p className="text-teal-100">+996 XXX XXX XXX</p>
                      <p className="text-teal-100">+996 XXX XXX XXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white mb-2">Email</h4>
                      <p className="text-teal-100">info@ozgocho.kg</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white mb-2">Адрес</h4>
                      <p className="text-teal-100">г. Бишкек, ул. Примерная, 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white mb-2">Режим работы</h4>
                      <p className="text-teal-100">Пн-Пт: 8:00 - 18:00</p>
                      <p className="text-teal-100">Сб-Вс: Выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className=""
          >
            <div className="h-full p-8 md:p-10 rounded-3xl bg-white/80 border border-gray-200/50 shadow-2xl flex flex-col">
              <h3 className="mb-8 text-gray-800">
                Запись на консультацию
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div>
                  <label htmlFor="name" className="block mb-3 text-gray-700">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-gray-300 bg-white/50 focus:bg-white transition-colors h-12 rounded-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-3 text-gray-700">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+996 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-gray-300 bg-white/50 focus:bg-white transition-colors h-12 rounded-xl"
                  />
                </div>
                
                <div className="flex-grow flex flex-col">
                  <label htmlFor="message" className="block mb-3 text-gray-700">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем ребенке и что вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-gray-300 bg-white/50 focus:bg-white transition-colors flex-grow rounded-xl min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="group w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-7 rounded-xl shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  Отправить заявку
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  Мы свяжемся с вами в течение 24 часов
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

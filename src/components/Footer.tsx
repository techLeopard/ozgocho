import logoImage from "figma:asset/e5f2a17d0091c6dd4861a6040cdd81486ebd8ff7.png";
import { Facebook, Instagram, Mail, Phone, Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full blur-xl opacity-50" />
                <img 
                  src={logoImage} 
                  alt="Өзгөчө" 
                  className="w-16 h-16 relative z-10"
                />
              </div>
              <h3 className="text-white">өзгөчө</h3>
            </div>
            <p className="text-teal-100 leading-relaxed">
              Коррекционный сад для особенных детей. 
              Профессиональная помощь в развитии каждого ребенка.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 text-white">Контакты</h4>
            <div className="space-y-4 text-teal-100">
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+996 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@ozgocho.kg</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-6 text-white">Социальные сети</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-teal-100">
            <p>© 2025 Коррекционный сад «өзгөчө». Все права защищены.</p>
            <div className="flex items-center gap-1">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              <span>для особенных детей</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
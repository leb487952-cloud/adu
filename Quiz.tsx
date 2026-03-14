import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Book, GraduationCap, Microscope, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent -z-10" />
        
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium"
          >
            <GraduationCap size={16} />
            <span>Đại học Đồng Tháp - Khoa Kỹ thuật & Công nghệ</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
            Nền tảng học tập <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 italic">
              Kỹ thuật Môi trường
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Hệ thống tài liệu, sơ đồ và trắc nghiệm chuyên sâu giúp sinh viên nắm vững kiến thức về xử lý nước thải, khí thải và chất thải rắn.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/theory"
              className="px-8 py-3 bg-purple-900 hover:bg-purple-800 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-purple-900/20"
            >
              Bắt đầu học ngay <ArrowRight size={18} />
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 rounded-lg font-medium transition-all"
            >
              Luyện tập Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Xử lý Nước thải',
            icon: Microscope,
            desc: 'Tìm hiểu về Aerotank, UASB, Bể lắng và các quy trình sinh học hiếu khí/kỵ khí.',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
          },
          {
            title: 'Chất thải rắn',
            icon: Book,
            desc: 'Quy trình phân loại, ủ compost và các phương pháp chôn lấp hợp vệ sinh.',
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10'
          },
          {
            title: 'Xử lý Khí thải',
            icon: Wind,
            desc: 'Cơ chế hoạt động của Cyclone, tháp hấp thụ và các hệ thống lọc bụi túi vải.',
            color: 'text-orange-400',
            bg: 'bg-orange-400/10'
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-purple-900/20 hover:border-purple-500/30 transition-all"
          >
            <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-100 mb-3">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Quote/Academic Section */}
      <section className="py-16 px-8 rounded-3xl bg-gradient-to-br from-purple-950/40 to-slate-950 border border-purple-900/30 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-2xl font-serif italic text-slate-300 leading-relaxed">
            "Môi trường là nơi chúng ta gặp nhau; là nơi có lợi ích chung; đó là một điều mà tất cả chúng ta đều chia sẻ."
          </p>
          <footer className="mt-6 text-purple-400 font-medium">— Lady Bird Johnson</footer>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;

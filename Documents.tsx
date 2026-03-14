import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Layout, ClipboardList, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      title: 'Ôn tập lý thuyết',
      desc: 'Hệ thống kiến thức xử lý nước thải, rác thải và khí thải.',
      icon: BookOpen,
      path: '/knowledge',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sơ đồ hệ thống',
      desc: 'Quy trình công nghệ trực quan, dễ hiểu.',
      icon: Layout,
      path: '/diagram',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quiz trắc nghiệm',
      desc: 'Kiểm tra kiến thức nhanh với bộ câu hỏi sát đề thi.',
      icon: ClipboardList,
      path: '/quiz',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tài liệu học tập',
      desc: 'Tổng hợp slide, giáo trình và tài liệu tham khảo.',
      icon: FileText,
      path: '/documents',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bg-dark/60 z-10" />
          <img
            src="https://picsum.photos/seed/environment/1920/1080?blur=2"
            alt="Environment Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Hệ thống ôn tập <span className="text-highlight-purple">xử lý chất thải</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-10 font-medium">
              Dành cho sinh viên ngành Khoa học Môi trường – Đại học Đồng Tháp (ĐHĐT)
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/knowledge"
                className="px-8 py-4 purple-gradient rounded-2xl font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Bắt đầu ôn tập
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Làm Quiz ngay
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-dark to-transparent" />
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Bạn muốn học gì hôm nay?</h2>
          <div className="w-20 h-1.5 purple-gradient mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={feature.path}
                  className="glass-card p-8 block h-full hover:border-highlight-purple/50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quote/Motivation */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 purple-gradient opacity-10 blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-2xl italic font-serif text-text-muted mb-6">
              "Bảo vệ môi trường không chỉ là trách nhiệm, mà là sứ mệnh của mỗi kỹ sư môi trường tương lai."
            </h2>
            <p className="font-bold text-highlight-purple">— Khoa Khoa học Tự nhiên, ĐHĐT</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

const Diagram = () => {
  const steps = [
    { id: 1, name: 'Nước thải đầu vào', desc: 'Nguồn nước từ khu dân cư/công nghiệp' },
    { id: 2, name: 'Song chắn rác', desc: 'Loại bỏ rác thô kích thước lớn' },
    { id: 3, name: 'Bể lắng cát', desc: 'Tách cát và các hạt vô cơ nặng' },
    { id: 4, name: 'Bể lắng đợt 1', desc: 'Lắng các hạt hữu cơ lơ lửng' },
    { id: 5, name: 'Bể Aerotank', desc: 'Xử lý sinh học hiếu khí' },
    { id: 6, name: 'Bể lắng đợt 2', desc: 'Tách bùn hoạt tính ra khỏi nước' },
    { id: 7, name: 'Khử trùng', desc: 'Tiêu diệt vi khuẩn bằng Clo/UV' },
    { id: 8, name: 'Xả ra môi trường', desc: 'Nước đạt chuẩn xả thải' },
  ];

  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-serif font-bold text-slate-100">Sơ đồ hệ thống xử lý</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Quy trình công nghệ xử lý nước thải đô thị điển hình sử dụng phương pháp bùn hoạt tính hiếu khí.</p>
      </header>

      <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/30 border border-purple-900/20 overflow-x-auto">
        <div className="min-w-[800px] flex flex-col items-center gap-12 py-8">
          {/* SVG Diagram */}
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="w-32 h-32 rounded-2xl bg-slate-950 border-2 border-purple-900/50 flex items-center justify-center p-4 text-center group-hover:border-purple-400 transition-all cursor-help shadow-lg shadow-purple-900/10">
                    <span className="text-xs font-bold text-slate-200 leading-tight">{step.name}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 p-2 bg-slate-800 rounded-lg text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 border border-slate-700 shadow-xl">
                    {step.desc}
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ delay: index * 0.1 + 0.05 }}
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 relative"
                  >
                    <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Info size={20} />
            <h3 className="font-serif font-bold text-lg">Chú thích quy trình</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><span className="text-slate-200 font-medium">Xử lý cơ học:</span> Bước 1 đến 4 (Loại bỏ tạp chất vật lý).</li>
            <li><span className="text-slate-200 font-medium">Xử lý sinh học:</span> Bước 5 (Phân hủy chất hữu cơ hòa tan).</li>
            <li><span className="text-slate-200 font-medium">Xử lý hoàn thiện:</span> Bước 6 đến 8 (Làm trong và diệt khuẩn).</li>
          </ul>
        </div>
        
        <div className="p-8 rounded-2xl bg-purple-900/10 border border-purple-900/20 space-y-4">
          <h3 className="font-serif font-bold text-lg text-slate-200">Lưu ý vận hành</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Hiệu quả của hệ thống phụ thuộc lớn vào việc kiểm soát nồng độ oxy hòa tan (DO) trong bể Aerotank và tỷ lệ hoàn lưu bùn từ bể lắng đợt 2.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Diagram;

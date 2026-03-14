import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Info } from 'lucide-react';

export default function SystemDiagram() {
  const [activeStep, setActiveStep] = React.useState<number | null>(null);

  const wastewaterSteps = [
    { id: 1, name: 'Nước thải đầu vào', desc: 'Nước thải từ các nguồn sinh hoạt, công nghiệp tập trung về hố thu.' },
    { id: 2, name: 'Song chắn rác', desc: 'Loại bỏ rác thô, túi nilon, vật thể lớn để bảo vệ bơm.' },
    { id: 3, name: 'Bể lắng cát', desc: 'Tách cát, sỏi và các hạt vô cơ nặng để tránh mài mòn thiết bị.' },
    { id: 4, name: 'Bể lắng 1', desc: 'Lắng các hạt cặn lơ lửng hữu cơ, giảm tải trọng cho bể sinh học.' },
    { id: 5, name: 'Bể Aerotank', desc: 'Xử lý sinh học hiếu khí, vi sinh vật phân hủy chất hữu cơ.' },
    { id: 6, name: 'Bể lắng 2', desc: 'Tách bùn hoạt tính ra khỏi nước sạch sau khi xử lý sinh học.' },
    { id: 7, name: 'Bể khử trùng', desc: 'Tiêu diệt vi khuẩn gây bệnh bằng Clo hoặc tia UV.' },
    { id: 8, name: 'Nguồn tiếp nhận', desc: 'Nước đạt chuẩn xả ra sông, hồ hoặc tái sử dụng.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Sơ đồ hệ thống xử lý</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Quy trình công nghệ xử lý nước thải điển hình. Di chuột (hover) vào từng bước để xem giải thích chi tiết.
        </p>
      </div>

      <div className="glass-card p-8 md:p-16 relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-12">
          {wastewaterSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <motion.div
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative w-40 h-24 flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-help ${
                  activeStep === step.id
                    ? 'bg-primary-purple border-highlight-purple shadow-lg shadow-primary-purple/40 scale-110'
                    : 'bg-white/5 border-white/10 text-text-muted'
                }`}
              >
                <span className={`font-bold text-sm ${activeStep === step.id ? 'text-white' : ''}`}>
                  {step.name}
                </span>
                
                {/* Tooltip */}
                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-bg-dark border border-highlight-purple p-4 rounded-xl z-50 shadow-2xl"
                  >
                    <div className="flex items-center gap-2 mb-2 text-highlight-purple">
                      <Info className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">Chi tiết bước {step.id}</span>
                    </div>
                    <p className="text-xs text-text-bright leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {idx < wastewaterSteps.length - 1 && (
                <div className="hidden lg:flex items-center">
                  <ArrowRight className="text-white/20 w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-6 border-l-4 border-l-blue-500">
          <h3 className="font-bold mb-2">Xử lý cơ học</h3>
          <p className="text-sm text-text-muted">Bao gồm song chắn rác, lắng cát, lắng 1. Loại bỏ các tạp chất không tan.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-purple-500">
          <h3 className="font-bold mb-2">Xử lý sinh học</h3>
          <p className="text-sm text-text-muted">Trọng tâm là bể Aerotank và lắng 2. Sử dụng vi sinh vật để làm sạch nước.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-emerald-500">
          <h3 className="font-bold mb-2">Xử lý hoàn thiện</h3>
          <p className="text-sm text-text-muted">Khử trùng và xả thải. Đảm bảo nước đầu ra an toàn cho môi trường.</p>
        </div>
      </div>
    </div>
  );
}

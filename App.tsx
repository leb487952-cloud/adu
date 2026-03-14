import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Share2 } from 'lucide-react';
import { theoryData } from '../data/content';

const TheoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const topic = theoryData
    .flatMap(c => c.topics)
    .find(t => t.id === id);

  if (!topic) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-serif text-slate-100">Không tìm thấy nội dung</h2>
        <button onClick={() => navigate('/theory')} className="mt-4 text-purple-400 hover:underline">Quay lại danh sách</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Link to="/theory" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors">
        <ArrowLeft size={18} /> Quay lại danh sách
      </Link>

      <header className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">{topic.title}</h1>
        <p className="text-xl text-slate-400 italic leading-relaxed">{topic.description}</p>
      </header>

      <div className="aspect-video rounded-2xl overflow-hidden border border-purple-900/30">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-100">Chi tiết nội dung</h2>
            <div className="prose prose-invert max-w-none text-slate-300 leading-loose">
              <p>{topic.content}</p>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-purple-900/10 border border-purple-900/30 space-y-6">
            <h3 className="text-xl font-serif font-bold text-purple-300">Điểm cần ghi nhớ</h3>
            <ul className="space-y-4">
              {topic.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start text-slate-300">
                  <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-4">
            <h4 className="font-serif font-bold text-slate-200">Chia sẻ bài học</h4>
            <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm flex items-center justify-center gap-2 transition-all">
              <Share2 size={16} /> Sao chép liên kết
            </button>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-purple-900/30 space-y-4">
            <h4 className="font-serif font-bold text-slate-200">Bạn đã sẵn sàng?</h4>
            <p className="text-xs text-slate-400">Kiểm tra kiến thức của bạn về chủ đề này ngay.</p>
            <Link to="/quiz" className="block w-full py-2 bg-purple-900 text-center rounded-lg text-sm font-medium hover:bg-purple-800 transition-all">
              Làm Quiz ngay
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TheoryDetail;

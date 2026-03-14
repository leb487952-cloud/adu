import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, BookOpen, ChevronRight } from 'lucide-react';
import { theoryData } from '../data/content';
import { Link } from 'react-router-dom';

const Theory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = theoryData.map(category => ({
    ...category,
    topics: category.topics.filter(topic => 
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.topics.length > 0);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-serif font-bold text-slate-100">Lý thuyết chuyên đề</h1>
        <p className="text-slate-400">Khám phá các kiến thức nền tảng về kỹ thuật môi trường.</p>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Tìm kiếm bài học..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-purple-900/30 rounded-lg focus:outline-none focus:border-purple-500/50 text-slate-200 transition-all"
          />
        </div>
      </header>

      <div className="space-y-16">
        {filteredData.map((category) => (
          <section key={category.id} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-purple-900/30" />
              <h2 className="text-xl font-serif font-bold text-purple-400 uppercase tracking-widest">{category.category}</h2>
              <div className="h-px flex-1 bg-purple-900/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.topics.map((topic) => (
                <Link
                  key={topic.id}
                  to={`/theory/${topic.id}`}
                  className="group block p-6 rounded-xl bg-slate-900/40 border border-purple-900/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300">
                      <BookOpen size={20} />
                    </div>
                    <ChevronRight size={18} className="text-slate-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">{topic.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{topic.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
        
        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 italic">Không tìm thấy bài học nào phù hợp với từ khóa "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Theory;

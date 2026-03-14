import React from 'react';
import Sidebar from '../components/Sidebar';
import LessonCard from '../components/LessonCard';
import { lessons } from '../data/lessons';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

export default function Knowledge() {
  const [activeCategoryId, setActiveCategoryId] = React.useState(lessons[0].id);
  const [searchQuery, setSearchQuery] = React.useState('');

  const activeCategory = lessons.find(l => l.id === activeCategoryId);
  
  const filteredTopics = activeCategory?.topics.filter(topic => 
    topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:sticky md:top-24 h-fit">
          <Sidebar 
            categories={lessons.map(l => ({ id: l.id, title: l.title, category: l.category }))}
            activeCategory={activeCategoryId}
            onSelect={setActiveCategoryId}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{activeCategory?.title}</h1>
              <p className="text-text-muted">Hệ thống kiến thức chuyên đề {activeCategory?.title.toLowerCase()}</p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Tìm kiếm bài học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-primary-purple transition-colors w-full md:w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTopics && filteredTopics.length > 0 ? (
                filteredTopics.map((topic) => (
                  <LessonCard key={topic.id} topic={topic} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center text-text-muted"
                >
                  Không tìm thấy bài học nào phù hợp.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

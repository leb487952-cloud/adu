import React from 'react';
import { motion } from 'motion/react';
import { Info, Lightbulb } from 'lucide-react';

interface LessonCardProps {
  topic: {
    id: string;
    name: string;
    description: string;
    content: string;
    memo: string;
    image: string;
  };
  key?: string;
}

export default function LessonCard({ topic }: LessonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={topic.image}
          alt={topic.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{topic.name}</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-text-muted text-sm leading-relaxed">
          {topic.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="mt-1">
              <Info className="w-4 h-4 text-highlight-purple" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-highlight-purple uppercase mb-1">Chi tiết</h4>
              <p className="text-sm text-text-bright/90">{topic.content}</p>
            </div>
          </div>
          
          <div className="bg-primary-purple/10 p-3 rounded-lg flex gap-3 border border-primary-purple/20">
            <div className="mt-1">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-yellow-400 uppercase mb-1">Ghi nhớ nhanh</h4>
              <p className="text-sm italic text-text-bright/80">{topic.memo}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

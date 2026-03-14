import React from 'react';
import { Droplets, Trash2, Wind, ChevronRight } from 'lucide-react';

interface SidebarProps {
  categories: { id: string; title: string; category: string }[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ categories, activeCategory, onSelect }: SidebarProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Wastewater': return <Droplets className="w-5 h-5" />;
      case 'Solid Waste': return <Trash2 className="w-5 h-5" />;
      case 'Air Emission': return <Wind className="w-5 h-5" />;
      default: return <ChevronRight className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full md:w-64 space-y-2">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider px-4 mb-4">
        Chuyên đề ôn tập
      </h3>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
            activeCategory === cat.id
              ? 'bg-primary-purple text-white shadow-lg shadow-primary-purple/20'
              : 'text-text-muted hover:bg-white/5 hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            {getIcon(cat.category)}
            <span className="font-medium text-sm">{cat.title}</span>
          </div>
          <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === cat.id ? 'rotate-90' : ''}`} />
        </button>
      ))}
    </div>
  );
}

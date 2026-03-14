import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, LayoutDashboard, Library, PenTool, Search } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Trang chủ', path: '/', icon: Home },
    { name: 'Lý thuyết', path: '/theory', icon: BookOpen },
    { name: 'Sơ đồ', path: '/diagram', icon: LayoutDashboard },
    { name: 'Quiz', path: '/quiz', icon: PenTool },
    { name: 'Thư viện', path: '/library', icon: Library },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center border border-purple-500/50">
              <span className="text-white font-serif font-bold text-xl">DT</span>
            </div>
            <span className="hidden md:block text-slate-100 font-serif font-semibold tracking-tight">
              Kỹ thuật Môi trường DThU
            </span>
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2",
                  location.pathname === item.path
                    ? "bg-purple-900/40 text-purple-300 border border-purple-500/30"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                )}
              >
                <item.icon size={18} />
                <span className="hidden lg:inline">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

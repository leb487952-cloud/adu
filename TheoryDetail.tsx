import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-900 selection:text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;

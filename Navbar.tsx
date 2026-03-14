import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-purple-900/30 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-slate-100 font-serif font-bold text-lg mb-4">Kỹ thuật Môi trường DThU</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hệ thống học tập và ôn tập trực tuyến dành riêng cho sinh viên ngành Kỹ thuật Môi trường, Đại học Đồng Tháp.
            </p>
          </div>
          <div>
            <h4 className="text-slate-100 font-serif font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/" className="hover:text-purple-400">Trang chủ</a></li>
              <li><a href="/theory" className="hover:text-purple-400">Lý thuyết chuyên đề</a></li>
              <li><a href="/diagram" className="hover:text-purple-400">Sơ đồ hệ thống</a></li>
              <li><a href="/quiz" className="hover:text-purple-400">Trắc nghiệm ôn tập</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-100 font-serif font-semibold mb-4">Thông tin</h4>
            <p className="text-sm text-slate-400">
              Địa chỉ: 783 Phạm Hữu Lầu, Phường 6, TP. Cao Lãnh, Đồng Tháp.<br />
              Email: moitruong@dthu.edu.vn
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Đại học Đồng Tháp. Được thiết kế cho mục đích học tập.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

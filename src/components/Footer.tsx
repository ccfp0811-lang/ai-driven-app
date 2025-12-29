import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal-gray">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="text-lg font-bold mb-4">
          <span className="text-neon-orange">キャリ</span><span className="text-neon-cyan">クラ</span>
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">会社概要</a>
          <a href="#" className="hover:text-white transition-colors">利用規約</a>
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Career-Kura Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-['Pacifico'] text-2xl text-[#B98D70]">
          Leef Design
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('vision')}
            className="text-gray-700 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
          >
            VISION
          </button>
          <button 
            onClick={() => scrollToSection('profile')}
            className="text-gray-700 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
          >
            PROFILE
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
          >
            SERVICES
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#B98D70] text-white px-6 py-2 rounded-full hover:bg-[#A67C5F] transition-all cursor-pointer whitespace-nowrap font-['Zen_Old_Mincho']"
          >
            お問い合わせ
          </button>
        </nav>

        <button 
          className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-line text-xl"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('vision')}
              className="block text-gray-700 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
            >
              VISION
            </button>
            <button 
              onClick={() => scrollToSection('profile')}
              className="block text-gray-700 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
            >
              PROFILE
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block text-gray-700 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#B98D70] text-white px-6 py-2 rounded-full hover:bg-[#A67C5F] transition-all cursor-pointer whitespace-nowrap font-['Zen_Old_Mincho']"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

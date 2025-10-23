
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FEFAEA] text-[#333333] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="font-['Pacifico'] text-2xl text-[#B98D70] mb-4">
              Leef Design
            </div>
            <p className="text-[#333333] leading-relaxed font-['Zen_Old_Mincho']">
              AIを「ビジネスの相棒」に変える、個人事業主のための伴走型サポート
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Zen_Old_Mincho']">
              ナビゲーション
            </h3>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('vision')}
                className="block text-[#333333] hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
              >
                VISION
              </button>
              <button 
                onClick={() => scrollToSection('profile')}
                className="block text-[#333333] hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
              >
                PROFILE
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-[#333333] hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-[#333333] hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho']"
              >
                CONTACT
              </button>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-[#333333]/20 mt-8 pt-8 text-center">
          <p className="text-[#333333]/70 font-['Zen_Old_Mincho']">
            © 2025 Leef Design. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#333333]/70 hover:text-[#B98D70] transition-colors cursor-pointer font-['Zen_Old_Mincho'] text-sm mt-2 inline-block"
          >
            Made with Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}


'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "AIの位置づけが理解でき、様々なITツールをChatGPTで活用できるようになりました。直美さんが紹介してくれたので安心して挑戦できました。",
      author: "40代 看護士"
    },
    {
      text: "説明が分かりやすく、不安が安心に変わりました。これからのワクワクが止まりません。",
      author: "40代 セラピスト"
    },
    {
      text: "バックオフィス業務や顧客クロージングの現場でも活用し、全体的に業務の質を向上することができました。",
      author: "30代 個人起業家"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="min-h-screen bg-fixed bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/30ebc711f438aee195400cfb1734b7c1/0f82dd82ac5af230daff61de6defc093.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-stone-100/60 to-amber-100/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#B98D70] mb-4 font-['Zen_Old_Mincho']">
              講座生の声
            </h2>
            <p className="text-lg text-gray-700 font-['Zen_Old_Mincho']">
              実際に講座を受講された方々の体験談をご紹介します
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white border-2 border-[#B98D70] rounded-2xl p-12 md:p-16 min-h-[400px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-['Zen_Old_Mincho'] mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-lg text-[#B98D70] font-bold font-['Zen_Old_Mincho']">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#B98D70] text-white rounded-full flex items-center justify-center hover:bg-[#A67C5A] transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#B98D70] text-white rounded-full flex items-center justify-center hover:bg-[#A67C5A] transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentTestimonial ? 'bg-[#B98D70]' : 'bg-[#B98D70]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

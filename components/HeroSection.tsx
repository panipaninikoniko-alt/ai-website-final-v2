
export default function HeroSection() {
  return (
    <section 
      className="min-h-screen bg-fixed bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/30ebc711f438aee195400cfb1734b7c1/5c9b6a74e50ec084d6b55fbae0c52c47.jpeg')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/40 to-stone-200/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Zen_Old_Mincho']" style={{ lineHeight: '1.4' }}>
            AIで、自分らしく働く<br />女性をもっと自由に。
          </h1>
          <p className="text-xl md:text-2xl text-[#333333] mb-8 leading-relaxed font-['Zen_Old_Mincho']">
            個人向けAIコンシェルジュ & ビジネスサポート
          </p>
          <p className="text-lg text-[#333333] max-w-2xl leading-relaxed font-['Zen_Old_Mincho']">
            AIを「ビジネスの相棒」に変える、個人事業主のための伴走型サポート。
            難しい技術用語は使わず、PCが苦手な方でも安心してAIの力を活用できるようサポートします。
          </p>
        </div>
      </div>
    </section>
  );
}

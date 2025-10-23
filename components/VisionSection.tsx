
export default function VisionSection() {
  return (
    <section 
      id="vision"
      className="min-h-screen bg-fixed bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/30ebc711f438aee195400cfb1734b7c1/90aa5f2864ccc8439134c11f5ea23bae.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-stone-100/60 to-amber-100/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-[#B98D70] mb-12 font-['Zen_Old_Mincho']">
            VISION
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-8">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-['Zen_Old_Mincho']">
                家族や時間の制約があっても、<br />
                やりたいことを諦めず、自分らしい働き方を叶える女性が増える未来<br />
                AIを通して、自立と幸せが循環する社会の実現を目指します
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

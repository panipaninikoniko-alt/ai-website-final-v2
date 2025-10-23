
export default function ServicesSection() {
  return (
    <section 
      id="services"
      className="min-h-screen bg-fixed bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/30ebc711f438aee195400cfb1734b7c1/0f82dd82ac5af230daff61de6defc093.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-stone-100/60 to-amber-100/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#B98D70] mb-4 font-['Zen_Old_Mincho']">
              サービス内容
            </h2>
            <p className="text-lg text-gray-700 font-['Zen_Old_Mincho']">
              あなたの人生を豊かにする学びの場を提供いたします
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div className="bg-white border-2 border-[#B98D70] rounded-2xl p-8">
              <div className="mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=One-on-one%20online%20consultation%20scene%20with%20warm%20lighting%2C%20showing%20mentor%20and%20student%20interaction%20through%20video%20call%2C%20representing%20personalized%20AI%20learning%20support%2C%20comfortable%20home%20office%20setting%2C%20warm%20beige%20and%20orange%20color%20scheme%2C%20professional%20yet%20approachable%20atmosphere&width=600&height=400&seq=service1-consultation&orientation=landscape"
                  alt="AIオンラインスクール"
                  className="w-full h-48 object-cover object-top rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#B98D70] mb-4 font-['Zen_Old_Mincho'] text-center">
                AIオンラインスクール<br />Re LifeDesign Lab
              </h3>
              <p className="text-[#333333] leading-relaxed font-['Zen_Old_Mincho']">
                ChatGPT・Claude活用など、あなたのビジネスに合わせたマンツーマンレッスン。
                「ログイン方法が分からない」そんなPC操作が苦手な方でも、基本から丁寧にサポートします。
              </p>
            </div>
            
            <div className="bg-white border-2 border-[#B98D70] rounded-2xl p-8">
              <div className="mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Before%20and%20after%20comparison%20showing%20business%20efficiency%20improvement%2C%20workflow%20automation%20visualization%20with%20AI%20prompts%2C%20clean%20infographic%20style%20with%20warm%20beige%20background%2C%20showing%20time%20savings%20and%20productivity%20gains%2C%20modern%20business%20process%20optimization%20illustration&width=600&height=400&seq=service2-automation&orientation=landscape"
                  alt="カスタムAI作成代行"
                  className="w-full h-48 object-cover object-top rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#B98D70] mb-4 font-['Zen_Old_Mincho'] text-center">
                カスタムAI作成代行
              </h3>
              <p className="text-[#333333] leading-relaxed font-['Zen_Old_Mincho']">
                あなたの業務を自動化・効率化する「魔法のAIアプリ」を作成します。
                AIに任せて、あなたは本当にやりたい仕事に集中してください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

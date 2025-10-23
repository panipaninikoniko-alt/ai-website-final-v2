
export default function ProfileSection() {
  return (
    <section 
      id="profile"
      className="min-h-screen bg-white relative flex items-center py-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#B98D70] mb-4 font-['Zen_Old_Mincho']">
              PROFILE
            </h2>
            <p className="text-lg text-gray-700 font-['Zen_Old_Mincho']">
              プロフィール
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#B98D70]/50">
                <img 
                  src="https://static.readdy.ai/image/30ebc711f438aee195400cfb1734b7c1/479d0e626e3f25810c6d4d5d5165cb65.png"
                  alt="なおみ プロフィール写真"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            <div className="bg-white border-2 border-[#B98D70] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#B98D70] mb-4 font-['Zen_Old_Mincho']">なおみ</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Zen_Old_Mincho']">
                個人向けAIコンシェルジュ<br />
                元々「強みもスキルもない」と思っていたシングルマザー。
                AIで人生が変わった経験から、「難しいことを、簡単に」をモットーに、PCが苦手な方でも安心して学べるサポートを提供しています。
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#B98D70] mb-2 font-['Zen_Old_Mincho']">資格・経歴</h4>
                  <ul className="text-gray-700 space-y-1 font-['Zen_Old_Mincho']">
                    <li>• AIプロンプトエンジニア</li>
                    <li>• WEBデザイナー兼スライドデザイナー</li>
                    <li>• AI講師</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#B98D70] mb-2 font-['Zen_Old_Mincho']">実績</h4>
                  <ul className="text-gray-700 space-y-1 font-['Zen_Old_Mincho']">
                    <li>• AI学習歴4,000時間突破</li>
                    <li>• 初心者向けAI勉強会 延べ100名以上参加</li>
                    <li>• クライアントのAI導入サポートにより、対応時間を平均50%削減</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function StorySection() {
  return (
    <section 
      className="min-h-screen bg-cover bg-center relative flex items-center font-['Zen_Old_Mincho']"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/30ebc711f438aee195400cfb1734b7c1/c82e270de91d937726cd48f756ae4863.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-orange-900/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            STORY
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-xl md:text-2xl text-[#B98D70] leading-relaxed">
              「私にはスキルも何もない」——ずっとそう思ってた
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              AIと出会い、人生は180度変わりました。<br />
              最終学歴は中学、シングルマザー、お金がなく水道も止まるほど貧乏生活。こんな私でも、自分がどんどん拡張していくのが目に見えて、学歴・職務経験など関係ない！AIを活用することで、それ以上のスキルを身につけることができる！<br />
              この経験から、「今のままから抜け出せない」と悩む人にとって、何もないからこそAIは、とてつもない力になると確信し、活動を始めました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

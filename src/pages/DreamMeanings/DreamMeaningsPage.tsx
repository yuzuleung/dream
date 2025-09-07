import { motion } from 'framer-motion';
import styles from './DreamMeaningsPage.module.scss';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';

export function DreamMeaningsPage() {
  const dreamSymbols = [
    {
      symbol: '水',
      meaning: '感情、潜在意識、浄化',
      details: '心の状態や感情の流れを表す。清い水は心の平安を、濁った水は混乱を示すことがあります。',
      icon: '/images/夢の意味/water.png',
    },
    {
      symbol: '飛ぶ',
      meaning: '自由、解放、向上心',
      details: '飛ぶ夢は自由への憧れや現実からの解放願望を表します。高く飛ぶほど向上心の強さを示します。',
      icon: '/images/夢の意味/fly.png',
    },
    {
      symbol: '動物',
      meaning: '本能、直感、自然な欲求',
      details: '動物は私たちの本能的な部分や抑制された欲求を表現します。動物の種類により意味が変わります。',
      icon: '/images/夢の意味/animal.png',
    },
    {
      symbol: '家',
      meaning: 'アイデンティティ、安全、家族',
      details: '家は自己のアイデンティティや安全な場所を表します。家の状態は心の状態を反映します。',
      icon: '/images/夢の意味/home.png',
    },
    {
      symbol: '落ちる',
      meaning: '不安、失敗への恐怖',
      details: '落ちる夢は、現実での不安や失敗への恐怖を表します。特に、何かを失うことへの恐れが強く表れることがあります。',
      icon: '/images/夢の意味/fall.png',
    },
    {
      symbol: '死',
      meaning: '変化、終了、新しい始まり',
      details: '死の夢は、人生の転換期や成長、何かの終わりや変化を象徴しています。新しい始まりのためには、古いものを手放す必要があることを示します。',
      icon: '/images/夢の意味/dead.png',
    },
  ];

  const emotionalMeanings = [
    {
      emotion: '喜び',
      meaning: '現実での満足感や成功への予感',
      advice: '現在の状況に感謝し、ポジティブな気持ちを大切にしましょう。',
    },
    {
      emotion: '恐怖',
      meaning: '未知への不安や変化への抵抗',
      advice: '恐怖の原因を特定し、小さな一歩から始めてみましょう。',
    },
    {
      emotion: '悲しみ',
      meaning: '失ったものへの想いや現実への不満',
      advice: '悲しみを受け入れ、癒しの時間を大切にしてください。',
    },
    {
      emotion: '怒り',
      meaning: '抑圧された感情や不公平感',
      advice: '怒りの根本原因を見つけ、建設的な方法で表現しましょう。',
    },
  ];

  return (
    <div className="page-root">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>夢の意味</h1>
          <p className={styles.lead}>夢は無意識からのメッセージです。象徴的な意味を理解することで、自分自身の深層心理を知ることができます。</p>
        </div>

        <Tabs defaultValue="symbols" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="symbols">シンボル</TabsTrigger>
            <TabsTrigger value="emotions">夢のカテゴリ</TabsTrigger>
          </TabsList>

          <TabsContent value="symbols" className="mt-8">
            <div className={styles.gridSymbols}>
              {dreamSymbols.map((symbol, index) => (
                <motion.div
                  key={symbol.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full ${styles.cardFixed}`}>
                    <div className={styles.cardInner}>
                      <div className={styles.iconCol}>
                        <img src={symbol.icon} alt={`${symbol.symbol} アイコン`} className={styles.iconImg} />
                      </div>
                      <div className={styles.textCol}>
                        <CardHeader>
                          <CardTitle className="text-2xl text-white/90">{symbol.symbol}</CardTitle>
                          <p className="text-white/70">{symbol.meaning}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/60 text-sm leading-relaxed">{symbol.details}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emotions" className="mt-8">
            <div className={styles.gridEmotions}>
              {emotionalMeanings.map((item, index) => (
                <motion.div
                  key={item.emotion}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white/90">{item.emotion}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{item.meaning}</p>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-white/70 text-sm"><span className="text-white/90">アドバイス:</span> {item.advice}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

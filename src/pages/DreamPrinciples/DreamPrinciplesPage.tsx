import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import styles from './DreamPrinciplesPage.module.scss';

export function DreamPrinciplesPage() {
  const principles = [
    {
      title: 'REM睡眠',
      description: '夢の多くは急速眼球運動（REM）睡眠中に発生します',
      details: 'REM睡眠は睡眠サイクルの約25%を占め、この時期に最も鮮明で複雑な夢を見ます。脳の活動が覚醒時に近い状態になります。',
      icon: '/images/夢の原理/sleep.png',
    },
    {
      title: '記憶の整理',
      description: '夢は記憶の整理と定着に重要な役割を果たします',
      details: '日中に蓄積された情報や経験を整理し、重要な記憶を長期記憶に移す処理が行われます。学習効果の向上にも寄与します。',
      icon: '/images/夢の原理/memory.png',
    },
    {
      title: '感情の処理',
      description: '夢は感情的な体験を処理し、心理的なバランスを保ちます',
      details: 'ストレスやトラウマ、日常の感情的な出来事を処理し、精神的な健康を維持する重要な機能があります。',
      icon: '/images/夢の原理/emotion.png',
    },
    {
      title: '創造性の源',
      description: '夢は創造的思考や問題解決に貢献します',
      details: '論理的な制約から解放された状態で、新しいアイデアや解決策が生まれることがあります。多くの発明や芸術作品が夢から生まれています。',
      icon: '/images/夢の原理/creativity.png',
    },
  ];

  const sleepStages = [
    { stage: 'ステージ1', description: '浅い眠り、入眠期', duration: '5-10分' },
    { stage: 'ステージ2', description: '軽い眠り、睡眠紡錘波', duration: '10-25分' },
    { stage: 'ステージ3', description: '深い眠り、徐波睡眠', duration: '20-40分' },
    { stage: 'ステージ4', description: 'REM睡眠、夢を見る段階', duration: '10-60分' },
  ];

  return (
    <div className="page-root">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>夢の原理</h1>
          <p className={styles.lead}>
            科学的な視点から夢がどのように生まれ、なぜ私たちにとって重要なのかを探りましょう。
          </p>
        </div>

        <div className={styles.principlesGrid}>
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={styles.cardFull}>
                <div className={styles.cardInner}>
                  <div className={styles.iconCol}>
                    <img src={principle.icon} alt={`${principle.title} アイコン`} className={styles.iconImg} />
                  </div>
                  <div className={styles.textCol}>
                    <CardHeader>
                      <CardTitle className={styles.cardTitle}>{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={styles.desc}>{principle.description}</p>
                      <p className={styles.details}>{principle.details}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className={styles.stagesWrapper}>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl text-white/90 text-center">睡眠サイクル</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={styles.stagesGrid}>
                {sleepStages.map((stage, index) => (
                  <motion.div
                    key={stage.stage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className={styles.stage}
                  >
                    <h3 className={styles.stageTitle}>{stage.stage}</h3>
                    <p className={styles.stageDesc}>{stage.description}</p>
                    <p className={styles.stageDur}>{stage.duration}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

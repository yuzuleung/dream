import { motion } from 'framer-motion';
import styles from './DreamTypesPage.module.scss';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';

export function DreamTypesPage() {
  const dreamTypes = [
    {
      title: '明晰夢',
      description: '夢の中で夢だと気づき、意識的にコントロールできる夢',
  icon: '明晰夢.png',
      details: '明晰夢では、夢見者が夢の中で自分が夢を見ていることを自覚し、場合によっては夢の内容をコントロールすることができます。',
    },
    {
      title: '予知夢',
      description: '未来の出来事を暗示するような内容の夢',
  icon: '予知夢.png',
      details: '科学的には説明が困難ですが、多くの人が未来の出来事と一致する夢を経験したと報告しています。',
    },
    {
      title: '悪夢',
      description: '恐怖や不安を感じる内容の夢',
  icon: '悪夢.png',
      details: 'ストレスや心理的な負担が原因となることが多く、心の状態を反映している場合があります。',
    },
    {
      title: '反復夢',
      description: '同じ内容や似た内容が繰り返し現れる夢',
  icon: '反復夢.png',
      details: '未解決の問題や心配事が潜在意識に残っている時によく見られます。',
    },
    {
      title: '象徴夢',
      description: '現実の感情や状況を象徴的に表現した夢',
  icon: '象徴夢.png',
      details: '直接的ではなく、比喩や象徴を通じて心の状態を表現する夢です。',
    },
    {
      title: '癒しの夢',
      description: '心を癒し、リラックスさせる穏やかな夢',
  icon: '癒しの夢.png',
      details: '美しい自然や大切な人との再会など、心を癒す内容の夢です。',
    },
  ];

  return (
    <div className="page-root">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>夢の種類</h1>
          <p className={styles.lead}>
            私たちが見る夢には様々な種類があります。それぞれが異なる意味と特徴を持っています。
          </p>
        </div>

        <div className={styles.grid}>
          {dreamTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={styles.cardWrapper}>
                <div className={styles.cardInner}>
                  <div className={styles.iconCol}>
                    <img className={styles.iconImg} src={`/images/${encodeURIComponent('夢の種類')}/${encodeURIComponent(type.icon)}`} alt={type.title} />
                  </div>
                  <div className={styles.textCol}>
                    <CardHeader className={styles.cardHeaderCenter}>
                      <CardTitle className={styles.cardTitle}>{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={styles.desc}>{type.description}</p>
                      <p className={styles.details}>{type.details}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

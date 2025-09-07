import { motion } from 'framer-motion';
import styles from './DreamcorePage.module.scss';
import { Card, CardContent } from '../../components/Card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';

export function DreamcorePage() {
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({});

  const handleCardFlip = (title: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const dreamcoreImages = [
  // Images stored in public/images/dreamcore
  { file: 'classroom.png', title: '教室', description: '夢の中で感じるノスタルジックな教室の風景。記憶と感情が交差する瞬間を表現しています。' },
  { file: 'golden_meadow.png', title: '黄金の草原', description: '輝く草原が広がる風景。平和で温かな感覚を呼び起こす象徴的なシーンです。' },
  { file: 'falling_from_a_height.png', title: '落下の夢', description: '不安と解放の入り混じる、落下感を伴う夢の瞬間を切り取っています。' },
  { file: 'living_room.png', title: '古いリビングルーム', description: '古びた居間の光景は、記憶の欠片や過去の物語を思い起こさせます。' },
  { file: 'needle.png', title: '高い空の針', description: '鋭く伸びるシンボルが空に刺さるような超現実的なイメージです。' },
  { file: 'cycling_in_the_rain.png', title: '雨の中の通学', description: '雨滴とペダルのリズムが混ざり合う、移動の感覚を伴う情景です。' },
  { file: 'deep_sea.png', title: '深海', description: '深闇の中に広がる静けさと不思議な美しさを描いた海の夢景色。' },
  { file: 'desert.png', title: '砂漠に眺める', description: '広大で孤独な景色が、内面の探求や空虚感を象徴します。' },
  ];

  return (
    <div className="page-root">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>夢核 - Dreamcore</h1>
          <p className={styles.lead}>夢の中で体験する美しく神秘的な世界を視覚化したギャラリーです。</p>
        </div>

        <div className={styles.gridGallery}>
          {dreamcoreImages.map((image, index) => (
            <motion.div key={image.title} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08 }}>
              <div 
                className={`${styles.cardGroup} ${flippedCards[image.title] ? styles.isFlipped : ''}`} 
                onClick={() => handleCardFlip(image.title)}
              >
                <div className={`${styles.cardContent} ${styles.flipFront}`}>
                  <div className={styles.imgWrapper}>
                    <ImageWithFallback src={`/images/dreamcore/${encodeURIComponent(image.file)}`} alt={image.title} className={styles.imgCover} />
                    <div className={styles.gradientOverlay} />
                  </div>
                  <div className={styles.caption}>
                    <h3 className={styles.captionTitle}>{image.title}</h3>
                  </div>
                </div>
                <div className={`${styles.cardContent} ${styles.flipBack}`}>
                  <h3 className={styles.captionTitle}>{image.title}</h3>
                  <p className={styles.captionText}>{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className={styles.aboutSection}
        >
          <Card className={`${styles.aboutCard} bg-white/10 backdrop-blur-md border-white/20`}>
            <div className={styles.aboutInner}>
              <h2 className={styles.aboutHeading}>夢核とは</h2>
              <div className={styles.aboutContent}>
                <p>
                  夢核（Dreamcore）は、夢の中で体験するような幻想的で超現実的な美学を表現するアートジャンルです。
                  これらの作品は、ノスタルジア、神秘、そして少しの不安を混ぜ合わせた独特の雰囲気を持っています。
                </p>
                <p>
                  夢核の作品を見ることで、私たちは自分自身の夢や記憶、そして潜在意識との対話を深めることができます。
                  それぞれの画像が持つ象徴性や色彩は、見る人の心に異なる感情や記憶を呼び起こします。
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

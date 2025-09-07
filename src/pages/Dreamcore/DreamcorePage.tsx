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
  {
    file: 'golden_meadow.png',
    title: '黄金の草原',
    description: '果てしなく続く草原を歩いていると、空には常識では考えられないほど巨大な黄金の太陽が浮かんでいた。草原は光に満ち、どこまでも続いていた。',
    feeling: '圧倒的なスケール感に不安を覚えつつも、光に包まれる安らぎも同時に感じた。心の奥に矛盾する感情が共存していた。',
    type: '象徴夢／予知夢',
    category: '喜び＋恐怖'
  },
  {
    file: 'cycling_in_the_rain.png',
    title: '雨の中の通学',
    description: '夢の中で外の大雨の音が混ざり、父に自転車で学校へ送ってもらっていた。教室に入ると生徒は私一人だけで、先生が隣に座って一対一で授業をしていた。',
    feeling: '現実の雨音と夢が重なり、不思議なリアリティを感じた。同時に孤独と安心が交錯する体験だった。',
    type: '象徴夢',
    category: '悲しみ＋安心'
  },
  {
    file: 'classroom.png',
    title: '教室',
    description: '誰もいない放課後のような教室。机と椅子は整然と並んでいるのに、人の気配がまったくなく、窓からの強い風にカーテンだけが激しく揺れていた。',
    feeling: '懐かしいはずの教室が空っぽで、強い孤独感と空虚感に包まれた。過去の記憶を呼び起こされるようだった。',
    type: '象徴夢',
    category: '悲しみ'
  },
  {
    file: 'needle.png',
    title: '高い空の針',
    description: '空のはるか上に細い針が突き出しており、その上を必死に歩いていた。下には都市が広がり、足もとから吸い込まれそうな高さだった。',
    feeling: '尖端恐怖と高所恐怖が一度に押し寄せ、体が凍りつくようだった。バランスを失えばすべてが終わるという極度の緊張に包まれた。',
    type: '悪夢',
    category: '恐怖'
  },
  {
    file: 'deep_sea.png',
    title: '深海',
    description: '深い海の底にベッドが沈み、私はそこに横たわっていた。クラゲが光を放ちながら漂い、海の静けさと冷たさが全身を包んでいた。',
    feeling: '孤独と恐怖を感じながらも、静寂に抱かれるような安らぎもあった。心の深層へ沈んでいく感覚だった。',
    type: '象徴夢／癒しの夢',
    category: '悲しみ＋安らぎ'
  },
  {
    file: 'falling_from_a_height.png',
    title: '落下の夢',
    description: '高いビルの上に立っていたかと思うと、突然足を滑らせて空へと落ちていった。ビルの窓や街の光が目の前を猛スピードで過ぎていく。',
    feeling: '制御を失った恐怖で胸が締め付けられたが、同時に重力から解放されるような奇妙な自由感もあった。目覚めても心臓が激しく鼓動していた。',
    type: '悪夢',
    category: '恐怖'
  },
  {
    file: 'desert.png',
    title: '砂漠に眺める',
    description: '長い夢の物語の中で、果てしない砂漠を必死に逃げようとしていた。しかし出口は見つからず、遠くに輝く太陽をどれだけ追いかけても掴むことはできなかった。',
    feeling: '閉じ込められたような圧迫感と、どこにも行けない絶望感。孤独と焦燥に支配された。',
    type: '象徴夢',
    category: '悲しみ／恐怖'
  },
  {
    file: 'living_room.png',
    title: '古いリビングルーム',
    description: '90年代を思わせる古いリビングルーム。色あせたカーテン、黄ばんだ家具。テレビの画面が青白く光り続けていて、時間が止まったように感じられた。',
    feeling: '懐かしさと同時に、言葉にできない不安や居心地の悪さを強く感じた。安心できるはずの「家」が不気味に変質していた。',
    type: '反復夢／象徴夢',
    category: '悲しみ'
  }
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
                  <p className={styles.captionText}><span className={styles.sectionTitle}>夢の情景</span><br />{image.description}</p>
                  <p className={styles.captionText}><span className={styles.sectionTitle}>心境</span><br />{image.feeling}</p>
                  <p className={styles.captionText}><span className={styles.sectionTitle}>夢のタイプ</span>{image.type}</p>
                  <p className={styles.captionText}><span className={styles.sectionTitle}>カテゴリ</span>{image.category}</p>
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

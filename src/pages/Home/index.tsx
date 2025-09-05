import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';

export default function HomePage() {
  const [isDreamMode, setIsDreamMode] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={styles.homepageRoot}>
      <div className={styles.homepageContent}>
        <div className={styles.homepageInner}>
          <AnimatePresence mode="wait">
            {isDreamMode ? (
              <motion.div
                key="dream"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.stack}
              >
                <motion.h1
                  className={styles.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                >
                  <span>夢の世界へ</span>
                  <span className={styles.titleBreak}>ようこそ</span>
                </motion.h1>
                <motion.p
                  className={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  ここは、現実と幻想が溶けあう場所。< br />あなたの心に眠る記憶と感情を、静かに映し出します。
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  // start button fade a bit after background begins transition
                  transition={{ delay: 0.9 }}
                >
                  <Button onClick={() => navigate('/reality')} className={styles.btnCustom}>
                    現実に戻る
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div key="reality" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <h1 className={styles.title}>夢について学ぼう</h1>
                <p className={styles.subtitle}>
                  科学的な視点から夢の仕組みを理解し<br />その深い意味を探求する旅を始めましょう
                </p>
                <Button onClick={() => setIsDreamMode(true)} className={styles.btnCustom}>
                  夢の世界に入る
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


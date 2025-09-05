import styles from './RealityPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { motion } from 'framer-motion';

export function RealityPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.realityRoot}>
      <div className={styles.realityContent}>
        <h1 className={styles.title}>
          <span>夢の世界に</span>
          <span className={styles.titleBreak}>入りませんか？</span>
        </h1>

        <p className={styles.subtitle}>
          無限の可能性が広がる神秘的な空間で<br />
          あなたの心の奥深くを探索しましょう
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.45, ease: 'easeOut' }}
          style={{ marginTop: '1.5rem' }}
        >
          {/* navigate to /home (the original HomePage) when entering dream */}
          <Button onClick={() => navigate('/home')} className={styles.btnCustom} variant="accent">
            夢に入る <span className={styles.btnArrow} aria-hidden>➜</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default RealityPage;

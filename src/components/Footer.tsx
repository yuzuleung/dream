import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        <div className={styles.brand}>夢の世界</div>
        <div className={styles.muted}>© {year} yuzu, All rights reserved.</div>
      </div>
    </footer>
  );
}

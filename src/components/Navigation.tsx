import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { motion } from 'framer-motion';

export function Navigation() {
  const navItems = [
  { id: 'home', path: '/home', label: 'ホーム' },
    { id: 'dreamcore', path: '/dreamcore', label: '夢核' },
    { id: 'types', path: '/dream-types', label: '夢の種類' },
    { id: 'meanings', path: '/dream-meanings', label: '夢の意味' },
    { id: 'principles', path: '/dream-principles', label: '夢の原理' },
    { id: 'chat', path: '/chat', label: 'AI解析師' },
  ];

  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
    >
      <div className={styles.navInner}>
        <NavLink to="/home" className={styles.navBrand}>
          夢の世界
        </NavLink>
        <div className={styles.navList}>
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.path} className={({ isActive }) => `${styles.navItem} ${isActive ? styles.navItemActive : ''}`}>
              <span className={styles.navLabel}>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

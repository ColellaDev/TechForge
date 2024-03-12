import styles from './Header.module.css';

import techForgeLogo from "../assets/techforge-logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={techForgeLogo} alt="Logotipo do TechForge" />
      <strong>Tech Forge Feed</strong>
    </header>
  );
} 
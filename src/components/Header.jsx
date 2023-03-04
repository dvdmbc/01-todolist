import styles from './Header.module.css'

import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo Foguete" />
      <strong className={styles.blue}>to</strong>
      <strong className={styles.purple}>do</strong>
    </header>
  )
}
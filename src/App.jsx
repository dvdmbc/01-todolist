import { Header } from './components/Header';
import { List } from './components/List';

import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.wrapper}>

      <Header />
      <main className={styles.content}>
        <List>
        </List>

      </main>
    </div>
  )
}

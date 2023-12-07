import styles from './Layout.module.css'
import Link from 'next/link'
export default function layout({children}) {
  return (
    <>
    <header className={styles.header}>
    <Link href="/">
        <h2>SecondHand Car Sell</h2>
        <p>Perfect Car For Every Budget</p>
    </Link>
    </header>
    <div className={styles.container}>
        {children}
    </div>
    <footer className={styles.footer}>
        <div>
            Designed Exclusively by Mahdizadeh Corp &copy; 
        </div>
    </footer>
    </>
  )
}

import styles from './AllCarsButton.module.css';
import Link from 'next/link';
function AllCarsButton() {
  return (
    <div className={styles.container}>
      <Link href="/cars">Show All Cars</Link>
    </div>
  );
}

export default AllCarsButton;

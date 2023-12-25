import styles from './CarsList.module.css';
import Card from '../modules/Card';
import Back from '../icons/Back';
import { useRouter } from 'next/router';
export default function CarsList({ data }) {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div onClick={backHandler} className={styles.back}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

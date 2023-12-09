import Card from '../modules/Card';
import styles from './CarsPage.module.css';

export default function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {... car} />
      ))}
    </div>
  );
}

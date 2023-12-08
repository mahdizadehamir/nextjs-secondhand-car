import styles from './CarsPage.module.css';

export default function carsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
}

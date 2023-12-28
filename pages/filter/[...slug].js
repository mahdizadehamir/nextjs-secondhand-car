import carsData from '../../data/carsData';
import CarsList from '../../components/templates/CarsList';
import { useRouter } from 'next/router';

export default function filteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filtered = carsData.filter((item) => item.price > min && item.price < max);
  if (!filtered.length) return <h1>Not Found</h1>;
  return <CarsList data={filtered} />;
}

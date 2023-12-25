import { useRouter } from 'next/router';
import carsData from '../../data/carsData';
import CarsList from '../../components/templates/CarsList';
function CarCategory() {
  const router = useRouter();
  const carCat = router.query.carCategory;
  const filteredCars = carsData.filter((item) => item.category === carCat);
  return <CarsList data={filteredCars} />;
}

export default CarCategory;

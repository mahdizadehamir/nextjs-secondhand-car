import CarsPage from '/components/templates/CarsPage';
import Categories from '/components/modules/Categories';
import SearchBar from '/components/modules/SearchBar';
import carsData from '/data/carsData';
import AllCarsButton from '../components/modules/AllCarsButton';
export default function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllCarsButton />
      <CarsPage data={cars} />
    </div>
  );
}

import carsData from '../../data/carsData'
import CarsPage from '../../components/templates/CarsPage'
import Categories from '../../components/modules/Categories'
import SearchBar from '../../components/modules/SearchBar'
export default function index() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  )
}

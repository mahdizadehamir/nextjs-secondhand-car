import carsData from '../../data/carsData'
import CarsPage from '../../components/templates/CarsPage'
import Categories from '../../components/modules/Categories'
export default function index() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  )
}

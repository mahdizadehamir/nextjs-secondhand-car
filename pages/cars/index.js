import carsData from '../../data/carsData'
import CarsPage from '../../components/templates/CarsPage'
export default function index() {
  return (
    <div>
        <CarsPage data={carsData} />
    </div>
  )
}

import { useRouter } from 'next/router'
import carsData from '../../data/carsData'
import CarDetail from '../../components/templates/CarDetail'
export default function CarDetailRoute() {
  const router = useRouter()
  const { carId } = router.query
  const carDetail = carsData[carId - 1]
  return (
    <CarDetail {...carDetail} />
  )
}

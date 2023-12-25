import { useRouter } from "next/router"
function CarCategory() {
    const router = useRouter();
    const carCat = router.query.carCategory;
  return (
    <div>{carCat}</div>
  )
}

export default CarCategory
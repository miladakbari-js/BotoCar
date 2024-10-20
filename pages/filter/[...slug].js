import CarList from "@/components/module/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FiltredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filtredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if(!filtredData.length) return <h3>Not Found!!!</h3>
  return <CarList data={filtredData}/>;
}

export default FiltredCars;

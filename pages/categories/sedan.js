import CarList from "@/components/module/CarList";
import carsData from "@/data/carsData";

function Sedan() {
  const sedan = carsData.filter(cars => cars.category === "sedan");
  
    return <CarList data={sedan}/>;
}

export default Sedan;

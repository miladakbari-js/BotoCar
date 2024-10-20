import CarList from "@/components/module/CarList";
import carsData from "@/data/carsData";

function Suv() {
  const suv = carsData.filter(cars => cars.category === "suv");
  
  return <CarList data={suv}/>;
  }
  
  export default Suv;
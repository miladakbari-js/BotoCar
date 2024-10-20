import CarList from "@/components/module/CarList";
import carsData from "@/data/carsData";

function Sport() {
  const sport = carsData.filter(cars => cars.category === "sport");
  
  return <CarList data={sport}/>;
  }
  
  export default Sport;
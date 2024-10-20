import CarList from "@/components/module/CarList";
import carsData from "@/data/carsData";

function Hatchback() {
  const hatchBack = carsData.filter(cars => cars.category === "hatchback");
  
    return <CarList data={hatchBack}/>;
  }
  
  export default Hatchback;
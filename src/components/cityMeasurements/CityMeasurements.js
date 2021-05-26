import { useParams } from "react-router-dom";

export default function CityMeasurements() {
  let { cityName } = useParams();
  return <div>{cityName}</div>;
}

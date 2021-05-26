import { useParams } from "react-router-dom";

export default function CityMeasurements(params) {
  let { cityName } = useParams();
  return <div>{cityName}</div>;
}

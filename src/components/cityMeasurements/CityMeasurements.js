import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMeasurementsForCity } from "../../api/apiHelper";
import {
  canPaginateBack,
  canPaginateForward
} from "../../helpers/paginateHelper";
import Label from "../generic/Label";
import NumberInput from "../generic/NumberInput";
import Pagination from "../Pagination";

export default function CityMeasurements() {
  let { cityName } = useParams();
  const [measurementData, setMeasurementData] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(1000);
  const [pageNumber, setPageNumber] = useState(1);
  function handleInput(name, value) {
    if (name === "limit") {
      setPageNumber(1);
      setResultsPerPage(value);
    }
  }
  function handlePaginateClick({ target: { name } }) {
    if (name === "prev" && canPaginateBack(pageNumber)) {
      setPageNumber((prevState) => prevState - 1);
    } else if (
      name === "next" &&
      canPaginateForward(pageNumber, resultsPerPage, totalResultsCount)
    ) {
      setPageNumber((prevState) => prevState + 1);
    }
  }
  useEffect(() => {
    const options = { page: pageNumber, limit: resultsPerPage };
    fetchMeasurementsForCity(cityName, options)
      .then((data) => {
        setMeasurementData(data.results);
        setTotalResultsCount(data.meta.found);
      })
      .catch((err) => err.message);
  }, [cityName, pageNumber, resultsPerPage]);
  console.log(measurementData[0]);

  return (
    <div>
      <h3>Pollutant levels for {cityName}</h3>
      <div>
        <Label id="limit">Results Per Page</Label>
        <NumberInput
          name="limit"
          value={resultsPerPage}
          onChange={handleInput}
        />
      </div>
      {/* I would export this table, but don't wanna spend the time to right now */}
      <table style={{ tableLayout: "fixed", width: "100%", overflowY: "auto" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Pollutant Levels</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {measurementData.map((dataPoint) => (
            <tr>
              <td>{new Date(dataPoint.date.local).toLocaleString()}</td>
              <td>{dataPoint.value + " " + dataPoint.unit}</td>
              <td>
                <a href="">Map</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageNumber={measurementData?.length > 0 ? pageNumber : 0}
        resultsPerPageCount={measurementData?.length > 0 ? resultsPerPage : 0}
        totalResultsCount={totalResultsCount}
        onClickPaginate={handlePaginateClick}
      />
    </div>
  );
}

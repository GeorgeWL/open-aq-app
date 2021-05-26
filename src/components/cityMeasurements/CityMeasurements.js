import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMeasurementsForCity } from "../../api/apiHelper";
import {
  canPaginateBack,
  canPaginateForward
} from "../../helpers/paginateHelper";
import Label from "../generic/Label";
import NumberInput from "../generic/NumberInput";
import Pagination from "../Pagination";
import styles from "../../styles/cityMeasurements.module.scss";
const MAP_URL = "https://www.openstreetmap.org/#map=18/LAT/LONG";
export default function CityMeasurements() {
  let { cityName } = useParams();
  const [measurementData, setMeasurementData] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(250);
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

  return (
    <div className={styles.container}>
      <div style={{ width: "100%", justifyContent: "flex-start" }}>
        <Link to="/">Return to List</Link>
      </div>
      <h3>Ozone levels for {decodeURIComponent(cityName)}</h3>
      <div>
        <Label id="limit">Results Per Page</Label>
        <NumberInput
          name="limit"
          value={resultsPerPage}
          onChange={handleInput}
        />
      </div>
      {/* TODO: export this table, don't wanna spend the time to right now */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Ozone Levels</th>
            <th>Coordinates</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Add a loading spinner */}
          {measurementData.map((dataPoint) => {
            const mapLink = MAP_URL.replace(
              "LAT",
              dataPoint.coordinates.latitude
            ).replace("LONG", dataPoint.coordinates.longitude);
            return (
              <tr
                key={
                  new Date(dataPoint.date.utc).toISOString() +
                  dataPoint.location +
                  Math.random() * 1000
                }
              >
                <td>{new Date(dataPoint.date.utc).toLocaleString()}</td>
                <td>{dataPoint.location}</td>
                <td>{dataPoint.value + " " + dataPoint.unit}</td>
                <td>
                  Lat: {dataPoint.coordinates.latitude} Long:{" "}
                  {dataPoint.coordinates.longitude}{" "}
                </td>
                <td>
                  <a target="_blank" rel="noreferrer noopener" href={mapLink}>
                    Map
                  </a>
                </td>
              </tr>
            );
          })}
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

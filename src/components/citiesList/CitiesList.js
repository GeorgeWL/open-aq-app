import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchCitiesList } from "../../api/apiHelper";
import {
  canPaginateBack,
  canPaginateForward
} from "../../helpers/paginateHelper";
import styles from "../../styles/citiesList.module.scss";
import Label from "../generic/Label";
import NumberInput from "../generic/NumberInput";
import Select from "../generic/Select";
import Pagination from "../Pagination";
import CitiesListItem from "./CitiesListItem";

export default function CitiesList() {
  let history = useHistory();
  const [citiesList, setCitiesList] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(25);
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
    fetchCitiesList(options)
      .then((data) => {
        setCitiesList(data.results);
        setTotalResultsCount(data.meta.found);
      })
      .catch((err) => err.message);
  }, [pageNumber, resultsPerPage]);

  return (
    <div>
      <h3>Choose a City for details on Pollutant levels</h3>
      <div>
        <Label id="limit">Results Per Page</Label>
        <NumberInput
          name="limit"
          value={resultsPerPage}
          onChange={handleInput}
        />
      </div>
      <div>
        <Label id="sort">Sort</Label>
        <Select options={[{ key: "asc", label: "ascending" }]} />
      </div>
      <ul className={styles.list}>
        {citiesList?.map((city) => (
          <CitiesListItem
            city={city}
            onClick={(name) => {
              history.push(`/measurements/${name}`);
              console.log(`/measurements/${name}`);
            }}
            key={city.name}
          />
        ))}
      </ul>
      <Pagination
        pageNumber={citiesList?.length > 0 ? pageNumber : 0}
        resultsPerPageCount={citiesList?.length > 0 ? resultsPerPage : 0}
        totalResultsCount={totalResultsCount}
        onClickPaginate={handlePaginateClick}
      />
    </div>
  );
}

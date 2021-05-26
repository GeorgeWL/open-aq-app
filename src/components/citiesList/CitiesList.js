import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchCitiesList } from "../../api/apiHelper";
import Pagination from "../Pagination";
import CitiesListItem from "./CitiesListItem";
import styles from "../../styles/citiesList.module.scss";
import { useHistory } from "react-router-dom";
import NumberInput from "../generic/NumberInput";
import {
  canPaginateBack,
  canPaginateForward
} from "../../helpers/paginateHelper";
// two options, fetch only when list is active component,
// or fetch on app load regardless of if used, I've went for fetch if component visible
function CitiesList() {
  let history = useHistory();
  const [citiesList, setCitiesList] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(25);
  const [pageNumber, setPageNumber] = useState(1);
  function handleInput(name, value) {
    if (name === "limit") {
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
      <label htmlFor="limit">Results Per Page</label>
      <NumberInput name="limit" value={resultsPerPage} onChange={handleInput} />
      <ul className={styles.list}>
        {citiesList?.map((city) => (
          <CitiesListItem
            city={city}
            onClick={(name) => {
              history.push(name);
              console.log(name);
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
CitiesList.propTypes = {
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string
};
export default CitiesList;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchCitiesList } from "../../api/apiHelper";
import Pagination from "../Pagination";
import CitiesListItem from "./CitiesListItem";
import styles from "../../styles/citiesList.module.scss";
// two options, fetch only when list is active component,
// or fetch on app load regardless of if used, I've went for fetch if component visible
function CitiesList({ pageNumber = 1, onClickItem }) {
  const [citiesList, setCitiesList] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(20);

  function handlePaginateClick(params) {}
  useEffect(() => {
    if (citiesList?.length <= 0) {
      const options = { page: pageNumber, limit: resultsPerPage };
      fetchCitiesList(options)
        .then((data) => {
          setCitiesList(data.results);
          setTotalResultsCount(data.meta.found);
        })
        .catch((err) => err.message);
    }
  }, [citiesList, pageNumber, resultsPerPage]);

  return (
    <div>
      <ul className={styles.list}>
        {citiesList?.map((city) => (
          <CitiesListItem city={city} onClick={onClickItem} key={city.name} />
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

import { useEffect, useState } from "react";
import { fetchCitiesList } from "../api/apiHelper";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
// two options, fetch only when list is active component,
// or fetch on app load regardless of if used, I've went for fetch if component visible
function CitiesList({ pageNumber = 1, limit = 10 }) {
  const [citiesList, setCitiesList] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  useEffect(() => {
    if (citiesList?.length <= 0) {
      const options = { pageNumber, limit };
      fetchCitiesList(options)
        .then((data) => {
          setCitiesList(data.results);
          setTotalResultsCount(data.meta.found);
        })
        .catch((err) => err.message);
    }
  }, [citiesList, pageNumber, limit]);
  return (
    <div>
      <Pagination
        pageNumber={pageNumber}
        resultsPerPageCount={limit}
        totalResultsCount={totalResultsCount}
      />
    </div>
  );
}
CitiesList.propTypes = {
  pageNumber: PropTypes.number,
  limit: PropTypes.number
};
export default CitiesList;

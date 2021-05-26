import styles from "../styles/pagination.module.scss";
import Button from "./generic/Button";
export default function Pagination({
  pageNumber,
  resultsPerPageCount,
  totalResultsCount,
  onClickPaginate
}) {
  return (
    <div className={styles.container}>
      <Button name="prev" onClick={onClickPaginate}>
        Previous
      </Button>
      {getPaginationLabel(pageNumber, resultsPerPageCount, totalResultsCount)}
      <p>
        of <strong>{totalResultsCount}</strong>
      </p>
      <Button name="next" onClick={onClickPaginate}>
        Next
      </Button>
    </div>
  );
}
function getPaginationLabel(pageNumber, resultsPerPageCount, resultsCount) {
  const getLabel = () => {
    if (pageNumber === 1) {
      return { pageFrom: pageNumber, pageTo: resultsPerPageCount };
    } else if (pageNumber > 1) {
      const pageTo = resultsPerPageCount * (pageNumber + 1);
      return {
        pageFrom: pageNumber * resultsPerPageCount,
        pageTo: pageTo <= resultsCount ? pageTo : resultsCount
      };
    }
    return { pageFrom: pageNumber, pageTo: resultsCount };
  };
  const label = getLabel();
  return (
    <p>
      <strong>{label.pageFrom}</strong> - <strong>{label.pageTo}</strong>
    </p>
  );
}

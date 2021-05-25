import styles from "../styles/pagination.module.scss";
import Button from "./generic/Button";
export default function Pagination({
  pageNumber,
  resultsPerPageCount,
  totalResultsCount
}) {
  pageNumber = 2;
  return (
    <div className={styles.container}>
      <Button name="prev">Previous</Button>
      {getPaginationLabel(pageNumber, resultsPerPageCount, totalResultsCount)}
      <p>
        of <strong>{totalResultsCount}</strong>
      </p>
      <Button name="next">Next</Button>
    </div>
  );
}
function getPaginationLabel(pageNumber, resultsPerPageCount, resultsCount) {
  const isFirstPage = pageNumber === 1;
  const getLabel = () => {
    if (isFirstPage) {
      return { pageFrom: pageNumber, pageTo: resultsPerPageCount };
    }
    return { pageFrom: pageNumber, pageTo: 0 };
  };
  const label = getLabel();
  return (
    <p>
      <strong>{label.pageFrom}</strong> - <strong>{label.pageTo}</strong>
    </p>
  );
}

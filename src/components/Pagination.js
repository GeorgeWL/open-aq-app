import styles from "../styles/pagination.module.scss";
import Button from "./generic/Button";
export default function Pagination({
  pageNumber,
  resultsPerPageCount,
  totalResultsCount
}) {
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
  if (isFirstPage) {
    return (
      <p>
        <strong>1</strong> - <strong>{resultsPerPageCount}</strong>
      </p>
    );
  }
}

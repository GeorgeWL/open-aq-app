export default function Pagination({
  pageNumber,
  resultsPerPageCount,
  totalResultsCount
}) {
  return (
    <div>
      <button>Previous</button>
      <p>
        Page <strong>{pageNumber}</strong> of{" "}
        <strong>{resultsPerPageCount}</strong>
      </p>
      <p>
        Results Count:
        <strong>{totalResultsCount}</strong>
      </p>
      <button>Next</button>
    </div>
  );
}

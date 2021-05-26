export const canPaginateBack = (prevNumber) => prevNumber > 1;
export const canPaginateForward = (
  prevNumber,
  resultsPerPage,
  totalResultsCount
) => prevNumber * resultsPerPage <= totalResultsCount;

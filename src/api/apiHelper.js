import queryString from "query-string";
const ROOT_URL = "https://api.openaq.org/v1/";
const CITIES_PATH = `cities?country=GB`;
const MEASUREMENTS_PATH = "measurements?country=GB&city=CITY";
export async function fetchCitiesList(options) {
  const query = queryString.stringify(options);
  const apiPath = `${ROOT_URL}${CITIES_PATH}${
    options.page || options.limit ? "&" + query : ""
  }`;
  return await fetchHandler(apiPath);
}
async function fetchHandler(url) {
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response?.statusText}`);
  }
  return json;
}
export async function fetchMeasurementsForCity(city, options) {
  options = {
    ...options,
    parameters: ["o3"],
    orderBy: "location",
    sort: "asc"
  };
  const query = queryString.stringify(options);

  const apiPath = `${ROOT_URL}${MEASUREMENTS_PATH.replace(
    "CITY",
    encodeURIComponent(city)
  )}${options.page || options.limit ? "&" + query : ""}`;

  return await fetchHandler(apiPath);
}

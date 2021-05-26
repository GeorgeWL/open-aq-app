import queryString from "query-string";
const ROOT_URL = "https://api.openaq.org/v1/";
const CITIES_PATH = `cities?country=GB`;
const MEASUREMENTS_PATH = "measurements?country=GB&city=CITY";
export async function fetchCitiesList(options) {
  const query = queryString.stringify(options);
  const apiPath = `${ROOT_URL}${CITIES_PATH}${
    options.page || options.limit ? "&" + query : ""
  }`;
  console.log(apiPath, query, options);
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
  const query = queryString.stringify(options);
  return await fetchHandler(ROOT_URL + MEASUREMENTS_PATH.replace("CITY", city));
}

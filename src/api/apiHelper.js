const ROOT_URL = "https://api.openaq.org/v1/";
const CITIES_PATH = `cities?country=GB`;
const MEASUREMENTS_PATH = "measurements?country=GB&city=CITY";
export async function fetchCitiesList() {
  return await fetchHandler(ROOT_URL + CITIES_PATH);
}
async function fetchHandler(url) {
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }
  return json;
}
export async function fetchMeasurementsForCity(city) {
  return await fetchHandler(ROOT_URL + MEASUREMENTS_PATH.replace("CITY", city));
}

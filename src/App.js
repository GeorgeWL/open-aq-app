import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CitiesList from "./components/citiesList/CitiesList";
import CityMeasurements from "./components/cityMeasurements/CityMeasurements";
import "./styles.css";
export default function App() {
  return (
    <Router>
      <main className="App">
        <h1>Air Cleanliness</h1>
        <h2>Great Britain</h2>
        <Switch>
          <Route path="/">
            <CitiesList />
          </Route>
          <Route path="/measurements/:cityName">
            <CityMeasurements />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

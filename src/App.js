import { useState } from "react";
import CitiesList from "./components/citiesList/CitiesList";
import DateInput from "./components/generic/DateInput";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
const NAME_DATE_FROM = "dateFrom";
const NAME_DATE_TO = "dateTo";
export default function App() {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  function handleInputChange(name, value) {
    switch (name) {
      case NAME_DATE_FROM:
        setDateFrom(value);
        break;
      case NAME_DATE_TO:
        setDateTo(value);
        break;
      default:
        break;
    }
  }
  return (
    <Router>
      <main className="App">
        <h1>Air Cleanliness</h1>
        <h2>Great Britain</h2>
        <Switch>
          <Route path="/">
            <label htmlFor={NAME_DATE_FROM}>From:</label>
            <DateInput name="dateFrom" onChange={handleInputChange} />
            <label htmlFor={NAME_DATE_FROM}>To:</label>
            <DateInput name="dateTo" onChange={handleInputChange} />
            <CitiesList dateFrom={dateFrom} dateTo={dateTo} />
          </Route>
          <Route path="/city/:cityName">
            <></>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

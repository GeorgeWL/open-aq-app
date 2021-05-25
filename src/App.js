import { useState } from "react";
import DateInput from "./components/generic/dateInput";
import "./styles.css";

export default function App() {
  const [dateFrom, setDateFrom] = useState();
  function handleInputChange(name, value) {
    switch (name) {
      case "dateFrom":
        setDateFrom(value);
        console.log({ dateFrom });
        break;

      default:
        break;
    }
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DateInput name="dateFrom" onChange={handleInputChange} />
    </div>
  );
}

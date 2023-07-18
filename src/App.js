import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import employees from "./models/employees";
import { useState } from "react";

function App() {
  const [employeesList, setEmployeesList] = useState(employees);

  return (
    <div className="App">
      <HomePage />

      <EmployeePage />
    </div>
  );
}

export default App;

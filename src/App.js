import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import employees from "./models/employees";

function App() {
  return (
    <div className="App">
      <HomePage items={employees} />

      <EmployeePage item={employees[0]} />
    </div>
  );
}

export default App;

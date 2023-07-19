import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import employees from "./models/employees";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="mainApp">
        <HomePage items={employees} />
        <EmployeePage item={employees[0]} />
      </div>
    </div>
  );
}

export default App;

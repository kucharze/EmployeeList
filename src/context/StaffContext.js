import { createContext, useState } from "react";
import employees from "../models/employees";
export const StaffContext = createContext();

const StaffContextProvider = (props) => {
  const [emp, setEmp] = useState("");
  return (
    <StaffContext.Provider value={(emp, setEmp)}>
      {props.children}
    </StaffContext.Provider>
  );
};

export default StaffContextProvider;

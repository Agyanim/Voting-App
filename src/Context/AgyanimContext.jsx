import { createContext, useState } from "react";

export const StudentContext = createContext(null);

import React from "react";

const StudentProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const students=["gideon","Eric"];
  const [studentName, setStudentName] = useState(students)
  return (
    <StudentContext.Provider value={{ count, setCount,studentName,setStudentName }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;

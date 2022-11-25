import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./pages/Forms";
import VoteApp from "./pages/VoteApp";

function App() {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<VoteApp />} />
        <Route path="forms" element={<Forms />} />
      </Route>
    </Routes>
    // <div><Forms/></div>
  );
}

export default App;

import React from "react";
import Form from "./pages/Form";
import Folder from "./pages/Folder";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/folder" element={<Folder />} />
      </Routes>
    </>
  );
};

export default App;

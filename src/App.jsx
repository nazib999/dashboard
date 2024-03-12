import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

const App = () => {
  return <BrowserRouter basename="/dashboard">
  <Routes>

    <Route path="/">
      <Route index element={<Home/>}></Route>
      <Route path="users" element={<List/>}></Route>

    </Route>
  </Routes>
  
  </BrowserRouter>;
};

export default App;

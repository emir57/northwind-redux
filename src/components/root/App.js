import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import CategoryList from "../categories/CategoryList";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {<Route exact path="/carts" element={<CartDetail />} />}
      </Routes>


    </Container>
  );
}

export default App;

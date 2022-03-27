import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import CategoryList from "../categories/CategoryList";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Container>
      <Navi />

      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/carts" element={<CartDetail />} />
        <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
      </Routes>
      
    </Container>
  );
}

export default App;

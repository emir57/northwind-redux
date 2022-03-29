import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import CategoryList from "../categories/CategoryList";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Container>
      <Navi />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/carts" element={<CartDetail />} />
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>} />
        <Route path="*" exact element={<NotFound/>} />
      </Routes>
      
    </Container>
  );
}

export default App;

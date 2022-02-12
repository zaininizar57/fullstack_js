import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditeProduct from "./components/EditeProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edite/:id" element={<EditeProduct />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={[<Navbar />, <Dashboard />]} />
      </Routes>
    </Router>
  );
}

export default App;

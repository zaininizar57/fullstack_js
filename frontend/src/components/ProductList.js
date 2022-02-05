import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    const response = await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  };

  return (
    <div className="mt-4 box">
      <Link to="/add" className="button is-primary mt-4">
        Add New Product
      </Link>
      <div className="notification is-danger mt-4">
        <button className="delete"></button>
        Product Berhasil di Hapus
      </div>
      <table className="table is-stripped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>Rp{product.price}</td>
              <td>
                <Link
                  to={`/edite/${product.id}`}
                  className="button is-small is-info"
                >
                  Edite
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

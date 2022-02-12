import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditeProduct = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      title: title,
      price: price,
    });

    navigate("/");
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async (e) => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div className="container mt-4">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="box mt-4">
            <form onSubmit={updateProduct}>
              <div className="field">
                <lable className="label">Title</lable>
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="field">
                <lable className="label">Price</lable>
                <input
                  className="input"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="field">
                <button className="button is-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeProduct;

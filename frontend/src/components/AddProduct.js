import React from "react";

const AddProduct = () => {
  return (
    <div>
      <form>
        <div className="field">
          <lable className="label">Title</lable>
          <input class="input" type="text" placeholder="Title" />
        </div>
        <div className="field">
          <lable className="label">Price</lable>
          <input class="input" type="text" placeholder="Price" />
        </div>
        <div className="field">
          <button class="button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

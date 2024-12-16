import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./index.css";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function getProducts() {
    const res = await axios.get(
      "http://localhost:5000/products?search=" + search
    );
    setProducts(res.data.data);
  }

  function handleSearch(e) {
    setSearch(e.target.value)
    console.log(search);
  }

  useEffect(() => {
    getProducts();
  }, [search]);

  return (
    <>
      <input style={{
        display: "block",
        margin: "auto",
        marginTop: "100px",
      }}
        type="text"
        placeholder="Search something here"
        onChange={handleSearch}
      />
      <div className="product__container">
        {products?.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <NavLink to={"/product-details/" + product.id}>
              <h2>{product.name}</h2>
            </NavLink>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

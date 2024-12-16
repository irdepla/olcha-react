import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  async function getProduct() {
    try {
      const res = await axios.get("http://localhost:5000/products/" + id);
      setProduct(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    getProduct()
  }, [id]);

  return(
  <>
   <div>
    <h2>{product.name}</h2>
   </div>
  </>
  )
};

export default ProductDetails;

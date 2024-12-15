import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  async function getProduct() {
    try {
      const res = await axios.get("/products/" + id);
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
    {
      
    }
   </div>
  </>
  )
};

export default ProductDetails;

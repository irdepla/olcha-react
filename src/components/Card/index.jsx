import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import "./index.css"

const Card = () => {

    const [products, setProducts] = useState([])

    async function getProducts() {
        const res = await axios.get("http://localhost:5000/products")
        setProducts(res.data.data)  
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <>
        <div className='product__container'>
            {
                products?.map((product) => (
                    <div key={product.id} >
                        <NavLink to={"/product-details/" + product.id}>
                        <h2>{product.name}</h2>
                        </NavLink>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <img src={product.image} alt="" />
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Card;

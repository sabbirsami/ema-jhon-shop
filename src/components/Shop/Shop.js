import React, { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="product-section">
            <Container>
                <div className="row">
                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Shop;

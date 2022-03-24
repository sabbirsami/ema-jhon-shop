import React from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import "./Product.css";

const product = (props) => {
    console.log(props);
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className="col-lg-4">
            <CardGroup>
                <Card className=" m-2">
                    <Card.Img variant="top" className="w-100 p-3" src={img} />
                    <Card.Body className="p-3">
                        <h4 className="text-start">{name}</h4>
                        <h5 className="text-start">Price: ${price}</h5>
                        <p className="text-start">
                            <small>Manufacturer : {seller}</small>
                        </p>
                        <p className="text-start">
                            <small>Reating: {ratings} Ster</small>
                        </p>
                    </Card.Body>
                    <Card.Footer className="p-0">
                        <button className="w-100 btn btn-warning">
                            Add To Cart
                        </button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default product;

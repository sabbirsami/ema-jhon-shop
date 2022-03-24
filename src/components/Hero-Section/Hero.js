import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import heroImg from "../../images/Group 12.jpg";

const Hero = () => {
    return (
        <div>
            <Container>
                <div className="hero-section">
                    <Row>
                        <Col className="d-flex align-items-center">
                            <div className="hero-text-area">
                                <p className="text-warning">
                                    Sale up to 70% off
                                </p>
                                <h1>New Collection For Fall</h1>
                                <h4>
                                    Discover all the new arrivals of
                                    ready-to-wear collection.
                                </h4>
                                <button className="btn btn-warning py-2 px-4 fs-5 my-4">
                                    Shop Now
                                </button>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <div className="hero-img-area">
                                <img className="w-100" src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Hero;

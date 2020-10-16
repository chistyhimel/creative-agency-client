import React from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import slack from "../../images/logos/slack.png";
import google from "../../images/logos/google.png";
import uber from "../../images/logos/uber.png";
import netflix from "../../images/logos/netflix.png";
import airbnb from "../../images/logos/airbnb.png";
import servicesData from "../../fakeData/ServicesData";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-between">
        <Col md={2} className="mb-5">
          <img src={slack} alt="" className="img-fluid" />
        </Col>
        <Col md={2} className="mb-5">
          <img src={google} alt="" className="img-fluid" />
        </Col>
        <Col md={2} className="mb-5">
          <img src={uber} alt="" className="img-fluid" />
        </Col>
        <Col md={2} className="mb-5">
          <img src={netflix} alt="" className="img-fluid" />
        </Col>
        <Col md={2} className="mb-5">
          <img src={airbnb} alt="" className="img-fluid" />
        </Col>
      </Row>

      {/* Service card */}

      <h2 className="text-center mt-5 mb-3">Provide awesome services</h2>
      <CardDeck className="mb-5">
        {servicesData.map((service,idx) => (
          <Link to={`/user/order/${service.name}`} key={idx}className=" card text-center border-0" style={{ textDecoration: 'none' ,color: 'black' }}>
            <Card.Img
              variant="top"
              src={service.img}
              className="mx-auto pt-5"
              style={{ width: "100px" }}
            />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Link>
        ))}
      </CardDeck>
    </Container>
  );
};

export default Services;

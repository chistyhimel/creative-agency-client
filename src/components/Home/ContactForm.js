import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div className="contact-form p-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="font-weight-bold">
              Let us handle your <br /> project professionally.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              non iste totam nobis facere natus harum sapiente ipsam
              consequuntur aliquam!
            </p>
          </Col>
          <Col md={6}>
            <input
              className="form-control form-control-lg"
              placeholder="Your email address"
              type="text"
            />
            <br />
            <input
              className="form-control form-control-lg"
              placeholder="Your name/Company's name"
              type="text"
            />
            <br />
            <textarea
              className="form-control form-control-lg"
              rows="4"
              placeholder="Your Messege"
            ></textarea>
            <br />
            <Button variant="dark">Submit</Button>
          </Col>
        </Row>
        <p className="lead text-center mt-5">
          Copyright &copy; Creative Agency 2020.
        </p>
      </Container>
    </div>
  );
};

export default ContactForm;

import React, { useContext } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Home.css";
import logo from "../../images/logos/logo.png";
import bannerImg from "../../images/logos/Frame.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  return (
    <header className="header-container">
      <Container>
        <Navbar expand="md" className="pt-md-5">
        <Link to="/home">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" style={{ width: "150px" }} />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto font-weight-bold">
              <Link to="/home">
              <Nav.Link href="#home" className="mr-md-5">
                Home
              </Nav.Link>
              </Link>
              <Nav.Link href="#link" className="mr-md-5">
                Our Portfolio
              </Nav.Link>
              <Nav.Link href="#link" className="mr-md-5">
                Our Team
              </Nav.Link>
              <Nav.Link href="#link" className="mr-md-5">
                Contact Us
              </Nav.Link>
              {loggedInUser.email ? (
                <Nav.Link href="#link" className="mr-md-5">
                  {loggedInUser.name}
                </Nav.Link>
              ) : (
                <Link to="/login">
                  <Button variant="dark" type="submit">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* banner component */}

        <Row className="pt-5">
          <Col md={6}>
            <h1 className="font-weight-bold">
              Let’s Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <Button variant="dark">Hire Us</Button>
          </Col>
          <Col md={6}>
            <img src={bannerImg} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import SplitPane from "react-split-pane";
import OrderForm from "./OrderForm";
import UserReview from "./UserReview";
import UserServices from "./UserServices";
import logo from "../../images/logos/logo.png";
import {
  faCommentAlt,
  faHdd,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { UserContext } from "../../App";

const UserProfile = () => {
  const {value,value2} = useContext(UserContext);
  const [service,setService] = value2;
  return (
    <Router>
      <Container>
        <img
          src={logo}
          style={{ width: "180px" }}
          alt=""
          className="mt-3 mb-3"
        />
        <Row>
          <Col md={3}>
            <Link
              to={`/user/order/${service}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="font-weight-bold mt-3">
                <FontAwesomeIcon icon={faShoppingCart} /> Order
              </h5>
            </Link>

            <Link
              to="/user/services"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="font-weight-bold">
                <FontAwesomeIcon icon={faHdd} /> Services
              </h5>
            </Link>
            <Link
              to="/user/review"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="font-weight-bold">
                <FontAwesomeIcon icon={faCommentAlt} /> Review
              </h5>
            </Link>
          </Col>

          <Col md={9}>
            <Switch>
              <PrivateRoute path="/user/order/:serviceName">
                <OrderForm></OrderForm>
              </PrivateRoute>
              <PrivateRoute path="/user/services">
                <UserServices></UserServices>
              </PrivateRoute>
              <PrivateRoute path="/user/review">
                <UserReview></UserReview>
              </PrivateRoute>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default UserProfile;

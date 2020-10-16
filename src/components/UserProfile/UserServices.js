import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { UserContext } from "../../App";

const UserServices = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      "https://afternoon-sierra-71482.herokuapp.com/userOrders?email=" +
        loggedInUser.email
    )
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  console.log(orders);
  return (
    <div className="order-form-continer">
      {orders.length ? (
        orders.map((order) => (
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <div className="align-items-center d-flex justify-content-around mt-4">
                  <img
                    src={order.img}
                    alt=""
                    className="img-fluid"
                    style={{ width: "85px" }}
                  />
                  <div>
                    <Button variant="outline-warning" disabled>
                      Pending
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{order.service}</Card.Title>
                  <Card.Text>{order.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      ) : (
        <p className="text-center lead">You have no orders yet!</p>
      )}
    </div>
  );
};

export default UserServices;

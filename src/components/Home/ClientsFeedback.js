import React, { useEffect, useState } from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import customer1 from "../../images/customer-1.png";
import customer2 from "../../images/customer-2.png";
import customer3 from "../../images/customer-3.png";

const ClientsFeedback = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-sierra-71482.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => {
        data.sort(() => Math.random() - 0.5);
        setReviews(data);
      });
  }, []);

  return (
    <Container>
      <div className="mt-5 mb-5">
        <h4 className="font-weight-bold text-center mb-4">Clients Feedback</h4>

        <Row>
          {reviews.map((review) => (
            <Col md={4} className="mb-4" key={review._id}>
              <Card>
                <div className="align-items-center d-flex justify-content-around mt-4">
                  <img
                    src={review.img}
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "85px" }}
                  />
                  <div>
                    <h5 className="font-weight-bold">{review.name}</h5>
                    <small className="text-secondary">{review.company}</small>
                  </div>
                </div>
                <Card.Body>
                  <Card.Text>{review.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ClientsFeedback;

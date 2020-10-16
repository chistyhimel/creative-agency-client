import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import "./Order.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

const UserReview = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const onSubmit = (data) => {
    data.img = loggedInUser.img;
    console.log(data);
    fetch("https://afternoon-sierra-71482.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      });
  };
  return (
    <div className="order-form-continer">
      <div className="row p-3">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your name"
              ref={register({ required: true })}
            />
            <br />
            <input
              type="text"
              className="form-control"
              name="company"
              placeholder="Your company name"
              ref={register({ required: true })}
            />
            <br />
            <textarea
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              rows="3"
              ref={register({ required: true })}
            />
            <br />

            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default UserReview;

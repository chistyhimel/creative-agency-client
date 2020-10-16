import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Order.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ServicesData from "../../fakeData/ServicesData";
import servicesData from "../../fakeData/ServicesData";
import { UserContext } from "../../App";

const OrderForm = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [service, setService] = value2;
  const { register, handleSubmit, watch, errors } = useForm();
  const { serviceName } = useParams();
  setService(serviceName);
  const [userOrder, setUserOrder] = useState({});

  useEffect(() => {
    const order = servicesData.find(
      (order) => order.name.toLowerCase() === serviceName.toLowerCase()
    );
    setUserOrder(order);
  }, []);

  //

  const onSubmit = (data) => {
    data.img = userOrder.img;
    data.description = userOrder.description;
    console.log(data);
    fetch("https://afternoon-sierra-71482.herokuapp.com/addOrder", {
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
              placeholder="Your name/company name"
              ref={register({ required: true })}
            />
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              value={loggedInUser.email}
              placeholder="Your email address"
              ref={register({ required: true })}
            />
            <br />
            <input
              type="text"
              className="form-control"
              name="service"
              value={serviceName}
              placeholder="Service Name"
              ref={register({ required: true })}
            />
            <br />
            <textarea
              className="form-control"
              name="details"
              placeholder="Project Details"
              rows="3"
              ref={register({ required: true })}
            ></textarea>
            <br />
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  name="price"
                  ref={register({ required: true })}
                />
              </div>
              <div className="col">
                <input
                  type="file"
                  className="form-control-file"
                  name="photo"
                  ref={register}
                />
              </div>
            </div>
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

export default OrderForm;

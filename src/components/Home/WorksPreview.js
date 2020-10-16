import React from "react";
import "./Home.css"
import { Container } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import carousel1 from "../../images/carousel-1.png";
import carousel2 from "../../images/carousel-2.png";
import carousel3 from "../../images/carousel-3.png";
import carousel4 from "../../images/carousel-4.png";
import carousel5 from "../../images/carousel-5.png";

const WorksPreview = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section className="work-preview-container">
        <Container>
      <Carousel breakPoints={breakPoints}>
        <img src={carousel1} className="img-fluid carousel-image" alt="" />
        <img src={carousel2} className="img-fluid carousel-image" alt="" />
        <img src={carousel3} className="img-fluid carousel-image" alt="" />
        <img src={carousel4} className="img-fluid carousel-image" alt="" />
        <img src={carousel5} className="img-fluid carousel-image" alt="" />
      </Carousel>
      </Container>
    </section>
  );
};

export default WorksPreview;

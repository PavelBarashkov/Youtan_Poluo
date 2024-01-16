import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./carouselItem.module.css";
import into from "../../assets/img/image.png";

interface ICarouselItemProps {
  imgs: string[];
}

export const CarouselItem = ({ imgs }: ICarouselItemProps) => {
  if (!imgs) {
    return (
      <Carousel.Item className={classes.item}>
        <div className={classes.carousel_image}>
          <img className={classes.img} src={into} alt="Youtan Poluo" />
        </div>
      </Carousel.Item>
    );
  }
  return <div>CarouselItem</div>;
};

import { Carousel } from "react-bootstrap";
import classes from "./сarouselListImg.module.css";
import into from "../../assets/img/into.png";

interface ICarouselListImgProps {
  images: string[];
  onClick: () => void;
}

export const CarouselListImg = ({ images, onClick }: ICarouselListImgProps) => {
  if (images.length === 0) {
    return (
      <Carousel indicators={false} interval={null} controls={false}>
        <Carousel.Item className={classes.item} onClick={onClick}>
          <div className={classes.carousel_image}>
            <img className={classes.img} src={into} alt="Youtan Poluo" />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <Carousel indicators={false} interval={null}>
      {images &&
        images.map((img: string) => (
          <Carousel.Item className={classes.item} onClick={onClick}>
            <div className={classes.carousel_image}>
              <img className={classes.img} src={img} alt="Youtan Poluo" />
            </div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

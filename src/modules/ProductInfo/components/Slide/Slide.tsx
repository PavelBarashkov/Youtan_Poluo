import "./style.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import classes from "./carousel.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Slide = ({ imgs }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Carousel
        className={`custom-carousel`}
        indicators={false}
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleIndicatorClick}
      >
        {imgs &&
          imgs.map((img: string) => (
            <Carousel.Item key={img}>
              <Zoom>
                <img
                  className="d-block w-100"
                  alt={`Youtan Poluo`}
                  src={img}
                  width={500}
                />
              </Zoom>
            </Carousel.Item>
          ))}
      </Carousel>

      {imgs && imgs.length > 0 && (
        <MultiCarousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="MultiCarousel"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="MultiCarousel-item"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 4000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 150,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass="carousel-track"
          slidesToSlide={1}
          swipeable
        >
          {imgs.map((img: string, index: number) => (
            <div
              key={img}
              className={`${classes.indicators_item} ${
                index === activeIndex ? classes.active : ""
              }`}
            >
              <img
                className={classes.indicators_img}
                key={img}
                src={img}
                alt={`Indicator ${img}`}
                onClick={() => handleIndicatorClick(index)}
              />
            </div>
          ))}
        </MultiCarousel>
      )}
    </>
  );
};

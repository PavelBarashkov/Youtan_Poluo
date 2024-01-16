import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classesMainSlide from './mainSlide.module.css';


import photo1 from '../../assets/img/2021_101.png';
import photo from '../../assets/img/2021_134.png';


export const MainSlide = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
    };
    return (
        <Carousel
          className={`${classesMainSlide.carousel} ${classesMainSlide['carousel-indicators']}`}
          activeIndex={index}
          onSelect={handleSelect}
        >
           <Carousel.Item className={classesMainSlide.item}>
            <div className={classesMainSlide.carousel_image} >
                <img className={classesMainSlide.img} src={photo} alt="Youtan Poluo" />
            </div>
            <Carousel.Caption className={classesMainSlide.caption}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className={classesMainSlide.item}>
            <div className={classesMainSlide.carousel_image}>
                <img className={classesMainSlide.img} src={photo1} alt="Youtan Poluo" />
            </div>
            <Carousel.Caption className={classesMainSlide.caption}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item> 

        </Carousel>
      );
}
import React from 'react';
import { CarouselContainer } from './CarouselStyles';
import CarouselInit from './Carousel';

const Carousel = () => {
  return (
    <CarouselContainer id='discover'>
        <CarouselInit />
    </CarouselContainer>
  );
};

export default Carousel;
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardItem from './CardItem';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CardsList = ({title, items}) => {
  return (
    <>
      <h3>{title}</h3>
      <Carousel
        responsive={responsive}
      >
        {items.length !== 0 && items.map(item => {
          return (
            <CardItem item={item}/>
          )
        })}
      </Carousel>
    </>
  )
}

export default CardsList;
import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import CardItem from './CardItem';

const CardsList = ({title, items}) => {

  return (
    <>
      <h3>{title}</h3>
      <CardDeck>
        <Carousel style={{width: '100vw'}}>
          {items.length !== 0 && items.map(item => {
            return (
              <Carousel.Item>
                <CardItem item={item}/>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </CardDeck>
    </>
  )
}

export default CardsList;
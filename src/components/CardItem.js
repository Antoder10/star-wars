import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ModalItem from './ModalItem';

const CardItem = ({item}) => {
  const [show, setShow] = useState(false);
  const handleModalClose = () => setShow(false);
  const {name, title} = item;

  return (
    <>
      <Card
        style={{ minWidth: '10rem' }}
        onClick={() => setShow(true)}
      >
        <Card.Img
          variant="top"
          src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
        />
        <Card.Body>
          <Card.Title>{name || title}</Card.Title>
        </Card.Body>
      </Card>
      <ModalItem
        show={show}
        handleModalClose={handleModalClose}
        item={item}
      />
    </>
  )
}

export default CardItem;
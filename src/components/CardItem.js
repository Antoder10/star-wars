import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ModalItem from './ModalItem';

const CardItem = ({item}) => {
  const [show, setShow] = useState(false);
  const handleModalClose = () => setShow(false);
  const {name, title, image} = item;

  return (
    <>
      <Card
        style={{ maxWidth: '25rem' }}
        onClick={() => setShow(true)}
        className="h-100"
      >
        <Card.Img
          variant="top"
          src={image || ''}
        />
        <Card.Body>
          <Card.Title>{name || title}</Card.Title>
        </Card.Body>
      </Card>
      <ModalItem
        show={show}
        handleModalClose={handleModalClose}
        item={item}
        image={image}
      />
    </>
  )
}

export default CardItem;
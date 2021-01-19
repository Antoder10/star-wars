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
      >
        <Card.Img
          variant="top"
          src={image || ''}
          className="img-fluid"
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
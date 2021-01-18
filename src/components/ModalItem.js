import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

const ModalItem = ({show, handleModalClose, item}) => {
  const newItem = [];
  for (const [key, value] of Object.entries(item)) {
    newItem.push({key, value});
  }
  console.log(newItem);

  return (
    <Modal
      show={show}
      dialogClassName="modal-100w"
    >
      <Modal.Header closeButton onClick={handleModalClose}>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {newItem.map(prop => {
              return (
                <ListGroup.Item>
                  {prop.key} : {prop.value}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Modal.Body>
    </Modal>
  )
}
           /* <ListGroup.Item>
              {`Height: ${height}` || `Title: ${title}`}
            </ListGroup.Item>
            <ListGroup.Item>Mass: {mass}</ListGroup.Item>
            <ListGroup.Item>Birth Year: {birth_year}</ListGroup.Item>
            <ListGroup.Item>Gender: {gender}</ListGroup.Item>
            <ListGroup.Item>Homeworld: {homeworld}</ListGroup.Item>*/

export default ModalItem;
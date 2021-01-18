import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

const ModalItem = ({show, handleModalClose, item}) => {
  const newItem = [];
  for (const [key, value] of Object.entries(item)) {
    newItem.push({key, value});
  }
  const filtered = newItem
    .filter(item => item.key !== 'created')
    .filter(item => item.key !== 'edited')
    .filter(item => item.key !== 'url')
    .filter(item => item.key !== 'producer')
    .filter(item => item.key !== 'characters')
    .filter(item => item.key !== 'planets')
    .filter(item => item.key !== 'starships')
    .filter(item => item.key !== 'vehicles')
    .filter(item => item.key !== 'species')
    .filter(item => item.key !== 'homeworld')
    .filter(item => item.key !== 'films')

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
            {filtered.map(prop => {
              console.log(prop)
              if (prop.value !== '' && prop.value.length > 0) {
                return (
                  <ListGroup.Item>
                    <p>
                      {prop.key.replace('_', ' ').replace(prop.key[0], prop.key[0].toUpperCase())}: <b>{prop.value}</b>
                    </p>
                  </ListGroup.Item>
                )
              }
            })}
          </ListGroup>
        </Modal.Body>
    </Modal>
  )
}

export default ModalItem;
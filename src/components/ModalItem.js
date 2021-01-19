import React from 'react';
import Modal from 'react-bootstrap/Modal';

import CharacterDetails from './CharacterDetails'

const ModalItem = ({show, handleModalClose, item, image}) => {
  const newItem = [];
  for (const [key, value] of Object.entries(item)) {
    newItem.push({key, value});
  }
  const filtered = newItem
    .filter(item => item.key !== 'created')
    .filter(item => item.key !== 'id')
    .filter(item => item.key !== 'edited')
    .filter(item => item.key !== 'url')
    .filter(item => item.key !== 'producer')
    .filter(item => item.key !== 'wiki')
    .filter(item => item.key !== 'image')

    return (
    <Modal
      show={show}
      dialogClassName="modal-95vw"
    >
      <Modal.Header closeButton onClick={handleModalClose}>
          <Modal.Title>
            <h2>
              {filtered[0].value}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CharacterDetails filtered={filtered} image={image}/>
        </Modal.Body>
    </Modal>
  )
}

export default ModalItem;
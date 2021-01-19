import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CharacterDetails = ({filtered, image}) => {
  return (
    <Card className="border-0">
      <div className="row no-gutters">
        <Card.Img
          className="col-md-5 img-fluid"
          src={image}
        />
        <Card.Body className="col-md-7">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>Info</h4>
            </ListGroup.Item>
            {filtered.map(prop => {
              if (prop.value !== '' && prop.value.length > 0) {
                return (
                  <ListGroup.Item>
                    <p>
                      {prop.key}: <b>{prop.value}</b>
                    </p>
                  </ListGroup.Item>
                )
              } else return null;
            })}
          </ListGroup>
        </Card.Body>
      </div>
    </Card>
  )
}

export default CharacterDetails;
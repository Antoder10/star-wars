import React from 'react';
import Container from 'react-bootstrap/Container';

const Loading = () => {
  return (
    <Container className="loading-container">
      <h3>Content is Loading...</h3>
      <h1 className="h1-loading">
        {`MAY
        THE
        FORCE
        BE WITH
        YOU`}
      </h1>
    </Container>
  )
}

export default Loading;
import React from 'react';

import Container from 'react-bootstrap/Container';

import CardsList from './CardsList';

import useGetCharacters from '../hooks/useGetCharacter';
import useGetFilms from '../hooks/useGetFilms';

const App = () => {
  const [characters] = useGetCharacters();
  const [films] = useGetFilms();

  return (
    <Container>
        <h1 className="header">Star Wars</h1>
      <CardsList title="Characters" items={characters}/>
      <CardsList title="Films" items={films} />
    </Container>
  );
}

export default App;

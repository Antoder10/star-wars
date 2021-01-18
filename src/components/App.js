import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';

import CardsList from './CardsList';

import useGetCharacters from '../hooks/useGetCharacter';
import useGetFilms from '../hooks/useGetFilms';

const App = () => {
  const [characters, getCharacters] = useGetCharacters();
  const [films, getFilms] = useGetFilms();

  return (
    <Container>
        <h1>Star Wars</h1>
      <CardsList title="Characters" items={characters}/>
      <CardsList title="Films" items={films} />
    </Container>
  );
}

export default App;

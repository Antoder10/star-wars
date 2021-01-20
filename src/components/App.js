import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';

import CardsList from './CardsList';
import Loading from './Loading';

import useGetCharacters from '../hooks/useGetCharacter';
import useGetFilms from '../hooks/useGetFilms';

const App = () => {
  const [characters] = useGetCharacters();
  const [films] = useGetFilms();
  const [isLoading] = useState(false);

  return (
    <Container>
      <h1 className="header">Star Wars</h1>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <CardsList title="Characters" items={characters}/>
          <CardsList title="Films" items={films} />
        </>
      )}
    </Container>
  );
}

export default App;

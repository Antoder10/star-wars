import {useState, useEffect} from 'react';

import Swapi from '../api/Swapi';

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, [])

  const fetchCharacters = async () => {
    const response = await Swapi.get('people');
    setCharacters(response.data.results);
  }

  return [characters, fetchCharacters];
}

export default useGetCharacters;
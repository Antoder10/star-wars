import {useState, useEffect} from 'react';

import Akabab from '../api/Akabab';

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, [])

  const fetchCharacters = async () => {
    const response = await Akabab.get('all.json');
    setCharacters(response.data);
  }

  return [characters, fetchCharacters];
}

export default useGetCharacters;
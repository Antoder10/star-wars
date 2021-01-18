import {useState, useEffect} from 'react';

import Swapi from '../api/Swapi';

const useGetFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, [])

  const fetchFilms = async () => {
    const response = await Swapi.get('films');
    setFilms(response.data.results);
  }

  return [films, fetchFilms];
}

export default useGetFilms;
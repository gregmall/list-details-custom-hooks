import { useEffect, useState } from 'react';
import { getById } from '../../services/getById';
import { getNameApi } from '../../services/getNameApi';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getNameApi(page)
    .then(returnedCharacters => setCharacters(returnedCharacters))
    .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};

export const useById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([null]);

  useEffect(()=> {
    getById(id)
    .then(returnedCharacter => setCharacter(returnedCharacter))
    .finally(() => setLoading(false))
  }, [id]);

  return {
    loading,
    character
  };
};

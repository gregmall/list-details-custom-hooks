import React from 'react';
import { useState } from 'react';

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return(
    <>
    <button onClick={() => setPage(page => page -1)}
            disable={page<=1}
    >Previous Page</button>
    <button onClick={() => setPage(page => page +1)}>
      Next Page</button>
    <CharacterList />
    </>
  );
};
export default CharacterPage;

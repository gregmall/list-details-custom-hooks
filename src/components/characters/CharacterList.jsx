import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/characters';
import Character from './Character'
import styles from './CharacterList.css'

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <span><img src="http://cdn.lowgif.com/full/ff8280aafe27319d-ajax-loading-gif-transparent-background-2-gif-images.gif"/></span>


  const characterElements = characters.map(character => (
    
      <li key={character.id} className={styles.item} >
        
        <Link to = {`/detail/${character.id}`}>
          <Character  {...character } />
        </Link>
      </li>
      
    ));

  return (
    
    <ul data-testid="characters" className={styles.display}>
      {characterElements}
    </ul> 
  );
};

CharacterList.propTypes = {
 page: PropTypes.number
};


export default CharacterList;


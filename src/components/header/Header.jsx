
import React from 'react';
import styles from './Header.css'

const Header = () => {
  return (
    <header className={styles.Header}>
  
      <div>
          <img src="src/components/header/Webp.net-resizeimage.png" />
      </div>
      <div>
          <a href="/">HOME</a>
      </div>
      <div>
          <h1>
            RICK AND MORTY
          </h1>
      </div>
    </header>
  );
};
export default Header;

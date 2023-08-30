import React, { useContext } from 'react';
import './Nav.css';
import ContentNav from '../ContentNav/ContentNav';
import pocketContext from '../../../context/pocketContext';

const Nav = () => {
  const {
    displayContent,
  } = useContext(pocketContext);

  return(
  <div className="overflow">
    <div className='nav'>
      {
       displayContent ? displayContent.map((dificult) => <ContentNav dificult={ dificult } />) : null
      }
    </div>
  </div>)
};

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

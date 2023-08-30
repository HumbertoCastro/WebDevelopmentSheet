import React, { useContext } from 'react';
import pocketContext from '../../../context/pocketContext';
import svgs from '../../../Helpers/svg';
import ButtonIcon from '../../Inputs/ButtonIcon/ButtonIcon';
import './Nav.css';
import MainPage from '../../MainContent/MainPage/MainPage';
import { contentReact } from '../../../Helpers/Content';
import ContentNav from '../ContentNav/ContentNav';

console.log('Content', contentReact)

const Nav = () => {

  console.log(contentReact)

  const {
    setPage,
    theme,
  } = useContext(pocketContext);

  const onClick = (pageName) => {
    const buttons = [...document.querySelectorAll('.b-icon')];
    buttons.forEach((x) => x.className = 'b-icon');
    setPage(pageName)
  }

  return(
  <div className="overflow">
    <div className='nav'>
      {
        contentReact.map((dificult) => <ContentNav dificult={ dificult } /> )
      }
    </div>
  </div>)
};

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

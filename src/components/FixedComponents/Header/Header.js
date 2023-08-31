import React, { useContext, useEffect } from 'react';
import './Header.css';
import pocketContext from '../../../context/pocketContext';
import svgs from '../../../Helpers/svg';
import { contentReact, contentCss, contentJavascript } from '../../../Helpers/Content';

const Header = () => {
  const {
    title,
    content,
    setContent,
    setDisplay,
  } = useContext(pocketContext);

  useEffect(() => {
    setDisplay(contentReact);
  }, []);

  const changeClass = (target) => {
    console.log(target.className);
  }

  return (
  <div className="Header row s-btw">
    <div className='row'>
      <h1>{ content }</h1>
    </div>
    <h1 className='title'>{ title }</h1>
    <nav className='row nav-icons'>
      <div className='btn-icon pointer' onClick={ ({ target }) => {
        setContent('Fundamentos do JavaScript');
        setDisplay(contentJavascript);
        changeClass(target);
      } }>
        {
          svgs.javascript
        }
      </div>
      <div className='btn-icon pointer' onClick={ ({ target }) => {
        setContent('Css: Dicas e truques');
        setDisplay(contentCss);
        changeClass(target);
      }  }>
        {
          svgs.css
        }
      </div>
      <div className='btn-icon pointer react-icon' onClick={ ({ target }) => {
        setContent('Aprenda React');
        setDisplay(contentReact); 
        changeClass(target);
      }  }>
        {
          svgs.react
        }
      </div>
    </nav>
  </div>
)};

export default Header;

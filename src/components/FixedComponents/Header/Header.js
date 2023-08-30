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
  }, [])

  return (
  <div className="Header row s-btw">
    <div className='row'>
      <h1>{ content }</h1>
    </div>
    <h1 className='title'>{ title }</h1>
    <nav className='row nav-icons'>
      <div className='btn-icon' onClick={ () => {
        setContent('JavaScript Cheat Sheet');
        setDisplay(contentJavascript);
      } }>
        {
          svgs.javascript()
        }
      </div>
      <div className='btn-icon' onClick={ () => {
        setContent('Css tips and tricks');
        setDisplay(contentCss);
      }  }>
        {
          svgs.css()
        }
      </div>
      <div className='btn-icon react-icon' onClick={ () => {
        setContent('Learn React');
        setDisplay(contentReact); 
      }  }>
        {
          svgs.react()
        }
      </div>
    </nav>
  </div>
)};

export default Header;

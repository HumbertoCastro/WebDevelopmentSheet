import React, { useContext, useEffect } from 'react';
import './Header.css';
import pocketContext from '../../../context/pocketContext';
import svgs from '../../../Helpers/svg';
import { contentReact, contentCss, contentJavascript } from '../../../Helpers/Content';
import { startReact } from '../../../Helpers/StartContents';
import SelectContentBtn from '../../Inputs/SelectContentBtn/SelectContentBtn';

const Header = () => {
  const {
    title,
    content,
    setContent,
    setDisplay,
    setPage,
  } = useContext(pocketContext);

  useEffect(() => {
    setDisplay(contentReact);
  }, []);

  return (
  <div className="Header row s-btw">
    <div className='row'>
      <h1 className='course-title'>{ content }</h1>
    </div>
    <h1 className='header-title'>{ title }</h1>
    <nav className='row nav-icons'>
      <SelectContentBtn text='Fundamentos do JavaScript' content={contentJavascript} svgs={svgs.javascript} page={startReact} />
      <SelectContentBtn text='CSS: Dicas e truques' content={contentCss} svgs={svgs.css} page={startReact} />
      <SelectContentBtn text='Aprenda React' content={contentReact} svgs={svgs.react} page={startReact} />
    </nav>
  </div>
)};

export default Header;

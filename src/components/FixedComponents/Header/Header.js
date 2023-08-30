import React, { useContext } from 'react';
import './Header.css';
import pocketContext from '../../../context/pocketContext';

const Header = () => {
  const {
    title,
  } = useContext(pocketContext);
  return (
  <div className="Header row s-btw">
    <div className='row'>
      <h1>React Cheat sheet</h1>
    </div>
    <h1 className='title'>{ title }</h1>
  </div>
)};

export default Header;

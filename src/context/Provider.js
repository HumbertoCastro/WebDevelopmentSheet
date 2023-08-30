import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pocketContext from './pocketContext';
import MainPage from '../components/MainContent/MainPage/MainPage';

const themes = {
  light: {
    backgroundColor: '#fff',
    textColor: '#404040',
    primaryColor: '#20b2aa',
    secColor: '#008b8b',
    boxShadow: '0px 2px 2px 0px hsla(0,0%,0%,0.14), 0px 3px 1px -2px hsla(0,0%,0%,0.12), 0px 1px 5px 0px hsla(0,0%,0%,0.2);'
  },
  dark: {
    backgroundColor: '#404040',
    textColor: '#404040',
    primaryColor: '#20b2aa',
    boxShadow: '0px 2px 2px 0px white, 0px 3px 1px -2px hsla(0,0%,0%,0.12), 0px 1px 5px 0px hsla(0,0%,0%,0.2);'
  },
};

function Provider({ children }) {
  const [page, setPage] = useState('');
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : themes.light);


  const toggleTheme = () => {
    document.querySelector('body').style.backgroundColor = theme === themes.light ? themes.dark.backgroundColor : themes.light.backgroundColor;
    setTheme(theme === themes.light ? themes.dark : themes.light);
    localStorage.setItem('theme', theme === themes.light ? JSON.stringify(themes.dark) : JSON.stringify(themes.light));
  };


  const contextValue = {
    theme,
    setTheme,
    toggleTheme,
    page,
    setPage,
    title,
    setTitle,
  };

  return (
    <pocketContext.Provider value={ contextValue }>
      {children}
    </pocketContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

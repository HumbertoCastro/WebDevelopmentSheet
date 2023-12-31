import React, { useContext, useEffect } from 'react';
import Header from './components/FixedComponents/Header/Header';
import Nav from './components/FixedComponents/Nav/Nav';
import './App.css'
import pocketContext from './context/pocketContext';
import MainPage from './components/MainContent/MainPage/MainPage';

export default function App() {
  const {
    theme,
  } = useContext(pocketContext);

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = theme.backgroundColor;
  })

  return (
    <div className='App'>
      <Header />
      <div className='row s-btw main-div'>
        <Nav />
        <MainPage/>
      </div>
    </div>
  );
}
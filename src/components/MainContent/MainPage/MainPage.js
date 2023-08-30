import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';
import pocketContext from '../../../context/pocketContext';

const MainPage = () => {
  const {
    page,
  } = useContext(pocketContext);

  useEffect(() => {
    console.log(page)
    // document.querySelector('.MainPage').innerHTML = page;
  }, [page])

  return (
  <div className="MainPage">
    {
      page
    }
  </div>
)};

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;

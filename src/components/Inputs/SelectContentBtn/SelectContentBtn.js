import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './SelectContentBtn.css';
import pocketContext from '../../../context/pocketContext';
import svgs from '../../../Helpers/svg';

const SelectContentBtn = ({ content, page, svgs, text }) => {
  const {
    setContent,
    setDisplay,
    setPage,
  } = useContext(pocketContext);

  const changeClass = (target) => {
    console.log(target.className);
  }

  return (
  <div className='btn-icon pointer react-icon' onClick={ ({ target }) => {
    setContent(text);
    setDisplay(content); 
    changeClass(target);
    setPage(page);
  }  }>
    {
      svgs
    }
  </div>
)};

SelectContentBtn.propTypes = {};

SelectContentBtn.defaultProps = {};

export default SelectContentBtn;

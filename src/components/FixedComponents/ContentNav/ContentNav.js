import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './ContentNav.css';
import pocketContext from '../../../context/pocketContext';
import svgs from '../../../Helpers/svg';

const ContentNav = ({ dificult }) => {
  const [open, setOpen] = useState(false);
  const {
    setPage,
    setTitle,
  } = useContext(pocketContext);



  return (
    <div className='difi'>
      <div className='row s-btw nav-btn' onClick={ () => setOpen(!open) }>
        <div className='main-btn'>{ dificult[0] }</div>
        <div style={ open ? { transform: 'rotate(180deg)', transition: 'transform 150ms ease' } : { transition: 'transform 150ms ease' } }>
          {
            svgs.dropdow()
          }
        </div>
      </div>
    {
      open ? dificult[1].map((content) => {
        console.log(content)
        return (
          <div className='content'>
          <div className='titulo'>{ content[0] }</div>
          <div className='sub-div'>
            {
              content.filter((x) => x !== content[0]).map(y => 
                <div className='sub-btn nav-btn' onClick={() => {
                  setPage(y.conteudo);
                  setTitle(`${content[0]}, ${y.text}`)
                }}>
                  { y.text }
                </div>
              )
            }
          </div>
        </div>
        )
      }) : null
    }
    <hr/>
    </div>
  )
};

ContentNav.propTypes = {};

ContentNav.defaultProps = {};

export default ContentNav;

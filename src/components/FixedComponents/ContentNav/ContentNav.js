import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './ContentNav.css';
import pocketContext from '../../../context/pocketContext';
import svgs from '../../../Helpers/svg';
import logo from '../../../Helpers/logo192.png'

const ContentNav = ({ dificult }) => {
  const [open, setOpen] = useState(false);
  const {
    setPage,
    setTitle,
    title,
  } = useContext(pocketContext);



  return (
    <div className='difi'>
      <div className='row s-btw nav-btn pointer' onClick={ () => setOpen(!open) }>
        <div className='main-btn'>{ dificult[0] }</div>
        <div style={ open ? { transform: 'rotate(180deg)', transition: 'transform 150ms ease' } : { transition: 'transform 150ms ease' } }>
          {
            svgs.dropdow
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
                <div
                  className={
                    title === `${content[0]}, ${y.text}` ? `sub-btn nav-btn pointer clicked` : 'sub-btn nav-btn pointer'
                  } 
                  onClick={() => {
                    setPage(y.conteudo);
                    setTitle(`${content[0]}, ${y.text}`);
                    setOpen(false);
                  }}>
                    <p>
                      {
                        y.text
                      }
                    </p>
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

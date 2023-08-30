import React, { useContext } from 'react';
import pocketContext from '../../../context/pocketContext';


const ButtonIcon = ({ iconSvg, callback, id}) => {
  const btn = document.querySelector(`#div-${id}`);
  const {
    theme,
  } = useContext(pocketContext);
  return (
  <div className="b-icon" id={ `div-${id}` } onClick={ () => {
    callback();
    document.querySelector(`#div-${id}`).className = 'selected b-icon'
  } } style={ { color: btn ? btn.className === 'selected b-icon' ? '#73C0FC' : theme.textColor : theme.textColor } }>
    {
      iconSvg()
    }
  </div>
  )
};

ButtonIcon.propTypes = {};

ButtonIcon.defaultProps = {};

export default ButtonIcon;

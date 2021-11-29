import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TacoFunc = ({ sabor, conSalsa }) => {
  const [showMessage, setShowMessage] = useState(true);
  return (
    <div>
      {showMessage && (
        <p>
          Hola soy un taco de {sabor} y{' '}
          {conSalsa ? 'tengo salsa' : 'no tengo salsa'}
        </p>
      )}
      <button onClick={() => setShowMessage(!showMessage)}>
        hide/show message
      </button>
    </div>
  );
};

TacoFunc.propTypes = {
  sabor: PropTypes.string.isRequired,
  conSalsa: PropTypes.bool,
};

export default TacoFunc;

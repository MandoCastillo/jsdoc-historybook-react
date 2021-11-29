// @ts-check
import React, { useState } from 'react';

/**
 * @typedef Props
 * @prop {string} sabor
 * @prop {boolean} [conSalsa]
 * @prop {number} [numeroDeTortillas]
 */

/**
 * @param {Props} props
 */
const TacoFuncJSDoc = ({ sabor, conSalsa, numeroDeTortillas = 1 }) => {
  /** @type {[boolean, Function]} Message */
  const [showMessage, setShowMessage] = useState(true);
  return (
    <div>
      {showMessage && (
        <p>
          Hola soy un taco de {sabor} y{' '}
          {conSalsa ? 'tengo salsa' : 'no tengo salsa'} con {numeroDeTortillas}{' '}
          {numeroDeTortillas > 1 ? 'tortillas' : 'tortilla'}
        </p>
      )}
      <button onClick={() => setShowMessage(!showMessage)}>
        hide/show message
      </button>
    </div>
  );
};

export default TacoFuncJSDoc;

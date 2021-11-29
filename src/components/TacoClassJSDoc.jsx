// @ts-check
import React, { Component } from 'react';

/**
 * @typedef TacoClassJSDocProps
 * @property {string} sabor
 * @property {boolean} [conSalsa]
 * @property {number} [numeroDeTortillas]
 */

/**
 * @typedef TacoClassJSDocState
 * @property {boolean} showMessage
 */

/**
 * @extends Component<TacoClassJSDocProps>
 */
class TacoClassJSDoc extends Component {
  /** @param {TacoClassJSDocProps} props */
  constructor(props) {
    super(props);
    /** @type {TacoClassJSDocState} */
    this.state = {
      showMessage: true,
    };
  }

  render() {
    const { showMessage } = this.state;
    const { sabor, conSalsa, numeroDeTortillas } = this.props;
    return (
      <div>
        {showMessage && (
          <p>
            Hola soy un taco de {sabor} y{' '}
            {conSalsa ? 'tengo salsa' : 'no tengo salsa'} con{' '}
            {numeroDeTortillas}{' '}
            {numeroDeTortillas > 1 ? 'tortillas' : 'tortilla'}
          </p>
        )}
        <button onClick={() => this.setState({ showMessage: !showMessage })}>
          hide/show message
        </button>
      </div>
    );
  }
}

export default TacoClassJSDoc;

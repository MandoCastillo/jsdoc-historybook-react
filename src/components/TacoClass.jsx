import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TacoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true,
    };
  }
  render() {
    const { showMessage } = this.state;
    const { sabor, conSalsa } = this.props;
    return (
      <div>
        {showMessage && (
          <p>
            Hola soy un taco de {sabor} y{' '}
            {conSalsa ? 'tengo salsa' : 'no tengo salsa'}
          </p>
        )}
        <button onClick={() => this.setState({ showMessage: !showMessage })}>
          hide/show message
        </button>
      </div>
    );
  }
}

TacoClass.propTypes = {
  sabor: PropTypes.string.isRequired,
  conSalsa: PropTypes.bool,
};

export default TacoClass;

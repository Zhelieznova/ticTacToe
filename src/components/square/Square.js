import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {
    handleClick = () => {
      this.props.onClick();
    };

    render() {
      return (
        <button className="square" onClick={this.handleClick}>
          {this.props.value}
        </button>
      );
    }
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {
    handleClick = (e) => {
      console.log(e.target.value);
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

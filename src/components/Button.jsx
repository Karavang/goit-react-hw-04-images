import React from 'react';
import PropTypes from 'prop-types';
export function Button({ handlePer }) {
  console.log(handlePer);
  return (
    <button
      className="Button image"
      onClick={() => {
        handlePer(1);
      }}
    >
      Load more
    </button>
  );
}
Button.propTypes = {
  handlePer: PropTypes.func,
};

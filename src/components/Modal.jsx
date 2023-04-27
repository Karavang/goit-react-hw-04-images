import * as basicLightbox from 'basiclightbox';
import PropTypes from 'prop-types';
export const Modal = ({ image, isFull }) => {
  const full = basicLightbox.create(
    `
  <img width="1400" height="900" src="${image.largeImageURL}">
  `
  );
  // console.log(isFull);
  isFull ? full.show() : full.close();
};
Modal.propTypes = {
  isFull: PropTypes.bool,
  image: PropTypes.object,
};

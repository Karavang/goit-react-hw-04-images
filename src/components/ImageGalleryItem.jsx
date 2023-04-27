import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

export function ImageGalleryItem({ image }) {
  const [isFull, setIsFull] = useState(null);

  return (
    <li
      className="ImageGalleryItem"
      key={image.id}
      onKeyDown={e => {
        if (e.key === 'Escape') {
          setIsFull(false);
        }
      }}
      onClick={() => {
        setIsFull(true);
      }}
    >
      <Modal image={image} isFull={isFull} />
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
}

import React, { useState, useEffect } from 'react';
import { fetchSearch } from 'source/api';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';

// import { ImageGalleryItem } from './ImageGalleryItem';
export function ImageGallery({ searchText, page, handlePer }) {
  console.log(handlePer);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!searchText || !page) {
      return;
    }
    setIsLoading(true);
    fetchSearch(searchText, page)
      .then(hits => {
        console.log(hits);
        console.log(images);
        setImages(i => [...i, ...hits.hits]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText, page]);

  if (images.length !== 0) {
    return (
      <>
        {isLoading && <Loader />}
        {!isLoading && (
          <div>
            <ul className="ImageGallery">
              {images.map(images => (
                <ImageGalleryItem image={images} />
              ))}
            </ul>
            <Button handlePer={handlePer} />
          </div>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  handlePer: PropTypes.func,
  page: PropTypes.number,
  searchText: PropTypes.string,
};

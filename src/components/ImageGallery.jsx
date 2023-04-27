import React, { useState, useEffect } from 'react';
import { fetchSearch } from 'source/api';

import Loader from './Loader';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';

// import { ImageGalleryItem } from './ImageGalleryItem';
export function ImageGallery(searchText, page, handlePer) {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(prevProps => {
    console.log(prevProps.searchText, searchText);
    if (prevProps.searchText !== searchText || prevProps.page !== page) {
      console.log(prevProps);
      console.log(prevProps.page);
      console.log(prevProps.searchText);
      setIsLoading(true);

      fetchSearch(searchText, page)
        .then(hits => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits.hits],
          }));
          setImages(prevState => [...prevState.images, ...hits.hits]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  });

  console.log(images);
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

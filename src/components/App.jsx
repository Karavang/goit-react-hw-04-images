import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { useState } from 'react';

export function App() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const handleSearchText = e => {
    setSearchText(e);
    console.log(searchText);
  };
  const handlePer = e => {
    setPage(prev => prev + e);
    console.log(page);
  };

  console.log(searchText);
  return (
    <>
      <Searchbar searchText={handleSearchText} />
      <ImageGallery searchText={searchText} page={page} handlePer={handlePer} />
    </>
  );
}

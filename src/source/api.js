const API_KEY = '32188250-5588add6a92db6c3bf4a2a30f';
const URL = `https://pixabay.com/api/?key=${API_KEY}`;

export function fetchSearch(searchText, page) {
  console.log(searchText);
  return fetch(
    `${URL}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  ).then(res => res.json());
}

import axios from 'axios';

// Trending Movies
async function fetchTrendingMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=67021554df73ceabb07c793f51310845`
  );
  //   console.log(response.data);
  return response.data;
}
export { fetchTrendingMovies };

// SearchQuery
async function fetchSearchQuery(searchQuery) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=67021554df73ceabb07c793f51310845&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  // console.log(response.data.results);
  return response.data;
}
export { fetchSearchQuery };

// Movie Details
async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=67021554df73ceabb07c793f51310845&language=en-US`
  );
  // console.log(response.data);
  return response.data;
}
export { fetchMovieDetails };

// Cast
async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=67021554df73ceabb07c793f51310845&language=en-US`
  );
  // console.log(response.data);
  return response.data;
}
export { fetchMovieCast };

// Reviews
async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=67021554df73ceabb07c793f51310845&language=en-US&page=1`
  );
  // console.log(response.data.results);
  return response.data.results;
}
export { fetchMovieReviews };

import axios from "axios";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzkwM2EwMDJmNGMzZGJhNjU5NjkzN2NkOWZjNzgwNCIsIm5iZiI6MTcyMzgyODU3NS43ODUxODEsInN1YiI6IjY2YmY3YzhiY2IwZDdkOTk1MDQ5ZTNjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AcHh_HgDEub1K1MZRA6dd_mpPs0ZXunN77Le62wDhak";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common[" Authorization"] = API_KEY;

export const getMovies = async () => {
  const { data } = await axios.get("/trending/movie/week");
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const searchMovie = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
    },
  });
  return data.results;
};

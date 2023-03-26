import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
const Home = lazy(() => import('../pages/home'))
const Movie = lazy(() => import('../pages/movie'))
const Search = lazy(() => import ('../pages/search'))

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='search/search-movies' element={<Search />} />
          <Route path='movies/:movieId' element={<Movie />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div> } />
          </Route>
        </Route>
      </Routes>
  );
};
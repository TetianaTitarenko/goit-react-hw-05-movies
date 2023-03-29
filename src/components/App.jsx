import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Cast from "./cast/cast";
import SharedLayout from "./layout";
import Reviews from "./reviews/reviews";
const Home = lazy(() => import('../pages/home'))
const Movie = lazy(() => import('../pages/movie'))
const Search = lazy(() => import('../pages/search'))

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Search />} />
          <Route path='movies/:id' element={<Movie />}>
          <Route path="cast" element={<Cast />
          } />
            <Route path="reviews" element={<Reviews/> } />
          </Route>
        </Route>
      </Routes>
  );
};
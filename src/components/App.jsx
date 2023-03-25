import { Routes, Route  } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Search from "./pages/search";

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='/trending/:trending' element={<div>список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці</div>} /> */}
        <Route path='search/search-movies' element={<Search />} />
        <Route path='movies/:movieId' element={<Movie />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div> } />
        </Route>
        <Route path='movies/:credits' element={<div>запит інформації про акторський склад для сторінки кінофільму.</div>} />
        <Route path='movies/:reviews' element={<div>запит оглядів для сторінки кінофільму.</div>} />
        </Route>
      </Routes>
  );
};
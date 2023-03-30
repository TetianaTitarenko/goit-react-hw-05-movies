import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL, API_KEY, IMAGE_BASE_URL } from '../components/url';
import css from './home.module.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      if (q === '' || null) return setMovies([]);
      if (movies === [] || null) return setMovies([]);
      try {
        const url = `${BASE_URL}search/movie?query=${q}&${API_KEY}&page=1`;
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
        if (response.data.results.length === 0) {
          toast.error(`No results found for ${q}`);
        }
        setMovies(prefMovie => [...prefMovie, ...response.data.results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData(q);
    return () => {
      abortController.abort();
    };
  }, [q]);

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ q: e.target.value });
  };

  const OnSubmit = e => {
    e.preventDefault();
    if (q === '') {
      return setMovies([]);
    }
    setSearchParams({ q: q });
  };

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={OnSubmit}>
        <input type="text" value={q} onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      <Toaster />
      <ul className={css.ul}>
        {visibleMovies.map(({ id, poster_path, title, name }) => (
          <li key={id} className={css.link}>
            <Link to={`${id}`} state={{ from: location }} className={css.li}>
              <img
                src={`${IMAGE_BASE_URL}w500/${poster_path}`}
                alt={title || name}
                className={css.img}
              />
              <p>{title || name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

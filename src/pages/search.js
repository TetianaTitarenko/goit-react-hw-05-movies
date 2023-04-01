import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL, API_KEY, IMAGE_BASE_URL, noImage } from '../components/url';
import css from './home.module.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState(searchParams.get('q') ?? '');

  const location = useLocation();
  const q = searchParams.get('q') ?? '';

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      if (q === '' || null) return setMovies([]);
      // if (movies === [] || null) return setMovies([]);
      try {
        const url = `${BASE_URL}search/movie?query=${q}&${API_KEY}&page=1`;
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
        if (response.data.results.length === 0) {
          toast.error(`No results found for ${q}`);
        }
        setMovies(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [q]);

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchInput('');
    }
    setSearchInput(e.target.value);
  };

  const OnSubmit = e => {
    e.preventDefault();
    if (searchInput.trim() === '') { 
      return setSearchParams({});
    }
    setSearchParams({ q: searchInput });
    setSearchInput('')
  };

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={OnSubmit}>
        <input type="text" value={searchInput} onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      <Toaster />
      <ul className={css.ul}>
        {visibleMovies.map(({ id, poster_path, title, name }) => (
          <li key={id} className={css.link}>
            <Link to={`${id}`} state={{ from: location }} className={css.li}>
            {poster_path ? (
            <img className={ css.img}
            src={`${IMAGE_BASE_URL}w200/${poster_path}`}
            alt={name}
          />
        ) : (
          <img className={ css.img}
            src={noImage}
            alt={name}
          />
        )}
              <p>{title || name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

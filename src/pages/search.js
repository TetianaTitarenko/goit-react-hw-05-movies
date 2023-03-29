import { useState} from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL, API_KEY } from '../components/url';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? '';

    const onSubmit = e => {
      e.preventDefault();
      const abortController = new AbortController();
    async function fetchData() {
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
    }
    const updateQueryString = e => {
      if (e.target.value === '') {
        return setSearchParams({});        
      }
      setSearchParams({q : e.target.value });
    };
      const visibleMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(q.toLowerCase())
  );

  return <div>
      <h1>Movie</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={q} onChange={updateQueryString}/>
        <button type="submit">Search</button>
      </form>
    <Toaster />
    <ul>
      {visibleMovies.map((movie) => (
      <li key={movie.id}>
        <Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link>
      </li>
    ))}
    </ul>
    </div>
}

export default Search
import { useState, useEffect} from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from 'axios';
// const API_KEY = '88e770eb9f81181b32f3aee56f617fc7';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week`;
// const SEARCH_URL = `${BASE_URL}/search/movie`;
// const MOVIE_DETAILS_URL = `${BASE_URL}/movie/`;
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const Search = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") ?? '';
  
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=88e770eb9f81181b32f3aee56f617fc7&page=1`;
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
          setMovies(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [name]);

    const onSubmit = e => {
      e.preventDefault();
      console.log(name)
    }
    const updateQueryString = e => {
      if (e.target.value === '') {
        return setSearchParams({});
      }
      setSearchParams({name : e.target.value });
    };
      const visibleMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(name.toLowerCase())
    );

    return     <div>
      <h1>Movie</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={updateQueryString}/>
        <button type="submit">Search</button>
      </form>

        {visibleMovies.map((movie) => (<ul key={movie.id}>
            <Link to='/movies/:movieId' state={{from: location}}>{movie.title}</Link>
        </ul>))}
    </div>
}

export default Search
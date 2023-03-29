import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { BASE_URL, API_KEY } from '../components/url';
import axios from 'axios';
import css from './home.module.css'

const Home = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
            const abortController = new AbortController();
    async function fetchData() {
        try {
            const url = `${BASE_URL}trending/movie/day?${API_KEY}`;
            const response = await axios.get(url, {
                signal: abortController.signal,
            });
            setMovies(prefMovie => [...prefMovie, ...response.data.results]);
      } catch (error) {
        console.log(error.message);
      }
    }
        fetchData();
    return () => {
      abortController.abort();
    };
  }, []);
    return <div>
{movies.map((movie) => (<ul key={movie.id}>
  <Link to={`movies/${movie.id}`} className={css.link}>{movie.title}</Link>
      </ul>))
      }
    </div>
}

export default Home
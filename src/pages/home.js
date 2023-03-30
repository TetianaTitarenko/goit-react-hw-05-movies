import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { BASE_URL, API_KEY, IMAGE_BASE_URL } from '../components/url';
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
    return <ul className={css.ul}>
{movies.map(({id, poster_path, title, name}) => (<li className={css.link} key={id}>
  <Link to={`movies/${id}`} className={css.li}>
    <img src={`${IMAGE_BASE_URL}w500/${poster_path}`} alt={title || name} className={css.img} />
    <p>{title || name}</p>
    </Link>
      </li>))
      }
    </ul>
}

export default Home
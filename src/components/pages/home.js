import { useEffect, useState } from "react"
import axios from 'axios';

const Home = () => {
        const [movies, setMovies] = useState([]);
// https://api.themoviedb.org/3/trending/movie/day?api_key=88e770eb9f81181b32f3aee56f617fc7
    console.log(movies)
    
    useEffect(() => {
            const abortController = new AbortController();
    async function fetchData() {
        try {
            const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=88e770eb9f81181b32f3aee56f617fc7`;
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
            <li>{movie.title}</li>
        </ul>))}
    </div>
}

export default Home
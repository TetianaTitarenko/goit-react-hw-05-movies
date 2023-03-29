import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import axios from 'axios';

//https://api.themoviedb.org/3/movie/816904/credits?api_key=88e770eb9f81181b32f3aee56f617fc7&language=en-US
//https://image.tmdb.org/t/p/w500/ + {movieDetails.profile_path}

const Cast = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const { id } = useParams();
    const noImage = 'https://via.placeholder.com/200x300.png?text=No+Image';
    
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData() {
            try {
                const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=88e770eb9f81181b32f3aee56f617fc7&language=en-US`;
                const response = await axios.get(url, {
                    signal: abortController.signal,
                });
                setMovieDetails(response.data.cast);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
        return () => {
        abortController.abort();
        };
    }, [id]);

    return (<ul>
        {movieDetails.map((movieDetail) =>
      (<li key={movieDetail.id}>
        {movieDetail.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieDetail.profile_path}`}
            alt={movieDetail.name}
          />
        ) : (
          <img
            src={noImage}
            alt={movieDetail.name}
          />
        )}
        <h3>{movieDetail.name}</h3>
      </li>))
      }
    </ul>)
}

export default Cast
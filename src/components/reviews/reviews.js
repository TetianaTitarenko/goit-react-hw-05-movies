import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';

// https://api.themoviedb.org/3/movie/804150/reviews?api_key=88e770eb9f81181b32f3aee56f617fc7&language=en-US&page=1

const Reviews = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData() {
            try {
                const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=88e770eb9f81181b32f3aee56f617fc7&language=en-US&page=1`;
                const response = await axios.get(url, {
                    signal: abortController.signal,
                });
                setMovieDetails(response.data.results);
                console.log(response.data.results)
        } catch (error) {
            console.log(error.message);
        }
        }
        fetchData();
        return () => {
            abortController.abort();
        };
    }, [id]);

    return <ul>        
        {movieDetails.map((movieDetail) =>
        (<li key={movieDetail.id}>
            <h2>
                {movieDetail.author}
            </h2>
            <p>
                {movieDetail.content}
            </p>
        </li>))
      }
    </ul>
}

export default Reviews
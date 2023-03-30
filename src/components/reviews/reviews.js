import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL, API_KEY } from '../url';
import axios from 'axios';
import css from "./reviews.module.css"

const Reviews = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData() {
            try {
                const url = `${BASE_URL}movie/${id}/reviews?${API_KEY}&language=en-US&page=1`;
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
        {movieDetails.map(({id, author, content}) =>
        (<li key={id} className={css.li}>
            <h2 className={css.title}>
                {author}
            </h2>
            <p className={css.text}>
                {content}
            </p>
        </li>))
      }
    </ul>
}

export default Reviews
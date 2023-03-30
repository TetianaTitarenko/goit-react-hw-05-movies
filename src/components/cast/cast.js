import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL, API_KEY, IMAGE_BASE_URL, noImage } from '../url';
import axios from 'axios';
import css from "./cast.module.css"

const Cast = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData() {
            try {
                const url = `${BASE_URL}movie/${id}/credits?${API_KEY}&language=en-US`;
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

    return (<ul className={css.ul}>
        {movieDetails.map((movieDetail) =>
      (<li key={movieDetail.id} className={css.li} >
        {movieDetail.profile_path ? (
            <img className={ css.img}
            src={`${IMAGE_BASE_URL}w200/${movieDetail.profile_path}`}
            alt={movieDetail.name}
          />
        ) : (
          <img className={ css.img}
            src={noImage}
            alt={movieDetail.name}
          />
        )}
        <h3 className={css.text}>{movieDetail.name}</h3>
      </li>))
      }
    </ul>)
}

export default Cast
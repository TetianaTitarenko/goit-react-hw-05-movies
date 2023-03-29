import { Suspense, useEffect, useRef, useState } from "react"
import { NavLink, useParams, Outlet, Link, useLocation } from "react-router-dom"
import { BASE_URL, API_KEY, IMAGE_BASE_URL, noImage } from '../components/url';
import axios from 'axios';
import css from './movie.module.css'

const Movie = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([]);
    console.log(id)
    const location = useLocation()
    const backLocationRef = useRef(location.state?.from ?? '/')

    useEffect(() => {
            const abortController = new AbortController();
    async function fetchData() {
        try {
            const url = `${BASE_URL}movie/${id}?${API_KEY}`;
            const response = await axios.get(url, {
                signal: abortController.signal,
            });
            setMovieDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
        fetchData();

    return () => {
      abortController.abort();
    };
    }, [id]);

    const { title, vote_average, overview, poster_path, genres } = movieDetails
    const score = vote_average * 10
    const genreNames = genres && genres.map(genre => genre.name).join(' ');

    return <>
        <Link className={css.backLink} to={backLocationRef.current} >Come back</Link>
        <div className={css.movieDetails}>
            {poster_path ? (
            <img className={css.details}
            src={`${IMAGE_BASE_URL}w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            src={noImage}
            alt={title}
          />
        )}
            <div className={css.movieInfo}>
                <h1>
                    {title}
                </h1>
                <p>
                User Score: {score}%
                </p>
                <h2>
                    Overview
                </h2>
                <p>
                    {overview}
                </p>
                <h2>
                    Genres
                </h2>
                <p>
                    {genreNames}
                </p>
            </div>
        </div>

        <ul>
            <p> Additional information</p>
            <li className={css.link}>
                <NavLink to='cast'>
                    Cast
                </NavLink>                
            </li>
            <li className={css.link}>
                <NavLink to='reviews'>
                  Reviews
                </NavLink>        
            </li>
        </ul>
        <Suspense>
          <Outlet />             
        </Suspense>
    </>
}

export default Movie
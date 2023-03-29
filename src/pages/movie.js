// import Cast from "components/cast/cast"
// import Reviews from "components/reviews/reviews"
import { Suspense, useEffect, useRef, useState } from "react"
import { NavLink, useParams, Outlet, Link, useLocation } from "react-router-dom"
import axios from 'axios';

const Movie = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([]);
    console.log(id)
    const location = useLocation()
    const backLocationRef = useRef(location.state?.from ?? '/')
    const noImage = 'https://via.placeholder.com/200x300.png?text=No+Image';

    // https://api.themoviedb.org/3/movie/343611?api_key=88e770eb9f81181b32f3aee56f617fc7

    useEffect(() => {
            const abortController = new AbortController();
    async function fetchData() {
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=88e770eb9f81181b32f3aee56f617fc7`;
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
        <Link to={backLocationRef.current}>Come back</Link>
        <div>
            {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            src={noImage}
            alt={title}
          />
        )}
            <div>
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
            <p>Additional information</p>
            <li>
                <NavLink to='cast'>
                    Cast
                </NavLink>                
            </li>
            <li>
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
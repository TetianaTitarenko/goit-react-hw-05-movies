import Cast from "components/cast/cast"
import Reviews from "components/reviews/reviews"
import { useEffect } from "react"
import { NavLink, useParams, Outlet, Link } from "react-router-dom"

const Movie = () => {
    const { movieId } = useParams()

    // https://api.themoviedb.org/3/movie/343611?api_key=88e770eb9f81181b32f3aee56f617fc7

    useEffect(() => {
        // http-запит
    }, [])

    return <>
        <Link to='/'>Come back</Link>
        <h1>
        Інформація про фільм {movieId}
        </h1>
        <ul>
            <li>
                <NavLink to='cast'>
                   <Cast />
                </NavLink>                
            </li>
            <li>
                <NavLink to='reviews'>
                  <Reviews /> 
                </NavLink>        
            </li>
        </ul>
          <Outlet />  
    </>
}

export default Movie
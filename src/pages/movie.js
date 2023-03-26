import Cast from "components/cast/cast"
import Reviews from "components/reviews/reviews"
import { useEffect, useRef } from "react"
import { NavLink, useParams, Outlet, Link, useLocation } from "react-router-dom"

const Movie = () => {
    const { movieId } = useParams()
    const location = useLocation()
    const backLocationRef = useRef(location.state?.from ?? '/')
    console.log(location)

    // https://api.themoviedb.org/3/movie/343611?api_key=88e770eb9f81181b32f3aee56f617fc7

    useEffect(() => {
        // http-запит
    }, [])

    return <>
        <Link to={backLocationRef.current}>Come back</Link>
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
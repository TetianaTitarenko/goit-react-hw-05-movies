import Cast from "components/cast/cast"
import Reviews from "components/reviews/reviews"
import { useEffect } from "react"
import { NavLink, useParams, Outlet } from "react-router-dom"

const Movie = () => {
    const { movieId } = useParams()
    // useEffect(() => {
    //     // http-запит
    // }, [])
    return <>
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
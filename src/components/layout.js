import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    return <div>
              <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/search/search-movies'>Search</NavLink>
        <NavLink to='/movies/:movieId'>Movie</NavLink>        
        </nav>
        <main>
          <Outlet />  
        </main>
    </div>
}

export default Layout
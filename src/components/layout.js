import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import css from "./layout.module.css"

const Layout = () => {
  return <div className={css.layout}>
      <ul className={css.nav}>
        <li>
          <NavLink to='/'>Home</NavLink>          
        </li>
        <li>
          <NavLink to='/movies'>Search</NavLink>        
        </li>
      </ul>
      <main className={css.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet /> 
        </Suspense>
      </main>
    </div>
}

export default Layout
import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import css from "./layout.module.css"
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
   &.active {
      color: tomato;
   }
`;

const SharedLayout = () => {
  return <div className={css.layout}>
      <ul className={css.nav}>
        <li>
          <StyledLink to='/'>Home</StyledLink>          
        </li>
        <li>
          <StyledLink to='/movies'>Search</StyledLink>        
        </li>
      </ul>
      <main className={css.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet /> 
        </Suspense>
      </main>
    </div>
}

export default SharedLayout
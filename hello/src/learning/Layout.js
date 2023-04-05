import React from 'react'
import {Outlet,Link} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">CompoEx1</Link>
          </li>
          <li>
            <Link to="/Prop">Prop</Link>
          </li>
          <li>
            <Link to="/EventsReact">EventsReact</Link>
          </li>
          <li>
            <Link to="/todo">ToDO</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
import React from 'react'
import { Route, NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
   render() {
    const styles = {
      navbar:{
        marginBottom:20
      }
    }
      return (
        
        <nav style={styles.navbar}>
          <ul className="">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/about">Немного о хуках</NavLink>
              </li>
              <li>
                <NavLink to="/coordinate">Координаты мышки</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Счетчик (useReducer)</NavLink>
              </li>
            </div>
          </ul>
        </nav>
      )
  }
}

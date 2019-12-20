import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => (
    <nav className={classes.Nav}>
        <ul>
            <li>
                <NavLink to="/" exact activeClassName={classes.Selected}>High Charts</NavLink>
            </li>
            <li>
                <NavLink to="/posts" exact activeClassName={classes.Selected}>Posts</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;
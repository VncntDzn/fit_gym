import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import routes from '../../routes/router';
import '../../styles/navbar.scss';

export default function Navbar() {
    /* const logoLogic = {

    } */
    return (
        <div>
            <nav>
                <ul>
                    <img className="nav__logo--fit" src={require('../../assets/Fit.png')} alt="Fit Logo" />
                    {/* TODO: Use ternary operator to display the hamburger if it's in mobile view */}
                    <img className="nav__logo--hamburger" src={require('../../assets/hamburger.png')} alt="Fit Logo" />

                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__activeLinks" to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__activeLinks" to="/about">ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__activeLinks" to="/contact">CONTACT US</NavLink>
                    </li>

                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__activeLinks" to="/membership">BECOME A MEMBER</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                {routes.map((route, i) => (
                    <Route exact key={i} {...route} />
                ))}
            </Switch>
        </div>
    )
}

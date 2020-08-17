import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import routes from '../../routes/router';
import '../../styles/navbar.scss';

export default function Navbar() {

    return (
        <div>
            <nav>
                <ul>
                    <img src={require('../../assets/Fit.png')} alt="Fit Logo" height="100px" />
                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__links" to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__links" to="/about">ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__links" to="/contact">CONTACT US</NavLink>
                    </li>

                    <li>
                        <NavLink exact style={{ color: "white" }} activeClassName="nav__links" to="/membership">BECOME A MEMBER</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                {routes.map((route, i) => (
                    <Route exact key={i} {...route} />
                ))}
            </Switch>
        </div >
    )
}

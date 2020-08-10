import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import routes from '../../routes/router'
import '../../styles/navbar.scss'
export default function Navbar() {

    return (
        <div>
            <nav>
                <ul>
                    <img src={require('../../assets/Fit.png')} alt="Fit Logo" height="100px" />
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                    <li>
                        <Link to="/membership">BECOME A MEMBER</Link>
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

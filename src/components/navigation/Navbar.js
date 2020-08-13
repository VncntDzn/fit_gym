import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import routes from '../../routes/router';
import '../../styles/navbar.scss';

export default function Navbar() {

    return (
        <div>
            <nav>
                <ul>
                    <img src={require('../../assets/Fit.png')} alt="Fit Logo" height="100px" />
                    <li>
                        <Link style={{ color: "white" }} to="/">HOME</Link>
                    </li>
                    <li>
                        <Link style={{ color: "white" }} to="/about">ABOUT US</Link>
                    </li>
                    <li>
                        <Link style={{ color: "white" }} to="/contact">CONTACT US</Link>
                    </li>

                    <li>
                        <Link className="membLink" to="/membership">BECOME A MEMBER</Link>
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

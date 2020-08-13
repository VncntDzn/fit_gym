import React from 'react';
import "../styles/home.scss";

export default function Home() {
    const h1Styles = {
        color: "white",
        position: "absolute",
        top: "240px",
        zIndex: 2,
        marginLeft: "165px",
    }
    return (
        <div style={{ backgroundColor: "#45595A", display: "flex" }}>
            <div style={{ border: "3px solid green", flex: "50%", }}>
                <section style={h1Styles}>
                    <h1 style={{ fontSize: "70px" }}>Get Fit.</h1>
                    <h1 style={{ fontSize: "70px" }}>Don't Quit.</h1>
                </section>
            </div>
            <div style={{ marginLeft: "30px", position: "relative", zIndex: "1" }}>
                <img style={{ height: "620px", }} src={require('../assets/Group_4.png')} alt="Cross" />
            </div>
            <div style={{ flex: "50%" }}>
                <img style={{ height: "620px", }} src={require('../assets/fit_person.png')} alt="Fit Person" />
            </div>
        </div>
    )
}
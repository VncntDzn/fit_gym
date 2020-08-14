import React from 'react';
import "../styles/home.scss";

export default function Home() {
    const h1Styles = {
        color: "white",
        position: "absolute",
        top: "240px",
        zIndex: 2,
        marginLeft: "80px",

    }
    return (
        <div style={{ backgroundColor: "#45595A", display: "flex", height: "675px", }}>
            <div style={{ flex: "30%" }}>
                <section style={h1Styles}>
                    <h1 style={{ fontSize: "70px", marginLeft: "130px" }}>Get Fit.</h1>
                    <h1 style={{ fontSize: "70px", marginLeft: "130px" }}>Don't Quit.</h1>

                    <div style={{ bottom: "350px", position: "relative", zIndex: "-1" }}>
                        <img style={{ height: "650px", }} src={require('../assets/Group_4.png')} alt="Cross" />
                    </div>
                </section>
            </div>

            <div style={{ flex: "50%", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "45vw", position: "absolute", }}>
                    <img style={{ height: "720px" }} src={require('../assets/fit_person.png')} alt="Fit Person" />
                </div>
            </div>
        </div>
    )
}
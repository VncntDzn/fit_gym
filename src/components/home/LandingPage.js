import React from 'react';
import "../../styles/home.scss";

export default function Home() {
    const slogan = {
        color: "white",
        position: "absolute",
        top: "240px",
        zIndex: 2,
        marginLeft: "-200px"
    }
    return (
        <section style={{ backgroundColor: "#45595A", display: "flex", height: "745px", }}>

            {/* Follow us */}
            <div style={{ color: "white", alignSelf: "flex-end", padding: "30px", }}>
                <div style={{ display: "flex", direction: "row" }}>
                    <div style={{ alignSelf: "center" }}>
                        <p style={{ paddingLeft: "10px", width: "130px" }}>FOLLOW US ON</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={require('../../assets/facebook.png')} alt="Facebook Logo" style={{ height: "50px" }} />
                        <img src={require('../../assets/instagram.png')} alt="Instagram Logo" style={{ height: "50px" }} />
                        <img src={require('../../assets/twitter.png')} alt="Twitter Logo" style={{ height: "50px" }} />
                    </div>
                </div>
            </div>
            {/* Slogan */}
            <div style={{ flex: "20%" }}>
                <div style={slogan}>
                    <h1 style={{ fontSize: "70px", marginLeft: "140px" }}>Get Fit.</h1>
                    <h1 style={{ fontSize: "70px", marginLeft: "140px" }}>Don't Quit.</h1>

                    <div style={{ bottom: "350px", position: "relative", zIndex: "-1" }}>
                        <img style={{ height: "650px", }} src={require('../../assets/Group_4.png')} alt="Cross" />
                    </div>
                </div>
            </div>
            {/* Fit person */}
            <div style={{ flex: "85%", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "45vw", position: "absolute", }}>
                    <img style={{ height: "680px" }} src={require('../../assets/fit_person.png')} alt="Fit Person" />
                </div>
            </div>
        </section>
    )
}
import React from 'react';
import "../styles/home.scss";

export default function Home() {
    const h1Styles = {
        color: "white",
        position: "absolute",
        top: "240px",
        zIndex: 2,
        marginLeft: "-150px"
    }
    return (
        <div style={{ backgroundColor: "#45595A", display: "flex", height: "645px", }}>
            <div style={{ color: "white", alignSelf: "flex-end", padding: "30px", }}>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p style={{ paddingLeft: "10px", width: "130px" }}>FOLLOW US ON</p>

                    <img src={require('../assets/facebook.png')} alt="Facebook Logo" style={{ height: "50px" }} />
                    <img src={require('../assets/instagram.png')} alt="Instagram Logo" style={{ height: "50px" }} />
                    <img src={require('../assets/twitter.png')} alt="Twitter Logo" style={{ height: "50px" }} />

                </div>


            </div>
            <div style={{ flex: "30%" }}>
                <section style={h1Styles}>
                    <h1 style={{ fontSize: "70px", marginLeft: "140px" }}>Get Fit.</h1>
                    <h1 style={{ fontSize: "70px", marginLeft: "140px" }}>Don't Quit.</h1>

                    <div style={{ bottom: "350px", position: "relative", zIndex: "-1" }}>
                        <img style={{ height: "650px", }} src={require('../assets/Group_4.png')} alt="Cross" />
                    </div>
                </section>
            </div>

            <div style={{ flex: "75%", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "45vw", position: "absolute", }}>
                    <img style={{ height: "680px" }} src={require('../assets/fit_person.png')} alt="Fit Person" />
                </div>
            </div>




        </div>
    )
}
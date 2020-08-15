import React from 'react';


export default function Accomplishments() {
    return (
        <section style={{ backgroundColor: "white" }}>

            <div style={{ backgroundColor: "#45595A", color: "white", padding: "50px" }}>
                <div>
                    <h2>Accomplishments</h2>
                    <hr style={{ width: "13.5vw", border: "1.5px solid yellowgreen" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "50px" }}>
                    <div style={{ textAlign: "center" }}>
                        <img src={require('../../assets/time.png')} height="150px" alt="Time Logo" />
                        <h3>1999+</h3>
                        <p>WORKING HOURS</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img src={require('../../assets/heart.png')} height="150px" alt="Heart Logo" />
                        <h3>500+</h3>
                        <p>HAPPY CLIENTS</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img src={require('../../assets/like.png')} height="150px" alt="Like Logo" />
                        <h3>500+</h3>
                        <p>HAPPY CLIENTS</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img src={require('../../assets/diamond.png')} height="150px" alt="Diamond Logo" />
                        <h3>800+</h3>
                        <p>PERFECT BODIES</p>
                    </div>
                </div>

            </div>
            <hr />
        </section>
    )
}

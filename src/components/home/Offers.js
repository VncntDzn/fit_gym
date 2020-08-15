import React from 'react';

export default function Offers() {
    return (
        <section style={{ backgroundColor: "white" }}>
            <h1 style={{paddingLeft:"30px"}}>What We Offer</h1>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "50%", boxShadow: " 0 20px 40px 4px", transition: "0.3s", margin: "20px" }}>
                    <div style={{ backgroundColor: "#45595A" }}>
                        <h1 style={{ color: "white", padding: "20px" }}>Workout Title</h1>
                    </div>
                    <img src={require('../../assets/Aboutus.png')} alt="About Us" style={{ padding: "50px 150px 50px 150px" }} />
                    <div style={{ backgroundColor: "#45595A" }}>
                        <p style={{ color: "white", padding: "30px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div style={{ flex: "50%", boxShadow: " 0 20px 40px 4px", transition: "0.3s", margin: "20px" }}>
                    <div style={{ backgroundColor: "#45595A" }}>
                        <h1 style={{ color: "white", padding: "20px" }}>Workout Title</h1>
                    </div>
                    <img src={require('../../assets/Aboutus.png')} alt="About Us" style={{ padding: "50px 150px 50px 150px" }} />
                    <div style={{ backgroundColor: "#45595A" }}>
                        <p style={{ color: "white", padding: "30px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                {/* <div style={{ flex: "25%", boxShadow: " 0 20px 40px 4px", transition: "0.3s", margin: " 0px 0" }}>

                    <img src={require('../../assets/Aboutus.png')} alt="About Us" style={{ padding: "50px" }} />
                </div> */}

            </div>
        </section>
    )
}
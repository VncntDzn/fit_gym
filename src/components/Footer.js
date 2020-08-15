import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
    return (
        <section style={{ color: "white" }}>
            <footer style={{ display: "flex" }}>
                <div style={{ flex: "50%", padding: "50px 100px 60px 100px" }}>
                    <h2>Fit Gym</h2>
                    <article style={{ width: "500px" }}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </article>
                </div>
                <div style={{ flex: "50%", padding: "50px 100px 60px 100px", marginLeft: "50px" }}>
                    <h2>Social Media</h2>
                    <img src={require('../assets/facebook.png')} alt="Facebook Logo" />
                    <img src={require('../assets/instagram.png')} alt="Instagram Logo" />
                    <img src={require('../assets/twitter.png')} alt="Twitter Logo" />
                </div>

            </footer>
            <hr></hr>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <h4 style={{ margin: "10px" }}>FIT GYM INC.</h4>
            </div>
        </section>
    )
}
import React from 'react';
import '../../styles/about.scss';

export default function About() {
    return (
        <section id="about">
            <main style={{ display: "flex", color: "white" }}>
               
                <div className="rightSide" style={{ flex: "50%", padding: "50px" }}>
                    <h3>About Us</h3>
                    <article style={{ padding: "35px", letterSpacing: '1px' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        
                    </article>
                </div>
                <div style={{ flex: "50%", backgroundColor: "white", padding: "50px" }}>left side</div>
            </main>
        </section>
    )
}
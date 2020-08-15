import React from 'react';
import '../styles/about.scss';

export default function About() {
    return (
        <section>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "50%" }}>left side</div>
                <div className="rightSide" style={{ flex: "50%" }}>right side</div>
            </div>
        </section>
    )
}
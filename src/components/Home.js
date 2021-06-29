import React from "react";
import './style.css';

function Home() {
    return (
        <div className="hero-image" style={{ backgroundImage: "url(https://wallpaperaccess.com/full/2502689.jpg)" }}>
            <div className="hero-text">
                <p>Hi, I'm Lauren Wenzel</p>
                <h2>And I like to make things on the internet!</h2>
            </div>
        </div>

    );
}

export default Home;
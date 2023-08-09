import React from "react";
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <div>
            <h1>Welcome to DevCards!</h1>
            <h2>Create online business cards in seconds</h2>
            <Link to="create-card"><button>Get Started</button></Link>
        </div>
    );
};

export default Hero;
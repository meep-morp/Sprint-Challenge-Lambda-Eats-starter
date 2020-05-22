import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="homepage">
            <h1>LambdaEats</h1>
            <Link to="/pizza">Order Here!</Link>
        </div>
    )
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <section className="form-panel">
        <nav className="header">
          <Link to="Login">Login</Link>
        </nav>
        <section className="information-form">
          <h2>
            <span>Meet</span>ToCycling
          </h2>
          <p className="information-paragraph">
            Connect with other cyclists and find new friends or your Love!
          </p>
          <section className="register-form">
            <p>I am:</p>
            <input type="text" />
            <a href="#">NEXT</a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Home;

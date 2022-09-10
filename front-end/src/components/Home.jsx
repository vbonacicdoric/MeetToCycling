import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/fotocortada2.png";

const Home = () => {
  return (
    <section className="home">
      {/* first Banner */}
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
      {/* Second Banner */}
      <section className="information-panel">
        <h2 style={{ textAlign: "center" }}>
          Welcome to <br /> <span>Meet</span>ToCycling
        </h2>
        <div className="information-container">
          <div className="information-text">
            <h3>
              <span>Share</span> your lifestyle on <br /> <span>Meet</span>
              ToCycling!
            </h3>
            <p>
              Our members range from people who enjoy riding bikes and love to
              use them occasionally, to die-hard cyclists who want to find love
              or friends{" "}
            </p>
          </div>
          <img src={photo} alt="" />
        </div>
        <div className="information-steps">
          <div className="step">
            <p className="step-number">1</p>
            <div className="step-text">
              <h4>signing up is very easy</h4>
              <p>
                Sign up in minutes and enjoy all the benefits of premium
                membership.There is no way to get bored!.{" "}
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step-number">2</p>
            <div className="step-text">
              <h4>signing up is very easy</h4>
              <p>
                Sign up in minutes and enjoy all the benefits of premium
                membership.There is no way to get bored!.{" "}
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step-number">3</p>
            <div className="step-text">
              <h4>signing up is very easy</h4>
              <p>
                Sign up in minutes and enjoy all the benefits of premium
                membership.There is no way to get bored!.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Link to="/">ABOUT ME</Link>
        <Link to="/">CONTACT US</Link>
        <Link to="/">LOG IN</Link>
        <Link to="/">SIGN UP</Link>
        <Link to="/">PRIVACY POLICY</Link>
      </footer>
      <div style={{ width: "100%", height: " 50px" }}></div>
    </section>
  );
};

export default Home;

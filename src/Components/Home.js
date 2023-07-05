import React from "react";
import "../Css/Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { Typewriter } from "./Typewriter";
import { Navbar } from "./Navbar";
import "./Writter";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <header id="header" className="vh-100 flex">
        <div className="container">
          <div className="header-content">
            <h1> I am a </h1>
            <br />
            <h1>
              <Typewriter></Typewriter>
            </h1>

            <h3 style={{ fontFamily: "serif" }}>Deepak Abhishek</h3>

            <ul className="social-links">
              <li>
                <a
                  href="#facebook"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://mobile.twitter.com/thecafeboy"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/thecafeboy?igshid=Mzc0YWU1OWY="
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="about py-7">
          <div className="container">
            <div className="about-content grid">
              <div className="about-left">
                <img src={require("../images/about-pic.jpg")} alt="" />
              </div>
              <div className="about-right">
                <div className="title">
                  <h2>About Me</h2>
                </div>
                <p className="lead">
                  Professional photographer Deepak Abhishek combines his photography
                  degree with his marketing degree to find the right balance
                  between creativity and commercial sinse. Deepak  is an
                  experienced all round photographer .
                </p>
                <p className="lead">
                  We can checkout his recent works and experiences below. He
                  considers photography as his passion more than profession.
                </p>
                <a href="#work" className="btn-down">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of about section --> */}

        {/* <!-- work section --> */}
        <section id="work" className="vh-100 flex py-7">
          <div className="container">
            <div className="work-content">
              <div className="title">
                <h2>what am i doing?</h2>
              </div>
              <ul className="work-top grid">
                <li className="lead">
                  <i className="fas fa-dot-circle"></i> We work according to the
                  guidelines of the Futuremax Studios of Digital Photography
                  with regard to color management and file handling.
                </li>
                <li className="lead">
                  <i className="fas fa-dot-circle"></i> Your files will be
                  stored multiples times on two locations
                </li>
               
                <li className="lead">
                  <i className="fas fa-dot-circle"></i> We always have back-up
                  equipment at hand, also on location.
                </li>
              </ul>

              <div className="work-bottom grid">
                <div>
                  <span className="icon">
                    <img src={require("../images/wildlife-icon.png")} alt="" />
                  </span>
                  <h3>Wildlife</h3>
                </div>
                <div>
                  <span className="icon">
                    <img src={require("../images/portrait-icon.png")} alt="" />
                  </span>
                  <h3>Portrait</h3>
                </div>
                <div>
                  <span className="icon">
                    <img src={require("../images/landscape-icon.png")} alt="" />
                  </span>
                  <h3>Landscape</h3>
                </div>
                <div>
                  <span className="icon">
                    <img src={require("../images/family-icon.png")} alt="" />
                  </span>
                  <h3>Family</h3>
                </div>
              </div>
              <a href="#portfolio" className="btn-down btn-down-white">
                <i className="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </section>
        <section id="portfolio" className="vh-100 py-7">
          <div className="container">
            <div className="portfolio-content">
              <div className="title">
                <h2>my last works</h2>
                <a href="#contact" className="btn-down">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>

              <div className="portfolio-grid grid">
                <div>
                  <img src={require("../images/1.5.1 (1).jpg")} alt="" />
                </div>

                {/* <div>
                  <img src={require("../images/1.2.jpg")} alt="" />
                </div> */}
                <div>
                  <img src={require("../images/1.3.jpg")} alt="" />
                </div>
                <div>
                  <img src={require("../images/1.4.jpg")} alt="" />
                </div>
                <div>
                  <img src={require("../images/1.5.jpg")} alt="" />
                </div>
                <div>
                  <img src={require("../images/1.6.jpg")} alt="" />
                </div>
                {/* <div>
                  <img src={require("../images/1.7.jpg")} alt="" />
                </div>
                <div>
                  <img src={require("../images/1.8.JPG")} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-7">
          <div className="container">
            <div className="contact-content flex">
              <div className="contact-left">
                <div className="title">
                  <h2>contact with me</h2>
                </div>
                <p className="lead">
                  <i className="fas fa-phone-alt"></i> +91 9973050040
                </p>
                <p className="lead">
                  <i className="fas fa-envelope"></i> thecafeboy@gmail.com
                </p>
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name here ..."
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email here"
                  />
                  <input
                    type="submit"
                    className="btn-submit btn"
                    value="Submit"
                  />
                </form>
              </div>

              <div className="contact-right">
                <img
                  src={require("../images/contact-pic.jpg")}
                  alt="contact_image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section id="insta" className="py-7">
          <div className="container">
            <div className="insta-content">
              <div className="title">
                <h2>instagram</h2>
                <a href="#footer" className="btn-down btn-down-white">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
              <div className="insta-grid grid">
                <div>
                  <img src={require("../images/i-2.JPG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-3.JPG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-4.JPG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-5.JPG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-6.JPG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-7.JPG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-8.JPEG")} alt="" />
                </div>
                <div>
                  <img src={require("../images/i-9.JPG")} alt="" />
                </div>

              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- end of instagram section --> */}
      </main>
      {/* <!-- end of main content --> */}

      {/* <!-- footer --> */}
      <footer id="footer" className="py-7">
        <div className="container">
          <div className="footer-content">
            <div>
              <div>
                <img src={require("../images/about-pic.jpg")} alt="" />
              </div>
              <h3>Deepak Abhishek</h3>

            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end of footer --> */}

      {/* <!-- typewriting js --> */}
      <script src="./typewriting-master/typewriting.js"></script>
    </div>
  );
};

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from './components/Footer';
import Home from "./components/Home/Home";

import logo from './assets/img/logo.png';

function Login() {
    return <Home />;
}

function App() {
  return (
    <div className="App">
        <Router>
            <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html">
                                    <img src={logo} alt="logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                     id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="cource.html">Courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="blog.html">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                        <li className="d-none d-lg-block">
                                            <Link className="btn_1" to="/login/">Login</Link>
                                        </li>
                                        <li className="d-none d-lg-block">
                                            <a className="btn_1" href="#sing-in">Registrarse</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <Route path="/login" exact component={Login} />
        </Router>
        <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Routes from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/posts"
                    className="nav-link active"
                    aria-current="page"
                  >
                    POSTS
                  </Link>
                </li>
              </ul>
              <ul
                className="navbar-nav ms-auto mb-2 mb-lg-0"
                role="search"
              ></ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />
    </div>
  );
}

export default App;

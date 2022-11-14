import React from "react";
import "../Styles/cards.scss";
import "../Styles/index.scss";

export const NavBar = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top "
    >
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <img
            src="https://i.ibb.co/tqSS9pm/logo-gustavopagano.png"
            alt="logo-GAP"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#carrousel"
              >
                Presentación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#tech">
                Tecnologías
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#cards">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#formation">
                Formación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#footer">
                Redes Sociales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

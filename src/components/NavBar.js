import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import lego from "../assets/icons/lego.svg";
import lego_white from "../assets/icons/lego-white.svg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoDownload } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  return (
    <Router>
      <Navbar expand="md" className={`nav-style light`}>
        <Container className="container-width container-height container-justify">
          <Navbar.Brand href="/">
            <div className="lego-housing">
              <img
                className="logo"
                src={lego}
                alt="Logo"
              />
            </div>
          </Navbar.Brand>
          <span className="navbar-text">
              <div className="hor-spacer"></div>
              <div
                className="social-icon"
              >
                <IoDownload className="reload-img" /> Download
              </div>
            </span>
        </Container>
      </Navbar>
    </Router>
  );
};

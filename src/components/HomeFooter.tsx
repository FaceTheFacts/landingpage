import logo from "../assets/images/Logo_without_text.svg";
import "./HomeFooter.css";
import SocialMediaLinks from "./SocialMediaLinks";
import React from "react";
import { NavLink } from "react-router-dom";

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const HomeFooter: React.FC = () => {
  /* This is returned when using this component */

  return (
    <div className="nav-footer">
      <NavLink id="home" to={"/"}>
        <img src={logo} alt="logo" />
        <span>Face The Facts</span>
      </NavLink>
      <div className="footer-media-links">
        <div className="social-media-bottom">
          <SocialMediaLinks position="bottom" />
        </div>
        <div className="homefooter-links">
          <NavLink
            id="about-us-bottom"
            to={"/about-us"}
            className={({ isActive }) =>
              isActive
                ? "homefooter-navbar homefooter-navbar-activ homefooter-navbar-second"
                : "homefooter-navbar homefooter-navbar-second"
            }
          >
            Über uns
          </NavLink>
          <NavLink
            id="privacy-bottom"
            to={"/privacy"}
            className={({ isActive }) =>
              isActive
                ? "homefooter-navbar homefooter-navbar-activ homefooter-navbar-second"
                : "homefooter-navbar homefooter-navbar-second"
            }
          >
            Datenschutz
          </NavLink>
          <NavLink
            id="legal-notice-bottom"
            to={"/legal-notice"}
            className={({ isActive }) =>
              isActive
                ? "homefooter-navbar homefooter-navbar-activ homefooter-navbar-second"
                : "homefooter-navbar homefooter-navbar-second"
            }
          >
            Impressum
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;

/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLilnk from "../../../Components/ActiveLink/ActiveLilnk";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [showDev, setShowDev] = useState();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then(() => {});
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            The Cooker
          </Link>
          <div
            className={isMenuOpen ? "navbar-menu active" : "navbar-menu"}
            onClick={handleMenuClick}
          >
            <div className="navbar-menu-icon">
              <div className="navbar-menu-line"></div>
              <div className="navbar-menu-line"></div>
              <div className="navbar-menu-line"></div>
            </div>
          </div>
          <ul className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
            <li className="navbar-item">
              <ActiveLilnk to="/" className="navbar-link">
                Home
              </ActiveLilnk>
            </li>
            <li className="navbar-item">
              <ActiveLilnk to="/blog" className="navbar-link">
                Blog
              </ActiveLilnk>
            </li>

            {user ? (
              <>
                <li className="navbar-item" style={{ position: "relative" }}>
                  <img
                    src={user?.photoURL}
                    alt=""
                    onMouseOver={() => setHover(user?.displayName)}
                    onMouseOut={() => setHover("")}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  />
                  {hover && (
                    <div
                      style={{
                        position: "absolute",
                        backgroundColor: "gray",
                        color: "#fff",
                        height: "50px",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "300px",
                        right: "0",
                      }}
                    >
                      <h2>
                        <b>Your Name:</b> <small>{hover}</small>
                      </h2>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <li className="navbar-item">
                <ActiveLilnk to="/login" className="navbar-link">
                  Login
                </ActiveLilnk>
              </li>
            )}

            {/* <li className="navbar-item">
              <ActiveLilnk to="/register" className="navbar-link">
                Sign Up
              </ActiveLilnk>
            </li> */}
            {/* <span onClick={handleLogOut} className="navbar-item">
              <button to="/login" className="navbar-link">
                Log Out
              </button>
            </span> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

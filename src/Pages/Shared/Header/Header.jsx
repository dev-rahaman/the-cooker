/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLilnk from "../../../Components/ActiveLink/ActiveLilnk";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [showDev, setShowDev] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setHover("");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef]);

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
                    // onMouseOut={() => setHover("")}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  />
                  {hover && (
                    <div
                      ref={containerRef}
                      className="container"
                      style={{
                        position: "absolute",
                        backgroundColor: "gray",
                        color: "#fff",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "350px",
                        right: "0",
                      }}
                    >
                      <h2 style={{ marginBottom: "20px" }}>
                        <b>Your Name:</b> <small>{hover}</small>
                      </h2>
                      <span
                        onClick={handleLogOut}
                        className="navbar-item"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          to="/login"
                          className="navbar-link"
                          style={{
                            padding: "10px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            style={{ width: "20px" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                            />
                          </svg>
                          Log Out
                        </button>
                      </span>
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

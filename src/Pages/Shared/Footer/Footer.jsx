/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLilnk";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <Link to="/">
              <h4>The Cooker</h4>
            </Link>
            <p style={{ fontSize: "20px" }}>
              As a chef, you have the power to turn ordinary ingredients into
              extraordinary dishes. Your creativity, passion, and attention to
              detail can transform a simple meal into a work of art.
            </p>
          </div>
          <div className="footer-column">
            <h4>Ingredients</h4>
            <div>
              <ul>
                <Link to="https://the-cooker-52354.web.app/chefs/1">
                  <li
                    style={{
                      display: "flex",
                      border: "1px solid gray",
                      padding: "5px",
                    }}
                  >
                    <img
                      src="https://i.postimg.cc/q7QLjcTq/recipe1.jpg"
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        border: "1px solid gray",
                      }}
                    />
                    <div style={{ margin: "10px" }}>
                      {" "}
                      <h5 style={{ fontSize: "16px" }}>
                        As a chef, you have the
                      </h5>
                      <p>
                        Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                      </p>
                    </div>
                  </li>
                </Link>
                <Link to="https://the-cooker-52354.web.app/chefs/2">
                  <li
                    style={{
                      display: "flex",
                      border: "1px solid gray",
                      padding: "5px",
                    }}
                  >
                    <img
                      src="https://i.postimg.cc/MpSNLYhm/recipe10.jpg"
                      alt=""
                      style={{ width: "100px", border: "1px solid gray" }}
                    />
                    <div style={{ margin: "10px" }}>
                      {" "}
                      <h5 style={{ fontSize: "16px" }}>
                        As a chef, you have the
                      </h5>
                      <p>
                        Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                      </p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <h4>Popular</h4>
            <div>
              <Link to="https://the-cooker-52354.web.app/chefs/3">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/13r21qSh/recipe11.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      As a chef, you have the
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                    </p>
                  </div>
                </li>
              </Link>
              <Link to="https://the-cooker-52354.web.app/chefs/4">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/8Ck3pzkF/recipe12.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      As a chef, you have the
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                    </p>
                  </div>
                </li>
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <div>
              <Link to="https://the-cooker-52354.web.app/chefs/5">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/wvvkPtqV/recipe2.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      As a chef, you have the
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                    </p>
                  </div>
                </li>
              </Link>
              <Link to="https://the-cooker-52354.web.app/chefs/6">
                <li
                  style={{
                    display: "flex",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/13r21qSh/recipe11.jpg"
                    alt=""
                    style={{ width: "100px", border: "1px solid gray" }}
                  />
                  <div style={{ margin: "10px" }}>
                    {" "}
                    <h5 style={{ fontSize: "16px" }}>
                      As a chef, you have the
                    </h5>
                    <p>
                      Quis sed mid elit, risus aliquet placerat. Pid et, vel..
                    </p>
                  </div>
                </li>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

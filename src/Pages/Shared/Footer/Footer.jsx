/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import ActiveLilnk from "../../../Components/ActiveLink/ActiveLilnk";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h4>The Cooker</h4>
            <p style={{ fontSize: "20px" }}>
              As a chef, you have the power to turn ordinary ingredients into
              extraordinary dishes. Your creativity, passion, and attention to
              detail can transform a simple meal into a work of art. With each
              dish you create, you have the opportunity to delight the senses
              and bring joy to those who savor your culinary creations. So keep
              experimenting, keep learning, and keep pushing the boundaries of
              what`s possible in the kitchen. The world is waiting to taste your
              next masterpiece!
            </p>
          </div>
          <div className="footer-column">
            <h4>Ingredients</h4>
            <ul>
              <li>
                <ActiveLilnk to="/vegetables">Vegetables</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/fruits">Fruits</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/meat">Meat</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/dairy">Dairy</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/grains">Grains</ActiveLilnk>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Popular</h4>
            <ul>
              <li>
                <ActiveLilnk to="/chocolatechipcookies">
                  Chocolate Chip Cookies
                </ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/pestopasta">Pesto Pasta</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/chickenparmesan">
                  Chicken Parmesan
                </ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/tacosalad">Taco Salad</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/spaghettiandmeatballs">
                  Spaghetti and Meatballs
                </ActiveLilnk>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>
                <ActiveLilnk to="/contactus">Contact Us</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/privacypolicy">Privacy Policy</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/termsandconditions">
                  Terms and Conditions
                </ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/sitemap">Site Map</ActiveLilnk>
              </li>
              <li>
                <ActiveLilnk to="/Nnewslettersignup">
                  Newsletter Signup
                </ActiveLilnk>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

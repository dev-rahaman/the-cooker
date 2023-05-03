/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Card = ({ data }) => {
  const {
    chef_id,
    numbersOfRecipes,
    chefPicture,
    chefName,
    yearsOfExperience,
    bio,
    address,
    description,
    chefBanner,
    chefLikes,
  } = data;
  return (
    <div
      style={{
        width: "280px",
        backgroundColor: "#E8ECF0",
        margin: "20px",
        borderRadius: "10px",
        height: "550px",
        color: "#000",
      }}
    >
      <p>{chef_id}</p>
      <LazyLoad
        height={280}
        width={240}
        threshold={0.95}
        onContentVisible={() => {
          // console.log("loaded!");
        }}
      >
        <img
          style={{
            width: "280px",
            height: "240px",
            padding: "10px",
            borderRadius: "10px",
          }}
          src={chefPicture}
          alt="Chef Picture"
          className="chef-picture"
        />
      </LazyLoad>
      ;
      <div style={{ marginLeft: "10px", lineHeight: "27px" }}>
        <h2
          className="chef-name"
          style={{ fontSize: "30px", marginBottom: "10px", height: "50px" }}
        >
          Name: {chefName}
        </h2>
        <p className="years-of-experience" style={{ fontSize: "20px" }}>
          Experience {yearsOfExperience}
        </p>
        <p className="num-recipes" style={{ fontSize: "20px" }}>
          Number of recipe {numbersOfRecipes}
        </p>
        <p className="likes" style={{ fontSize: "20px" }}>
          Likes: {chefLikes}
        </p>
        <button
          className="view-recipes-button"
          style={{
            fontSize: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            padding: "8px",
            textDecoration: "none",
          }}
        >
          <Link to={`chefs/${chef_id}`} style={{ textDecoration: "none" }}>
            View Recipes
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;

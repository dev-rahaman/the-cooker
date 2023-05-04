/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "../Recepeis/Recipes";

const Chef = () => {
  const loadData = useLoaderData();
  const {
    numbersOfRecipes,
    chefName,
    yearsOfExperience,
    bio,
    description,
    chefLikes,
    chefBanner,
  } = loadData;

  return (
    <>
      <div className="chef-recipe-card">
        <img
          className="chef-picture-chefBanner"
          src={chefBanner}
          alt="Chef Picture"
        />
        <div style={{ marginLeft: "10px", lineHeight: "27px" }}>
          <h2
            className="chef-name"
            style={{ fontSize: "30px", marginBottom: "10px" }}
          >
            Name: {chefName}
          </h2>
          <p className="years-of-experience" style={{ fontSize: "20px" }}>
            <b>BIO</b> {bio}
          </p>
          <p className="num-recipes" style={{ fontSize: "20px" }}>
            <b>Description</b> {description}
          </p>
          <p className="likes" style={{ fontSize: "20px" }}>
            <b> Likes: </b>
            {chefLikes}
          </p>
          <p className="likes" style={{ fontSize: "20px" }}>
            <b> Numbers Of Recipes: </b>
            {numbersOfRecipes}
          </p>
          <p className="likes" style={{ fontSize: "20px" }}>
            <b> Year Of Experience: </b>
            {yearsOfExperience}
          </p>
        </div>
        <Recipes loadData={loadData}></Recipes>
      </div>
    </>
  );
};

export default Chef;

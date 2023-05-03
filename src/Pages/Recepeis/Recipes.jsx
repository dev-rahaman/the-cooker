/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./recipe/recipe";

const Recipes = ({ loadData }) => {
  const recipe = loadData.recipes;
  // const recipe = loadData;
  // console.log(recipe);

  return (
    <div className="chef-card">
      {recipe.map((nr, idx) => (
        <Recipe key={idx} nr={nr}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;

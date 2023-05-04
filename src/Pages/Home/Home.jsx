/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import PopularChef from "../../Components/PopularChef/PopularChef";
import LatestRecipes from "../../Components/LatestRecipes/LatestRecipes";
import RandomChef from "../../Components/RandomChef/RandomChef";
import Tabs from "../../Components/Tabs/Tabs";
import CountdownTimer from "../../Components/CountdownTimer/CountdownTimer";

const Home = () => {
  const loadData = useLoaderData();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Slider></Slider>
      <div style={{ display: "flex" }}>
        <div className="chef-card">
          {loadData.map((data, idx) => (
            <Card data={data} key={idx}></Card>
          ))}
        </div>

        <div
          style={{
            width: "30%",
          }}
        >
          <div
            style={{ backgroundColor: "#cbd5e1" }}
            className="bgcOnHomeRightSide"
          >
            {" "}
            <PopularChef></PopularChef>
          </div>
          <div
            style={{ backgroundColor: "#64748b" }}
            className="bgcOnHomeRightSide"
          >
            {" "}
            <LatestRecipes></LatestRecipes>
          </div>
          <div
            style={{ backgroundColor: "#cbd5e1" }}
            className="bgcOnHomeRightSide"
          >
            {" "}
            <RandomChef></RandomChef>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", margin: "50px 0" }}>
        <div
          style={{
            marginLeft: "27px",
            backgroundColor: "#efefef",
            padding: "10px",
            borderRadius: "10px",
            width: "50%",
          }}
        >
          <Tabs></Tabs>
        </div>
        <div
          style={{
            marginLeft: "27px",
            backgroundColor: "#efefef",
            padding: "10px",
            borderRadius: "10px",
            width: "50%",
          }}
        >
          <CountdownTimer></CountdownTimer>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const PopularChef = () => {
  const [lodging, setLodging] = useState(false);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-blue.vercel.app/ranking/1")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div>
      <h2>Popular Chef`s</h2>
      {popular.map((data, idx) => (
        <div key={idx} style={{ margin: "10px", display: "flex" }}>
          <div>
            <img src={data.chefPicture} alt="" style={{ width: "150px" }} />
          </div>
          <div style={{ margin: "10px" }}>
            <h2>Name: {data.chefName}</h2>
            <p
              style={{
                marginTop: "10px",
                display: "flex",
                alignContent: "center",
              }}
            >
              <span>
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                </svg>
              </span>{" "}
              {data.chefLikes}
            </p>
            <p
              style={{
                marginTop: "10px",
                display: "flex",
                alignContent: "center",
              }}
            >
              <span>
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              {data.recipes[0].ratting}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularChef;

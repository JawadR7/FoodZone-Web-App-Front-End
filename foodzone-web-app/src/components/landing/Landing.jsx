import React from "react";
import { Main } from "./Styles";

const Landing = () => {
  return (
    <Main>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="headline">
            <h1>Get the best delivery possible!</h1>
            <h3>
              Search for restaurants and choose the quickest, cheapest delivery
              option for you.
            </h3>
          </div>
          <div className="col-md-12">
            <form action="">
              <input
                className="search-bar"
                type="text"
                placeholder="Enter Address"
                name="search"
              ></input>
              <a className="search-btn" href="../RestaurantList">
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Landing;

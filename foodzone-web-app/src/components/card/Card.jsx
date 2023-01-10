import React from "react";
import { SCard } from "./Styles";

function Card() {
  return (
    <SCard>
      <div className="card">
        <img className="cover" src="../../../assets/restuarant-cover.jpg" />
        <a href="">
          <h3 className="restName">Restaurant Name</h3>
        </a>
        <p>Ratings: ★★★★★</p>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam bibendum massa id metus convallis vestibulum. Nullam at faucibus
          turpis. Sed sed risus ut augue sodales condimentum.
        </p>
      </div>
    </SCard>
  );
}

export default Card;

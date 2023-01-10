import React, { Component } from "react";
import { SProf } from "./Styles";

const Profile = () => {
  return (
    <SProf>
      <div className="profile">
        <div className="back-bar">
          <a href="">← Back to Results</a>
        </div>
        <div className="rest-info">
          <img
            className="profile-pic"
            src="../../../assets/restuarant-cover.jpg"
          />
          <h2>Restaurant Name</h2>
          <p>Address: ## Name Street</p>
          <p>Phone: ###-###-####</p>
          <p>Hours: #AM - #PM</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean lorem diam, imperdiet sit amet imperdiet in, imperdiet
            a magna. Curabitur dictum metus diam, sit amet laoreet justo posuere
            sed.
          </p>
        </div>
        <div className="delivery-table">
          <h3>Best Delivery Method:</h3>
          <table>
            <tr>
              <td>Method Name</td>
              <td>Delivery Fees</td>
              <td>Delivery Time</td>
            </tr>
          </table>
        </div>
        <div className="menu">
          <h3>Menu:</h3>
          <table>
            <tr>
              <td className="food-img"></td>
              <td>Item Name</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td className="price">$#.##</td>
            </tr>
            <tr>
              <td className="food-img"></td>
              <td>Item Name</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td className="price">$#.##</td>
            </tr>
            <tr>
              <td className="food-img"></td>
              <td>Item Name</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td className="price">$#.##</td>
            </tr>
            <tr>
              <td className="food-img"></td>
              <td>Item Name</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td className="price">$#.##</td>
            </tr>
          </table>
        </div>
      </div>
    </SProf>
  );
};

/*
class Profile extends Component {
  render() {
    const photo = "../../assets/restaurant-cover.jpg";
    const userName = "Restaurant Name";
    const location = "Address";


    return (
      <div style={{ margin: "0 auto", width: "100%" }}>
        <UserProfile
          photo={photo}
          userName={userName}
          location={location}
          initialLikesCount={121}
          initialFollowingCount={723}
          initialFollowersCount={4433}
          
        />
      </div>
    );
  }
}
*/

export default Profile;

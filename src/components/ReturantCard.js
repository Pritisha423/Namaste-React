import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props; // destructuring of props
  
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info  // "?" is called optional chaining
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="resturant-image"
          src= {CDN_URL + cloudinaryImageId}
        />
        <h3> {name}</h3>
        <h5> {cuisines.join(", ")}</h5>
        <h6>{avgRating}</h6>
        <h6>{costForTwo}</h6>
        <h5>{deliveryTime}</h5>
      </div>
    );
  };

  export default ResturantCard;
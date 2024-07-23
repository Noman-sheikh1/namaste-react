import {CON_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{name,cuisines,avgRating,costForTwo}=resData.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-log"
          src={
            CON_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;
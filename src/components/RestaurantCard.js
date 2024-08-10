import {CON_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log(resData);
    const{name,cuisines,avgRating,costForTwo,areaName}=resData.info;
    return (
      <div  data-testid="resCard"
       className="m-2 p-2 w-[300px] bg-gray-200 hover:bg-gray-400 rounded-2xl ">
        <img
          className=" px-2 rounded-2xl"
          alt="res-log"
          src={
            CON_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold p-2 text-1xl">{name}</h3>
        <h4>{cuisines ? cuisines.join(",") : "No cuisines available"}</h4>

        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4> {areaName}</h4>
      </div>
    );
  };
  export default RestaurantCard;
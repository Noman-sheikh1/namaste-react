import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  const[listOfRestuaurants,setListOfRestuaurant]=useState(resList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
   const filteredList=listOfRestuaurants.filter(
  (res)=>res.info.avgRating>4
);
setListOfRestuaurant(filteredList);
          }}
          >
            Top Rated Restaurants</button>
        </div>
        <div className="res-container">
       {listOfRestuaurants.map((restaurant)=>(
          <RestaurantCard  key={restaurant.info.id}resData={restaurant}/>
      ))}
        </div>
      </div>
    );
  };
  export default Body;
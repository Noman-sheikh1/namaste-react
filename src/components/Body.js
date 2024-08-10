import RestaurantCard from "./RestaurantCard";
import { useEffect, useState ,useContext} from "react";
import AltShimmer from "./AltShimmer"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext  from "../utils/UserContext";
const Body = () => {
const[listOfRestuaurants,setListOfRestuaurant]=useState([]);
const[filteredRestaurant,setFilteredRestaurant]=useState([]);
const [searchText,setSearchText]=useState("");  
console.log("body render");
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    //console.log(json);
    setListOfRestuaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }; 
  const onlineStatus=useOnlineStatus();
if(onlineStatus===false){
  return(
    <h1>
      Looks like you are offline!plx check ur connection..Thanku
    </h1>
  );
};
const{loggedInUser,setUserName}=useContext(UserContext);
      if(listOfRestuaurants.length===0){
    return <AltShimmer />;
  }
  
    
   return (
      <div className="body  ">
        <div className="filter flex ">
         
            <div className="search m-4 p-4 ">
              <input type="text" 
              data-testid="searchInput"
              className="border border-black " value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value);
              }}
              />
               </div>
        
              <div>
              <button   className=" m-4 px-2 py-2 bg-green-200 rounded-lg" 
              onClick={()=>{
                 console.log(searchText);
               const filteredRestaurant= listOfRestuaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase() ));
               setFilteredRestaurant(filteredRestaurant);
              }}>Search</button> 
              </div>
             
          
         
          <div>
          <button className="search m-4 py-2 bg-green-200 rounded-lg flex justify-evenly items-center"
          onClick={()=>{
   const filteredList=listOfRestuaurants.filter(
  (res)=>res.info.avgRating>4
); 
setListOfRestuaurant(filteredList);
          }} 
          >
            Top Rated Restaurants</button>
          </div>
          <label className="p-2 font-bold">UserName:</label>
          <input 
          className="border border-black p-3 w-36 h-12 bg-cyan-200 rounded-xl"
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)} 
          />
        
        </div>
        <div className="res-container flex flex-wrap">
       { filteredRestaurant.map((restaurants)=>(
        <Link key={restaurants.info.id} 
        to=
        {"/restaurant/"+ restaurants.info.id} >
       
      
          <RestaurantCard  resData={restaurants}/> </Link>
      ))}
        </div>
      </div>
    );
  };
  export default Body;
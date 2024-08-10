
import { useParams } from "react-router-dom";
import AltShimmer from "./AltShimmer";
import useReastaurantMenu from "../utils/useReastaurantMenu";
import RestaurantCatogry from "./RestaurantCatogry";
import { useState } from "react";
const ReastaurantMenu=()=>{
    const {resId}=useParams();
    const[showIndex,setShowIndex]=useState(null);
   
    const resoInfo=useReastaurantMenu(resId);
    

    if(resoInfo===null){
        return <AltShimmer />;
      }  
    const { name,cuisines }=resoInfo?.cards[2]?.card?.card?.info;
    //const{ itemCards }=resoInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
    console.log(resoInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
   const catogries=resoInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c.card?.card?.["@type"]===
   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
   //console.log("hello");
    //console.log(catogries);

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2>
                 this Menu For u:
            </h2>
            <h3>
                {cuisines.join(',')}
            </h3>
            {catogries.map((catogory,index)=>(
                <RestaurantCatogry  key={catogory?.card?.card?.title}
                 data ={catogory?.card?.card} 
                 showItems={index===showIndex?true:false}
                 setShowIndex={()=>setShowIndex(index)}/>
                ))}
         

        </div>
    );

};
export default ReastaurantMenu;
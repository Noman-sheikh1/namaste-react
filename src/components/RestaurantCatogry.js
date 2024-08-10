import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCatogry=({data,showItems,setShowIndex})=>{
//console.log(data);

const handleClicked=()=>{
   setShowIndex();
};
    return(
        <div >
          
             <div className="w-8/12 mx-auto my-4 shadow-xl  bg-lime-100 p-4  "
             
             >
                <div 
                className="flex justify-between cursor-pointer" 
                onClick={handleClicked}
                >
                
            <span className="font-bold text-lg">
                {data.title}({data.categories.length})</span>
            <span>⬇️
                </span>
                </div> 
            { showItems && <ItemList items={data.categories}/> }
            
        </div>
        </div>
      
    );
};
export default RestaurantCatogry;
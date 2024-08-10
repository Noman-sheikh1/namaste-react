import { useDispatch } from "react-redux";
import {CON_URL} from "../utils/constants";
import { addItems } from "../utils/CartSlice";
 const ItemList=({items})=>{

const dispatch=useDispatch();
 const handleAddItems=(item)=>{
    dispatch(addItems(item));
 };
  return(     
   <div  >
    {items.map((item)=>(
        <div 
        key={item.itemCards[0].card.info.id} className=" border-b-4   w-6/12 p-4 my-auto mx-auto border-solid  shadow-lg text-left  flex" 
        >
     <img src={ CON_URL+item.itemCards[0].card.info.imageId} className="w-3/12 px-3 mx-2 rounded-xl border-solid"/>
     <div className="absolute">

     <button className="rounded-lg  bg-slate-600  text-white p-2 bg-black shadow-lg" 
     onClick={()=>handleAddItems(item)}>Add+</button>
     </div>
     <div>
        
        <div >
       <span className="font-bold text-black py-2">
            {item.itemCards[0].card.info.name}
        </span>
        <span>
            -(RS)
        {item.itemCards[0].card.info.price/100} 
        </span>
        </div> 
      
        <p className="text-xs text-black">
             {item.itemCards[0].card.info.description}
        </p>
        
        </div>
        </div>
    ))}
   </div>
  );
};
export default ItemList;
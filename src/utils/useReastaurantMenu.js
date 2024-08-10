import { useState,useEffect} from "react";
import { MENU_API } from "../utils/constants";


 const useReastaurantMenu=(resId)=>{
    const[resoInfo,setResoInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setResoInfo(json.data);
    };
    return resoInfo;
 };
 export default useReastaurantMenu;
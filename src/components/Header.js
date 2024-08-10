import { useState ,useContext} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

 const Header = () => {
  const [BtnNameReact,setBtnNameReact]=useState("login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
  
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg m-4 sm:bg-yellow-100 lg:bg-green-300">
        <div className="logo-container">
          <img
            className="w-54 h-54"
            src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-5">
            <li className="px-4">Online useState:{onlineStatus?"✅":"🔴"}</li>
            <li className="px-4"> <Link to ="/Home">Home </Link></li>
            <li className="px-4"><Link to ="/Grocery"> Grocery</Link></li>
            <li className="px-4"><Link to ="/about">About us</Link></li>
            <li className="px-4"><Link to="/contact">Contact us</Link></li>
            <li className="px-4 font-bold">{loggedInUser}</li>
            <li className="px-4"><Link to="/cart">Cart({cartItems.length}items)</Link></li>
            <button className="login"
            onClick={()=>{
             BtnNameReact==="login"? setBtnNameReact("logout"):setBtnNameReact("login");

            }}
            > 
              {BtnNameReact}</button>
          </ul>

        </div>
      </div>
    );
  };
  export default Header; 
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Grocery from "./components/Grocery";
import ReastaurantMenu from "./components/ReastaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Grocery from "./components/Grocery";
import { lazy ,Suspense} from "react";
import UserContext from "./utils/UserContext";
const Grocery =lazy(()=>import("./components/Grocery"));
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
  
const AppLayout = () => {

  const[userName,setUserName]=useState();
useEffect(()=>{
  const data={
    name:"noman"
  };
  setUserName(data.name);
},[]); 
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
 
    <div className="app">
      <Header />
      <Outlet />
    </div>
</UserContext.Provider>
</Provider>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/home",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />
      },{
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:< ReastaurantMenu />
      },
      {
        path:"/cart",
        element:< Cart />,
      }
      ,
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>
        loading</h1>}>< Grocery /></Suspense>
      }
    ],
    errorElement:<Error />,
  },
 ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    };
    return (
        <div className="text-center p-4 m-4">
            <h1 className="text-2xl font-bold">
                Cart
            </h1>
            <div className="w-6/12 border">
            <button className="p-4 m-3"onClick={handleClear}>
                ClearCart

            </button>
            <ItemList items={cartItems}/>
            </div>

        </div>
    );
};
export default Cart;
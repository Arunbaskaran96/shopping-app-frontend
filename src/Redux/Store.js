import { configureStore } from "@reduxjs/toolkit";
import AccessoriesSlice from "./Reducer/AccessoriesSlice";
import CartSlice from "./Reducer/CartSlice";
import OrderSlice from "./Reducer/OrderSlice";
import ProductSlice from "./Reducer/ProductSlice";

export default configureStore({
    reducer:{
        Product:ProductSlice,
        Cart:CartSlice,
        Access:AccessoriesSlice,
        Order:OrderSlice
    }
})
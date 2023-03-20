import { createSlice } from "@reduxjs/toolkit";

export const Product=createSlice({
    name:"Product",
    initialState:{
        item:[]
    },
    reducers:{
      addProduct:(state,action)=>{
        state.item=action.payload
      }
    }
})

export const {addProduct}=Product.actions



export default Product.reducer
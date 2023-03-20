import { createSlice } from "@reduxjs/toolkit";



export const Accessories=createSlice({
    name:"Accessories",
    initialState:{
        item:[]
    },
    reducers:{
      addAccessories:(state,action)=>{
        state.item=action.payload
      }
    }
})

export const {addAccessories}=Accessories.actions


export default Accessories.reducer
import { createSlice } from "@reduxjs/toolkit";


export const Orders=createSlice({
    name:"Orders",
    initialState:{
        item:[]
    },
    reducers:{
       addorder: (state,action)=>{
            state.item=action.payload
        }
    }
})

export const {addorder}=Orders.actions

export default Orders.reducer
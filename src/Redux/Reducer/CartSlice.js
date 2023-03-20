import { createSlice } from "@reduxjs/toolkit";


export const Cart=createSlice({
    name:"Cart",
    initialState:{
        item:[],
        total:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.item=action.payload
            if(state.item.length>0){
                function extractValue(arr,prop){
                   let extractedvalue= arr.map(item=>item[prop])
                    return extractedvalue;
                }
                const result=extractValue(state.item,"price")
                const sum=result.reduce((acc,sum)=>parseInt(acc)+parseInt(sum))
                state.total=sum
            }
        },
        subTotal:(state,action)=>{
            let index=state.item.findIndex(item=>item.id===action.payload.id)
            state.sum=state.sum-parseInt(action.payload.price)
        },
        addsum:(state,action)=>{
            let index=state.item.findIndex(item=>item.id===action.payload.id)
            state.sum=state.sum+action.payload.price
        }
    }
})

export const {addItem,addsum}=Cart.actions

export default Cart.reducer
import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.item.push(action.payload)

        },
         removeFromCart: (state, action) => {
      state.item = state.item.filter(i => i._id !== action.payload);
    },
    clearCart: (state) => {
      state.item = [];
    },
    }
})
export const {addToCart,removeFromCart,clearCart}=cartSlice.actions
export default cartSlice.reducer
import {createSlice} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface UserData {
  name:string;
  email:string;
  password:string;
  _id:string;
}

interface CartData {
  title: string;
  desc: string;
  price: number;
  category:string;
  _id:string;
  cartQuantity: number;
}

const initialState = {
  currentUser: {} as UserData | null,
  cart: [] as Array<CartData>,
  totalPrice: 0,
  totalQuantity:0
}

const ReduxState = createSlice({
name:"ecommerce",
initialState,
reducers:{
  loginUser :(state, {payload}: PayloadAction<UserData>)=>{
          state.currentUser = payload;
  },
  logoutUser : (state)=>{
    state.currentUser = null;
  },
   addtoCart:(state, {payload}: PayloadAction<CartData>)=>{
    const check = state.cart.findIndex((el)=> el._id === payload._id);

    if (check >= 0) {
      state.cart[check].cartQuantity += 1
    }else{
      state.cart.push({
        ...payload,
        cartQuantity: 1
      })
    }
    state.totalQuantity += 1;
    state.totalPrice +=
     state.totalPrice = state.cart.reduce(
      (accc,next)=> accc + next.cartQuantity * accc + next.price,0 
      );
   }, 
},
});

export const {loginUser,logoutUser,addtoCart}  = ReduxState.actions;
export default ReduxState.reducer;
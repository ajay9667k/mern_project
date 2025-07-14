import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ProductCart:[],
  Price:0,
  Quantity:0
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
   Addtocart:(state,action)=>{
   const find= state.ProductCart.findIndex((value)=>value._id === action.payload._id)
   if(find !=-1){
      state.ProductCart[find]={...state.ProductCart[find],quantity:state.ProductCart[find].quantity+1}
   }else{
    state.ProductCart.push({...action.payload , quantity:1})
   }
   },

  Deletecart:(state,action)=>{
    state.ProductCart=state.ProductCart.filter((value)=>value._id!==action.payload)
  },

  totalcart:(state)=>{
   const {totalPrice,totalQuantity} = state.ProductCart.reduce((cartTotal,cartitem)=>{
         const {ProductPrice,quantity} = cartitem
         const itemtotal=ProductPrice*quantity
         cartTotal.totalPrice += itemtotal
         cartTotal.totalQuantity += quantity
          return cartTotal
      },{
          totalPrice: 0,
          totalQuantity: 0,
      }
    );
      state.Price = totalPrice;
      state.Quantity = totalQuantity;
  },
    
  },
})


export const { Addtocart,Deletecart,totalcart } = cartSlice.actions

export default cartSlice.reducer
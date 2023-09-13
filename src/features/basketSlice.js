import { createSlice } from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
//import { fetchCount } from './counterAPI';




export const basketSlice = createSlice({
  name: 'basket',
 initialState: {
   basket: [],
 },
 
 reducers:{

  addToBasket:(state, action) => {
     state.basket.push(action.payload);
  },
  EMPTY_BASKET:(state, action) => {
    state.basket = [];
   
  },
  removeFromBasket: (state, action) => {
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.payload.id
    );
    
    let newBasket = [...state.basket];
    
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Can't remove product (id: ${action.payload.id}) as it's not in the basket!`
      );
    }
    
    state.basket = newBasket;
  },

  
},
}
);
export const getBasketTotal = (basket) =>
  basket
    .map((item) => parseFloat(item.price))
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2);


export const { addToBasket,  removeFromBasket, EMPTY_BASKET} = basketSlice.actions;


export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //empty array means nothing in the basket
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // reducers are the actions allow us to modify the global store
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]; //...state.items means keep whatever in basket but add on whatever the payload is
    }, // payload is something which comes with the action
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      ); //matching the action payload id

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as ts not in the basket!`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions; //actions creator

export const selectBasketItems = (state) => state.basket.items; //this is a selector which will allow us to access that gloabal store and pull the items from the basket (state.basket.items) state means global state basket meant which slice we are in and item meant we are getting the item from basket slice

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;

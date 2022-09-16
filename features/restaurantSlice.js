import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    lat: null,
    long: null,
  }, //empty array means nothing in the basket
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions; //actions creator

export const selectRestaurant = (state) => state.restaurant.restaurant; //this is a selector which will allow us to access that gloabal store and pull the items from the basket (state.basket.items) state means global state basket meant which slice we are in and item meant we are getting the item from basket slice

export default restaurantSlice.reducer;

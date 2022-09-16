import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  }, //This is where we combined all of the different slices to make one big store
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import apiReducer from "./apiSlice";
import adminReducer from "./adminSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    api: apiReducer,
    admin: adminReducer,
  },
});

export default store;

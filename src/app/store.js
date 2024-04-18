import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// import userSlice from "../features/userSlice";


export default configureStore ({
    reducer:{
        user: userReducer,
    },
})
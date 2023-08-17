import { configureStore } from "@reduxjs/toolkit";
import { modeSlice } from "./mode-slice";

export const store = configureStore({
    reducer: {
        modeReducer: modeSlice.reducer,
    },
});
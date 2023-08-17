import { createSlice } from "@reduxjs/toolkit";

const getMode = () => {
    const mode = window.localStorage.getItem('mode');
    if(mode) {
        return mode;
    }else {
        return 'light';
    }
};

const initialModeState = {
    mode: getMode(),
};

export const modeSlice = createSlice({
    name: 'modeSlice',
    initialState: initialModeState,
    reducers: {
        switchDark(state,action) {
            state.mode = action.payload
        },
        switchLight(state,action) {
            state.mode = action.payload
        }
    }
});

export const modeSliceActions = modeSlice.actions;
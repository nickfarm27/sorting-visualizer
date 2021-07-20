import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const randomArray = (length: number, min: number, max: number) =>
    [...new Array(length)].map(() =>
        Math.round(Math.random() * (max - min) + min)
    );
//? if you want intervals of 5
// [...new Array(length)].map(() => Math.ceil((Math.random() * (max - min) + min)/5)*5);

interface SettingsState {
    speed: number;
    arraySize: number;
    chosenAlgorithm: string;
    array: Array<number>;
}

const initialState: SettingsState = {
    speed: 100,
    arraySize: 50,
    chosenAlgorithm: "BUBBLE",
    array: randomArray(50, 100, 500),
};

const settingsSlice = createSlice({
    name: "settings",
    initialState: initialState,
    reducers: {
        changeArraySize: (state, action: PayloadAction<number>) => {
            state.arraySize = action.payload;
            state.array = randomArray(action.payload, 100, 500)
        },
        changeSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload;
        },
        updateArray: (state, action: PayloadAction<Array<number>>) => {
            state.array = action.payload;
        },
        resetArray: (state) => {
            state.array = randomArray(state.arraySize, 100, 500)
        }
    },
});

export const settingsActions = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;

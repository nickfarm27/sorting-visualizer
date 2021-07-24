import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BUBBLE_SORT } from "./constants";
import type { RootState } from "./index";

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const DEFAULT_ARRAY_SIZE = 20;

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
    darkTheme: boolean;
    sorting: boolean;
}

const initialState: SettingsState = {
    speed: 100,
    arraySize: DEFAULT_ARRAY_SIZE,
    chosenAlgorithm: BUBBLE_SORT,
    array: randomArray(DEFAULT_ARRAY_SIZE, MIN_SIZE, MAX_SIZE),
    darkTheme: false,
    sorting: false,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState: initialState,
    reducers: {
        changeArraySize: (state, action: PayloadAction<number>) => {
            state.arraySize = action.payload;
            state.array = randomArray(action.payload, MIN_SIZE, MAX_SIZE);
        },
        changeSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload;
        },
        updateArray: (state, action: PayloadAction<Array<number>>) => {
            state.array = action.payload;
        },
        resetArray: (state) => {
            state.array = randomArray(state.arraySize, MIN_SIZE, MAX_SIZE);
        },
        changeAlgorithm: (state, action: PayloadAction<string>) => {
            state.chosenAlgorithm = action.payload;
        },
        changeTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        },
        beginSorting: (state) => {
            state.sorting = true;
        },
        endSorting: (state) => {
            state.sorting = false;
        },
    },
});

export const settingsActions = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;

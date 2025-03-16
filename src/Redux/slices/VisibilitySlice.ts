import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VisibilityState {
    inVisible: boolean;
}

const initialState: VisibilityState = {
    inVisible: false,
}

const VisibilitySlice = createSlice({
    name: "visibility",
    initialState,
    reducers: {
        toggleVisibility: (state) => {
            state.inVisible = !state.inVisible;
        },
        setVisibility: (state, action: PayloadAction<boolean>) => {
            state.inVisible = action.payload
        }
    }
});

export const {toggleVisibility, setVisibility} = VisibilitySlice.actions;

export default VisibilitySlice.reducer;

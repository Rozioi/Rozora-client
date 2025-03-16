import {configureStore} from "@reduxjs/toolkit"
import visibilityReducer from "./slices/VisibilitySlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const store = configureStore({
    reducer: {
        visibility: visibilityReducer,
    }
})
export default store;
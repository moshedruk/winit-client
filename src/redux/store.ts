import { useDispatch, useSelector } from "react-redux";
import userSlice from "./slices/user";
import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/game";

const store = configureStore({
    reducer: {
        user :userSlice.reducer,
        games :gameSlice.reducer     
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store
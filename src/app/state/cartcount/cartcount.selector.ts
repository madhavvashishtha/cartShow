import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCartCounterState=(state: AppState)=>state.counter;

export const selectCartCount=createSelector(selectCartCounterState,
    (state)=>state.count
)
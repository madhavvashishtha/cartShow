import {createAction} from "@ngrx/store";

export const addToCartAction=createAction('[cartcounter] AddToCart')

export const removeFromCartAction=createAction('[cartcounter] RemoveFromCart')

export const resetTOInitCartAction=createAction('[cartcounter] Reset')
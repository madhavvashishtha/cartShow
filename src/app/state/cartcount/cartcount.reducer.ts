import {createReducer, on} from "@ngrx/store"
import { addToCartAction, removeFromCartAction, resetTOInitCartAction } from "./cartcount.actions"

export interface CartCounterInterfState {
    count:number
}

export const initCartCoutStatTypeInterf:CartCounterInterfState={
    count:110,
}

export const cartCountReducer=createReducer( 
    initCartCoutStatTypeInterf,

    on(addToCartAction,state=>({...state,count:state.count+1})),

    on(removeFromCartAction,state=>({...state,count:state.count-1})),

    on(resetTOInitCartAction,state=>({...state,count:0}))//better pass initValur

)
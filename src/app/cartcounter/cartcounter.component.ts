import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { selectCartCount, selectCartCounterState } from '../state/cartcount/cartcount.selector';
import { AsyncPipe } from '@angular/common';
import { addToCartAction, removeFromCartAction, resetTOInitCartAction } from '../state/cartcount/cartcount.actions';

@Component({
  selector: 'app-cartcounter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cartcounter.component.html',
  styleUrl: './cartcounter.component.css'
})
export class CartcounterComponent  implements OnInit{
  cartCountNow$:Observable<number>;

  constructor(private store:Store<AppState>){
    this.cartCountNow$=this.store.select(selectCartCount);
  
  }
  ngOnInit(): void {
   //alert('altCout'+this.countNow$)
   console.log('==>',this.cartCountNow$)
    //throw new Error('Method not implemented.');
  }

  addItemTo__Cart(){

    this.store.dispatch(addToCartAction())
  }
removeFrom_Cart(){
this.store.dispatch(removeFromCartAction())
}
resetCartToInit(){
this.store.dispatch(resetTOInitCartAction())
}
}

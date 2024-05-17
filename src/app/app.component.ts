import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartcounterComponent } from './cartcounter/cartcounter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CartcounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cartShow';
}

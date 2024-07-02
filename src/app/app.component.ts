import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FondoComponent } from './animacion/fondo/fondo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Prueba';
}

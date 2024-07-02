import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FondoComponent } from './animacion/fondo/fondo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './pagina/index/index.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FondoComponent, ReactiveFormsModule, IndexComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba';
}

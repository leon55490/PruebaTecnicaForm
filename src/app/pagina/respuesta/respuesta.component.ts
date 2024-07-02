import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.scss']
})
export class RespuestaComponent implements OnInit {
  nombre: string;
  correo: string;
  numero: string;
  mensaje: string;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.nombre = '';
    this.correo = '';
    this.numero = '';
    this.mensaje = '';
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = localStorage.getItem('form-data');
      if (storedData) {
        const formData = JSON.parse(storedData);
        this.nombre = formData.nombre;
        this.correo = formData.correo;
        this.numero = formData.numero;
        this.mensaje = formData.mensaje;
        console.log('Datos almacenados:', formData);
      } else {
        console.log('No se encontraron datos en localStorage');
      }
    } else {
      console.log('localStorage no está disponible');
    }
  }

  volver() {
    this.router.navigate(['index']);
  }
}

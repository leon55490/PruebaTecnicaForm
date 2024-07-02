import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  fGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fGroup = new FormGroup({});
  }

  ngOnInit() {
    this.construirFormulario();
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      numero: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      mensaje: ['', [Validators.required]]
    });
  }

  enviar() {
    if (this.fGroup.valid) {
      const formData = this.fGroup.value;
      localStorage.setItem('form-data', JSON.stringify(formData));
      this.fGroup.reset();
      this.router.navigate(['respuesta']);
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}

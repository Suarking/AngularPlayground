import { Component } from '@angular/core';

@Component({
  selector: 'app-error-personalizado',
  templateUrl: './error-personalizado.component.html',
  styleUrls: ['./error-personalizado.component.css'],
})
export class ErrorPersonalizadoComponent {
  errorMessage =
    'Ha ocurrido un error inesperado. Por favor, intenta de nuevo más tarde.';

  constructor() {}

  ngOnInit() {}
}

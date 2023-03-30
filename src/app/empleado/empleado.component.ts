import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  empleado: string = 'Empleado interpolado';

  nombre: string = 'Suar';
  apellido: string = 'Palazón';
  edad: number = 39;
  empresa: string = 'NTT';

  textEnabled: boolean = false;

  usuRegistrado: boolean = false;

  registerText: string = 'Nadie registrado';

  getRegisteredUser() {
    this.usuRegistrado = false;
  }

  showRegisterAlert(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.registerText = 'Usuario registrado';
    } else {
      this.registerText = 'Usuario no registrado';
    }
  }
  /*getEdad() {
    return this.edad;
  }
  */
}

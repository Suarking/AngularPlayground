import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Director', 7500),
    new Empleado('Eva', 'Mtnez', 'Jefa sección', 4500),
    new Empleado('Valeria', 'López', 'Adtva', 1500),
  ];

  agregarEmpleado() {
    let miEmpleeado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleados.push(miEmpleeado);
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}

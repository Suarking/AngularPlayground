import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private servicioAlerta: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Director', 7500),
    new Empleado('Eva', 'Mtnez', 'Jefa sección', 4500),
    new Empleado('Valeria', 'López', 'Adtva', 1500),
    new Empleado('Julián', 'Más', 'Adtvo', 1500),
    new Empleado('Ricardo', 'Gómez', 'Seguridad', 1500),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioAlerta.muestraMensaje(
      'Empleado añadido : ' + '\n' + empleado.nombre
    );
    this.empleados.push(empleado);
  }
}

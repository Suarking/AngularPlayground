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

  encontrarEmpleado(indice: number): Empleado {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado: Empleado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }
}

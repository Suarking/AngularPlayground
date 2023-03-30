import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  title = 'Control de usuarios';

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleeado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleadosService.agregarEmpleadoServicio(miEmpleeado);
    //this.miServicio.muestraMensaje('Nombre de empleado: ' + miEmpleeado.nombre);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private empleadosService: EmpleadosService
  ) {}
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  title: string = 'Proyectos';

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
    this.volverHome();
  }

  volverHome() {
    this.router.navigate(['']);
  }
}

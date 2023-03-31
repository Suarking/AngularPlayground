import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute
  ) {}
  //Acción recuperada por queryParams
  accion: number;

  ngOnInit(): void {
    //recuperamos las query params
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    //seteamos título
    if (this.accion == 1) {
      this.title = 'Actualizar';
    } else if (this.accion == 2) {
      this.title = 'Eliminar';
    }

    this.empleados = this.empleadosService.empleados;
    //recuperamos id de impleado
    this.indice = this.route.snapshot.params['id'];

    //construye un empleado buscando el índice
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );

    //cargamos valores recuperados
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  title: string;

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  indice: number = 0;

  actualizaEmpleado() {
    let miEmpleeado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleeado);
    //this.miServicio.muestraMensaje('Nombre de empleado: ' + miEmpleeado.nombre);
    this.volverHome();
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.volverHome();
  }

  editarEmpleado() {
    if (this.accion == 1) {
      this.actualizaEmpleado();
    } else if (this.accion == 2) {
      this.eliminaEmpleado();
    }
  }

  volverHome() {
    this.router.navigate(['']);
  }
}

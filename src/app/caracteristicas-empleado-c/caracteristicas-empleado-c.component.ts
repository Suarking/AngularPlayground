import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css'],
})
export class CaracteristicasEmpleadoCComponent {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  //constructor(private miServicio: ServicioEmpleadosService) {}

  agregaCaracteristicas(value: string): void {
    //this.miServicio.muestraMensaje(value);
    //this.caracteristicasEmpleado.emit(value);
  }
}

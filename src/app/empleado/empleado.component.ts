import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Belen';
  Edad = 0;
  Empresa = "Two Way Binding";



  deshabilitacionCuadro = true;
  userRegistrado = false;
  textoDeRegistro = 'No hay Nadie Registrado';

  /*getRegistroUsuario() {
    this.userRegistrado = false; Me cambiaba el estatus
  }*/

  cambiarStatus(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'si') {
      //Estoy capturando el evento en un objeto

      this.textoDeRegistro = 'Hay un usuario Registrado';
      this.deshabilitacionCuadro = false;
    } else {
      this.textoDeRegistro = 'No hay Usuario Registrado';
      this.deshabilitacionCuadro = true;
    }
  }

  Sumar() {
    this.Edad = this.Edad + 1;
  }

  Restar() {
    this.Edad = this.Edad - 1;
  }

  //Empresa= 'TGS'
  Actualizar(value: number) {
    this.Edad = value;
  }

  /*getEdad() {
        return this.Edad;
    }*/

  constructor() {}

  ngOnInit(): void {}
}

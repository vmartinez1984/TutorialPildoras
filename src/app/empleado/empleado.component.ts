import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Víctor";
  apellido = "Martínez";
  private edad = 36;
  empresa = "VMartinez84";

  public cambiarEmpresa(event:Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }

  mostrarEmpresa(value: String) {

  }

  habilitarCuadro = true;
  usuarioRegistrado = true;
  textoDeRegistro = "No hay nadie registrado";

  public getUsuarioRegistrado() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event:Event) {
    //alert("El usuario se acaba de registrar");
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }

  public getEdad() {
    return this.edad;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

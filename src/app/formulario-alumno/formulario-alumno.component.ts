import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/_modules/Alumno_interface';
import { ControlAlumnosService } from 'src/_services/control-alumnos.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent {

  private _alumno_plantilla : Alumno = {
    id : 0,
    dni : "",
    nombre : "",
    horas : 0
  };

  private _formulario: FormGroup = this.formBuilder.group(this._alumno_plantilla);

  constructor(private formBuilder : FormBuilder, private servicio : ControlAlumnosService, private router : Router){}

  public get formulario(): FormGroup {
    return this._formulario;
  }
  public set formulario(value: FormGroup) {
    this._formulario = value;
  }
  public get alumno_plantilla(): Alumno {
    return this._alumno_plantilla;
  }
  public set alumno_plantilla(value: Alumno) {
    this._alumno_plantilla = value;
  }

  mandarAlumno(){
    this.servicio.añadirAlumno(this._formulario.value);
    this._formulario.reset();
    this.router.navigate(['']);
  }
}

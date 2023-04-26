import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/_modules/Alumno_interface';
import { ControlAlumnosService } from 'src/_services/control-alumnos.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  private _eliminar : boolean | undefined;
  private _modificar : number | undefined;
  private _tipoCaso: number = 1 | 2 | 3;

  private _alumno_plantilla : Alumno = {
    id : 0,
    dni : "",
    nombre : "",
    horas : 0
  };

  private _formulario: FormGroup = this.formBuilder.group(this._alumno_plantilla);

  constructor(
    private formBuilder : FormBuilder,
    private servicio : ControlAlumnosService,
    private router : Router,
    private routerActivo : ActivatedRoute
    ){}

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
  public get tipoCaso(): number {
    return this._tipoCaso;
  }
  public set tipoCaso(value: number) {
    this._tipoCaso = value;
  }

  ngOnInit(): void {
    this.routerActivo.queryParams.subscribe((valor)=> {
      this._modificar = valor['id'];
      this._eliminar = valor['forDelete'];
      this._tipoCaso = 1;

      if (typeof this._modificar == 'undefined') return;
      this.servicio.lista_observable.subscribe((values) => {
        this._formulario = this.formBuilder.group(values.find((item, ind, arr) => item.id == this._modificar)!)
      });
      this._tipoCaso = 2;

      if (typeof this._eliminar == 'undefined') return;
      this.servicio.lista_alumnos.map((alum,ind,arr) => {
        if (alum.id == this._modificar){
          this.servicio.lista_observable.subscribe((values) => {
            values.splice(ind,1);
          })
        }
      });
      this._tipoCaso = 3;

      this.router.navigate(['']);
    });
  }

  mandarAlumno(){
    this.servicio.añadirAlumno(this._formulario.value);
    this._formulario.reset();
    this.router.navigate(['']);
  }

  actualizarAlumno(){
    this.servicio.actualizarAlumno(this._formulario.value);
    this.router.navigate(['']);
  }
}

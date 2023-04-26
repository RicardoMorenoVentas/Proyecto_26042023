import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/_modules/Alumno_interface';
import { ControlAlumnosService } from 'src/_services/control-alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  private _lista_alumnos: Alumno[] | undefined;
  constructor(private _servicio: ControlAlumnosService, private _router : Router){}

  ngOnInit(): void {
      this._servicio.lista_observable.subscribe((valor) => {
        this._lista_alumnos = valor;
      })
  }

  public get lista_alumnos(): Alumno[] | undefined {
    return this._lista_alumnos;
  }
  public set lista_alumnos(value: Alumno[] | undefined) {
    this._lista_alumnos = value;
  }
  public get servicio(): ControlAlumnosService {
    return this._servicio;
  }
  public set servicio(value: ControlAlumnosService) {
    this._servicio = value;
  }

  abrirFormulario(){
    this._router.navigate(['/form-alumno']);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { of } from 'rxjs/internal/observable/of';
import { Alumno } from 'src/_modules/Alumno_interface';

@Injectable({
  providedIn: 'root'
})
export class ControlAlumnosService {
  private static id_actual : number = 0;
  private _lista_alumnos: Alumno[] = [];
  private _lista_observable: Observable<Alumno[]> = of(this._lista_alumnos);

  constructor() {}

  public get lista_observable(): Observable<Alumno[]> {
    return this._lista_observable;
  }
  public set lista_observable(value: Observable<Alumno[]>) {
    this._lista_observable = value;
  }


  añadirAlumno(alumn_e: Alumno) {
    alumn_e.id = ++ControlAlumnosService.id_actual;
    this._lista_alumnos.push(alumn_e);
    /* this._lista_observable.subscribe((valor) => {
      console.log(valor[valor.length-1]);
    }); */
  }
}

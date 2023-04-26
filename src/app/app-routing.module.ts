import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  { path: '', component: ListaAlumnosComponent, children: [
    { path: 'form-alumno', component: FormularioAlumnoComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

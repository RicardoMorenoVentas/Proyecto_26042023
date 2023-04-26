import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { ControlAlumnosService } from 'src/_services/control-alumnos.service';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ControlAlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

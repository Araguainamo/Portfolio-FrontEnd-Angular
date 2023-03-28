import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componetes/encabezado/encabezado.component';
import { SlideComponent } from './componetes/slide/slide.component';
import { AcercaDeMiComponent } from './componetes/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './componetes/experiencia/experiencia.component';
import { AcademicaComponent } from './componetes/academica/academica.component';
import { SkillsComponent } from './componetes/skills/skills.component';
import { ProyectoComponent } from './componetes/proyecto/proyecto.component';
import { ContactoComponent } from './componetes/contacto/contacto.component';
import { MensajeComponent } from './componetes/mensaje/mensaje.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SlideComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    AcademicaComponent,
    SkillsComponent,
    ProyectoComponent,
    ContactoComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltasBajasFormComponent } from './altas-bajas-formulario.component';
import { FormAltaBajas } from "./form-atla-bajas.component";
import { LoginComponent } from './login.component';
import { FormListaComponent } from './form-lista/form-lista.component';
import { FormularioComponent } from './form-lista/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormAltaBajas,
    LoginComponent,
    FormListaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

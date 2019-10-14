import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltasBajasFormComponent } from './altas-bajas-formulario.component';
import { FormAltaBajas } from "./form-atla-bajas.component";

@NgModule({
  declarations: [
    AppComponent,
    FormAltaBajas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// importando un segundo modulo que solo contiene angular material
import { AppMaterialModule } from './app-material.module';

import { appRoutes } from './app-routing.module'; // importando un el router
import { AppComponent } from './app.component';
import { FormAltaBajasComponent } from './form-atla-bajas.component';
import { LoginComponent } from './login.component';
import { FormListaComponent } from './form-lista/form-lista.component';
import { FormularioComponent } from './form-lista/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormAltaBajasComponent,
    LoginComponent,
    FormListaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    appRoutes, // importando un el router
    ReactiveFormsModule,
    BrowserAnimationsModule, // importando un segundo modulo que solo contiene angular material
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule, } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from '../app-material.module';

import { formlistRouting } from "./form-lista.routing";
import { FormularioComponent } from "./formulario/formulario.component";
import { FormListaComponent } from "./form-lista.component";

@NgModule({
  declarations: [
    FormularioComponent,
    FormListaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    formlistRouting,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class FormListModule { }

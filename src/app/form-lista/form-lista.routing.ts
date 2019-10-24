import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { FormListaComponent } from "./form-lista.component";

const formlistRoutes: Routes=[
  { path: '', component:FormListaComponent },
  { path: 'NuevoFormulario', component:FormularioComponent }
];

export const formlistRouting= RouterModule.forChild(formlistRoutes);

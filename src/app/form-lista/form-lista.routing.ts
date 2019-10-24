import { Routes, RouterModule } from '@angular/router';
import { FormListaComponent } from './form-lista.component';
import { FormAltaBajasComponent } from './form-atla-bajas.component';
import { FormularioCompletoComponent } from './formulario-completo.component';

const formlistRoutes: Routes = [
  { path: '', component: FormListaComponent },
  { path: 'NuevoFormulario', component: FormAltaBajasComponent },
  { path: ':codigo-form', component: FormularioCompletoComponent },

];

export const formlistRouting = RouterModule.forChild(formlistRoutes);

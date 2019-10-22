import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormListaComponent } from './form-lista/form-lista.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }, // localhost:4200/login mostrara el componente login
  { path: 'formularios-lista', component: FormListaComponent }, // localhost:4200/formularios-lista mostrara el lista de form
  { path: '', pathMatch: 'full', redirectTo: 'login' } // redirecciona localhost:4200 a localhost:4200/login
];

// par exportar este router al modulo principal
export const appRoutes = RouterModule.forRoot(routes);

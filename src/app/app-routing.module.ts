import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginGuard } from './guards/login.guard';
import { FormsGuard } from './guards/forms.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] }, // localhost:4200/login mostrara el componente login
  /* path: 'formularios-lista', component: FormListaComponent },*/ // localhost:4200/formularios-lista mostrara el lista de form
  {
    path: 'formularios-lista', loadChildren: () => import('./form-lista/form-lista.module').then(a => a.FormListModule),
    canActivate: [FormsGuard], canLoad: [FormsGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' } // redirecciona localhost:4200 a localhost:4200/login
];

// par exportar este router al modulo principal
export const appRoutes = RouterModule.forRoot(routes);

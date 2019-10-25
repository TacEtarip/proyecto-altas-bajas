import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.auth.isLogedIn());
    this.form = this.formBuilder.group({
      user: this.formBuilder.control('', Validators.compose([
        Validators.required,
        // sole permite numeros y un numero minimo de 8 digitos
        Validators.pattern(/^\d+$/),
        Validators.minLength(8)
      ])),
      pasw: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ]))
    });
  }
  public onSubmit(credenciales) {
    // delete credenciales.pasw; elimina un parametro de la variable
    this.auth.login(credenciales).subscribe(
      loggedSucces => {
        if (loggedSucces) {
          this.router.navigate(['/formularios-lista']);
        }
      }
    );
    // console.log(credenciales);
  }
}




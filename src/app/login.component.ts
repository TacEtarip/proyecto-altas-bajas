import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private auth: AuthService) { }

  ngOnInit() {
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
    this.auth.register(credenciales).subscribe(
      res => { console.log(res); }
    );
    // console.log(credenciales);
  }
}




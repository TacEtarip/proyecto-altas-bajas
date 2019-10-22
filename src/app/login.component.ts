import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder) {

  }
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
    console.log(credenciales);
  }
}

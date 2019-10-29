import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageShowErrorComponent } from './pop-messages/message-show-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  duracionSec = 4;

  form: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.auth.isLogedIn());
    this.form = this.formBuilder.group({
      dni: this.formBuilder.control('', Validators.compose([
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
        console.log(loggedSucces);
        if (loggedSucces) {
          this.router.navigate(['/formularios-lista']);
        } else {
          this.openErrorMessage();
        }
      }
    );
    console.log(credenciales);
  }

  openErrorMessage() {
    this.snackBar.openFromComponent(MessageShowErrorComponent,
      { duration: this.duracionSec * 1000 });
  }
}






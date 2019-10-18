import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      user:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      pasw:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ]))
    });
  }
  public onSubmit(credenciales){
    console.log(credenciales);
  }
}

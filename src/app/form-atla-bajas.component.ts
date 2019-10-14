import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'form-altas-bajas',
  templateUrl: './form-alta-bajas.component.html',
  styleUrls: ['./form-alta-bajas.component.css']
})

export class FormAltaBajas implements OnInit{
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(){
    this.form = this.formBuilder.group({
      nombre_usuario:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      apellido_usuario:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      cargo_usuario:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      unidad_usuario:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      tipo_usuario:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      tipo_solicitud:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      motivo_solicitud:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      servicio_red:this.formBuilder.control(''),
      servicio_red2:this.formBuilder.control(''),
      servicio_red3:this.formBuilder.control(''),
      accesos_red:this.formBuilder.control(''),
      accesos_red2:this.formBuilder.control(''),
      accesos_red3:this.formBuilder.control(''),
      accesos_red4:this.formBuilder.control(''),
      accesos_red5:this.formBuilder.control(''),
      accesos_red6:this.formBuilder.control(''),
      accesos_red7:this.formBuilder.control(''),
      accesos_red8:this.formBuilder.control(''),
      accesos_sistemas_administrativos:this.formBuilder.control(''),
      accesos_sistemas_administrativos2:this.formBuilder.control(''),
      accesos_sistemas_administrativos3:this.formBuilder.control(''),
      accesos_sistemas_administrativos4:this.formBuilder.control(''),
      acceso_sistemas_negocio:this.formBuilder.control(''),
      acceso_sistemas_negocio2:this.formBuilder.control(''),
      acceso_sistemas_negocio3:this.formBuilder.control(''),
      acceso_sistemas_negocio4:this.formBuilder.control(''),
      directorio_carpeta:this.formBuilder.control(''),
      servidor_carpeta:this.formBuilder.control(''),
      tipo_acceso:this.formBuilder.control(''),
      tipo_acceso2:this.formBuilder.control(''),
      nombre_jefe_superior:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      codigo_jefe_superior:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      cargo_jefe_superior:this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      sustento_justificacion:this.formBuilder.control(''),
      observaciones_detalles:this.formBuilder.control('')
    });
  }
  public onSubmit(user){
    console.log(user);
  }
}

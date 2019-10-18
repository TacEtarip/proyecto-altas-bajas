import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})
export class FormListaComponent implements OnInit {
  cartilla=[ {
    id:1,
    nombre:"alicia grimaldina",
    cargo:"practicante",
    unidad:"uti",
    tipo_usuario:"practicante",
    tipo_solicitud:"creacion de usuario",
    motivo_solicitud:"personal nuevo",
    servicios_red:" ",
    acceso_red:[" "," "," "],
    acceso_sistemas_administrativos:" ",
    acceso_sistemas_registrales:"",
    carpetas_compartidas:[" "," "," "," "],
    jefe:["diego alquizar","69","jefe"],
    sustento:" ",
    observaciones:" ",
    estado:"Creado"
  }]
  constructor() { }

  ngOnInit() {
  }

}

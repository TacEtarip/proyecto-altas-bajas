import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root'
})
export class DataUser{
  usuario={
    nombre: null,
    apellidos: null,
    cargo: null,
    unidad:null,
    tipo_usuario: null,
    codigo: null,
    tipo_solicitud: null,
    motivo_solicitud: null,
    servicio_red: null,
    accesos_red: null,
    accesos_sistemas_administrativos: null,
    accesos_sistemas_negocio:null,
    accesos_carpeta_compartidas:null,
    sustento:null,
    observaciones:null
  }
  getUser(){
    return this.usuario;
  }
}
export interface Usuario{
  cod_trab: number;
  nom_trab: string;
  ape_trab: string;
  cargo: string;
  nom_area: string;
  dni_trab: number;
  usr_trab: string;
  psw_trab: string;
  fir_trab: Blob;
  fot_trab: Blob;
  est_trab: string;
  jefe_trab: string;
  tije_trab:string;
  acc_sir:boolean;
}

import { Injectable } from '@angular/core';
// import { userInfo } from 'os';
@Injectable({
  providedIn: 'root'
})
export class DataUser {
  usuario = {
    nombre: null,
    apellidos: null,
    cargo: null,
    unidad: null,
    tipo_usuario: null,
    codigo: null,
    tipo_solicitud: null,
    motivo_solicitud: null,
    servicio_red: null,
    accesos_red: null,
    accesos_sistemas_administrativos: null,
    accesos_sistemas_negocio: null,
    accesos_carpeta_compartidas: null,
    sustento: null,
    observaciones: null
  };

  getUser() {
    return this.usuario;
  }

}

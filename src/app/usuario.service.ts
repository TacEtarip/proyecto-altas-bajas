import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  /*getUser() {
    return this.usuario;
  }*/
  constructor(private http:HttpClient){

  }
  getUser():Observable<object[]>{
    return this.http.get<Usuario[]>("http://localhost:7651/FormularioAccesos");
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

import { Component, OnInit } from '@angular/core';
import { Usuario, DataUserService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario-completo',
  templateUrl: './formulario-completo.component.html',
  styleUrls: ['./formulario-completo.component.css']
})
export class FormularioCompletoComponent implements OnInit {

  constructor(
    private dataUserService: DataUserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        const codigo = paramMap.get('codigo-form');
        console.log(codigo);
      });
  }

}

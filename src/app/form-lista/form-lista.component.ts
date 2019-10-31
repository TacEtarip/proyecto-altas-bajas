import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataUserService } from '../usuario.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})
export class FormListaComponent implements OnInit, OnDestroy {

  cartilla$: BehaviorSubject<object[]> = new BehaviorSubject<object[]>(null);
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataUserService: DataUserService, private router: Router) { }

  ngOnInit() {
    this.dataUserService.getFormularios()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((lista: object[]) => {
        console.log(lista);
        this.cartilla$.next(lista);
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  irAformularioCompleto(codigo) {
    this.router.navigate(['/formularios-lista', codigo]);
  }
}

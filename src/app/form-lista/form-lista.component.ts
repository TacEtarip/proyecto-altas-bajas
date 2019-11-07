import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataUserService } from '../usuario.service';
import { BehaviorSubject, Subject, empty, interval } from 'rxjs';
import { takeUntil, mergeMap, startWith, delay } from 'rxjs/operators';
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

  cartillaMergeMap() {
    return this.cartilla$.pipe(mergeMap((x: any[]) => {
      return interval(1000).pipe(startWith(x[0].id));
    }));
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  irAformularioCompleto(codigo) {
    this.router.navigate(['/formularios-lista', codigo]);
  }
}

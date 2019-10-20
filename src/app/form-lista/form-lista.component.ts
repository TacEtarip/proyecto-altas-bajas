import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario,DataUserService } from "../usuario.service";
import { BehaviorSubject,Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})
export class FormListaComponent implements OnInit,OnDestroy {

  cartilla$:BehaviorSubject<object[]>=new BehaviorSubject<object[]>(null);
  unsubscribe$:Subject<Boolean>=new Subject<Boolean>();
  constructor(private dataUserService:DataUserService) { }

  ngOnInit() {
    this.dataUserService.getUser()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((lista:object[])=>{
      console.log(lista);
      this.cartilla$.next(lista);
    });
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}

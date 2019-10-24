import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCompletoComponent } from './formulario-completo.component';

describe('FormularioCompletoComponent', () => {
  let component: FormularioCompletoComponent;
  let fixture: ComponentFixture<FormularioCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageShowErrorComponent } from './message-show-error.component';

describe('MessageShowErrorComponent', () => {
  let component: MessageShowErrorComponent;
  let fixture: ComponentFixture<MessageShowErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageShowErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageShowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

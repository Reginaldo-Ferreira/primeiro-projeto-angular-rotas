import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoEncotradoComponent } from './curso-nao-encotrado.component';

describe('CursoNaoEncotradoComponent', () => {
  let component: CursoNaoEncotradoComponent;
  let fixture: ComponentFixture<CursoNaoEncotradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNaoEncotradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNaoEncotradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

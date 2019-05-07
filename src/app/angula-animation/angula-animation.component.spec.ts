import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulaAnimationComponent } from './angula-animation.component';

describe('AngulaAnimationComponent', () => {
  let component: AngulaAnimationComponent;
  let fixture: ComponentFixture<AngulaAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulaAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulaAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

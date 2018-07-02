import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogBoxComponent } from './dilog-box.component';

describe('DilogBoxComponent', () => {
  let component: DilogBoxComponent;
  let fixture: ComponentFixture<DilogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

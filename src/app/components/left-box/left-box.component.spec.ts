import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBoxComponent } from './left-box.component';

describe('LeftBoxComponent', () => {
  let component: LeftBoxComponent;
  let fixture: ComponentFixture<LeftBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

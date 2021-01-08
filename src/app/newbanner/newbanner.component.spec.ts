import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbannerComponent } from './newbanner.component';

describe('NewbannerComponent', () => {
  let component: NewbannerComponent;
  let fixture: ComponentFixture<NewbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedRangesliderComponent } from './extended-rangeslider.component';

describe('ExtendedRangesliderComponent', () => {
  let component: ExtendedRangesliderComponent;
  let fixture: ComponentFixture<ExtendedRangesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedRangesliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedRangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFeatherComponent } from './icons-feather.component';

describe('IconsFeatherComponent', () => {
  let component: IconsFeatherComponent;
  let fixture: ComponentFixture<IconsFeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsFeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsFeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTimelineComponent } from './pages-timeline.component';

describe('PagesTimelineComponent', () => {
  let component: PagesTimelineComponent;
  let fixture: ComponentFixture<PagesTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

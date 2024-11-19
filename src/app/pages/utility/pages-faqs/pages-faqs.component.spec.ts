import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFaqsComponent } from './pages-faqs.component';

describe('PagesFaqsComponent', () => {
  let component: PagesFaqsComponent;
  let fixture: ComponentFixture<PagesFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesFaqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pages-faqs',
  standalone: true,
  imports: [PageTitleComponent,NgbAccordionModule,NgbCollapseModule],
  templateUrl: './pages-faqs.component.html',
  styleUrl: './pages-faqs.component.scss'
})
export class PagesFaqsComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Boxicons', active: true }
    ];
  }
}

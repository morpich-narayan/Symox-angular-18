import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-pages-timeline',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './pages-timeline.component.html',
  styleUrl: './pages-timeline.component.scss'
})
export class PagesTimelineComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Utility' },
      { label: 'Timeline', active: true }
    ];
  }
}

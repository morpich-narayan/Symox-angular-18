import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-pages-starter',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './pages-starter.component.html',
  styleUrl: './pages-starter.component.scss'
})
export class PagesStarterComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Utility' },
      { label: 'Stater Page', active: true }
    ];
  }
}

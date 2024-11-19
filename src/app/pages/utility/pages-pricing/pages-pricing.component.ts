import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

enum Plan {
  Monthly,
  Annualy
}

@Component({
  selector: 'app-pages-pricing',
  standalone: true,
  imports: [CommonModule, PageTitleComponent],
  templateUrl: './pages-pricing.component.html',
  styleUrl: './pages-pricing.component.scss'
})
export class PagesPricingComponent {
  allPlans = Plan;
  selectedPlan = Plan.Monthly;

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Utility' },
      { label: 'Pricing', active: true }
    ];
  }

}

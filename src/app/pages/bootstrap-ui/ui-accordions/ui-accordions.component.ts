import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-accordions',
  standalone: true,
  imports: [AccordionModule, PageTitleComponent, CollapseModule, CommonModule],
  templateUrl: './ui-accordions.component.html',
  styleUrl: './ui-accordions.component.scss'
})
export class UiAccordionsComponent {


  isCollapsed = false;
  horizontalCollapsed = false;
  arrowCollapsed = false;
  filterCollapsed = false;
  blockCollapsed = false;
  inlineCollapsed = false;
  multiCollapseExample1 = false;
  multiCollapseExample2 = false;

  isFirstOpen = false;
  isSecondOpen = false;
  isThirdOpen = false;

  dAccOpen = false;
  dAccSecOpen = false;
  dAccThreeOpen = false;

  isInnerFirstOpen = false;

  breadCrumbItems!: Array<{}>;
  ngOnInit() {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Accordions', active: true }
    ];

    Prism.highlightAll();
  }


}

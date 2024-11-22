import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-ui-general',
  standalone: true,
  imports: [PageTitleComponent,PopoverModule,PaginationModule],
  templateUrl: './ui-general.component.html',
  styleUrl: './ui-general.component.scss'
})
export class UiGeneralComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'General', active: true }];

      Prism.highlightAll();
    }
}

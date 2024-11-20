import { Component, inject, TemplateRef } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgbToastModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from '../../../core/componate/toasts-container.component';


@Component({
  selector: 'app-ui-notifications',
  standalone: true,
  imports: [PageTitleComponent, NgbTooltip, ToastsContainer, NgbToastModule],
  templateUrl: './ui-notifications.component.html',
  styleUrl: './ui-notifications.component.scss'
})
export class ExtendentNotificationsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  show = true;
  translucent = true;
  stacking = true;
  stackingsecond = true;
  placement = true;
  placementSec = true;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Notifications', active: true }];

    Prism.highlightAll();
  }


  toastService = inject(ToastService);

  showStandard(template: TemplateRef<any>) {
    this.toastService.show({ template });
  }

  showSuccess(template: TemplateRef<any>) {
    this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(template: TemplateRef<any>) {
    this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
  }

  /**
     * Show Code Toggle
     */
  ShowCode(event: any) {
    let card = event.target.closest('.card');
    const preview = card.children[1].children[1];
    const codeView = card.children[1].children[2];
    if (codeView != null) {
      codeView.classList.toggle('d-none');
    }
    if (preview != null) {
      preview.classList.toggle('d-none');

    }
  }

}

import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FeatherModule } from 'angular-feather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icons-dripicons',
  standalone: true,
  imports: [PageTitleComponent,FeatherModule,CommonModule],
  templateUrl: './icons-dripicons.component.html',
  styleUrl: './icons-dripicons.component.scss'
})
export class IconsDripiconsComponent {

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Dripicons', active: true }
    ];
  }
}

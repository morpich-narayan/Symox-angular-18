import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FeatherModule } from 'angular-feather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icons-feather',
  standalone: true,
  imports: [PageTitleComponent,FeatherModule,CommonModule],
  templateUrl: './icons-feather.component.html',
  styleUrl: './icons-feather.component.scss'
})
export class IconsFeatherComponent {

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Feather', active: true }
    ];
  }
}

import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FeatherModule } from 'angular-feather';
import { CommonModule } from '@angular/common';
import { icons } from './data';

@Component({
  selector: 'app-icons-fontawesome',
  standalone: true,
  imports: [PageTitleComponent, FeatherModule, CommonModule],
  templateUrl: './icons-fontawesome.component.html',
  styleUrl: './icons-fontawesome.component.scss'
})
export class IconsFontawesomeComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  icons: any;

  solid: string = "";
  regular: string = "";
  brand: string = "";

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Icons' }, { label: 'Font Awesome 5', active: true }];
    setTimeout(() => {
      this.icons = icons;

      for (let entry of icons) {
        if (entry.attributes.membership.free.length) {
          for (let value of entry.attributes.membership.free) {
            switch (value) {
              case "brands":
                this.brand += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                        <i class="fab fa-'+ entry.id + '"></i> fab fa-' + entry.id + '\
                    </div>';
                break;
              case 'solid':
                this.solid += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                  <i class="fas fa-'+ entry.id + '"></i> fas fa-' + entry.id + '\
              </div>';
                break;
              default:
                this.regular += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                        <i class="far fa-'+ entry.id + '"></i> far fa-' + entry.id + '\
                    </div>';
            }
          }
        }
      }
      const solidElement = document.getElementById("solid");
      if (solidElement) {
        solidElement.innerHTML = this.solid;
      }

      const brandElement = document.getElementById("brand");
      if (brandElement) {
        brandElement.innerHTML = this.brand;
      }

      const regularElement = document.getElementById("regular");
      if (regularElement) {
        regularElement.innerHTML = this.regular;
      }
    }, 0);
  }
}

import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard/dashboard.component';
import { IconsFeatherComponent } from '../pages/icons/icons-feather/icons-feather.component';
import { IconsBoxiconsComponent } from '../pages/icons/icons-boxicons/icons-boxicons.component';
import { IconsMaterialdesignComponent } from '../pages/icons/icons-materialdesign/icons-materialdesign.component';
import { IconsDripiconsComponent } from '../pages/icons/icons-dripicons/icons-dripicons.component';
import { IconsFontawesomeComponent } from '../pages/icons/icons-fontawesome/icons-fontawesome.component';
import { PagesStarterComponent } from '../pages/utility/pages-starter/pages-starter.component';
import { PagesTimelineComponent } from '../pages/utility/pages-timeline/pages-timeline.component';
import { PagesFaqsComponent } from '../pages/utility/pages-faqs/pages-faqs.component';
import { PagesPricingComponent } from '../pages/utility/pages-pricing/pages-pricing.component';

export const PAGE_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  
  // Icons pages
  { path: 'icons-feather', component: IconsFeatherComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-materialdesign', component: IconsMaterialdesignComponent },
  { path: 'icons-dripicons', component: IconsDripiconsComponent },
  { path: 'icons-fontawesome', component: IconsFontawesomeComponent },
  
  // Utility Pages
  { path: 'pages-starter', component: PagesStarterComponent },
  { path: 'pages-timeline', component: PagesTimelineComponent },
  { path: 'pages-faqs', component: PagesFaqsComponent },
  { path: 'pages-pricing', component: PagesPricingComponent },
]

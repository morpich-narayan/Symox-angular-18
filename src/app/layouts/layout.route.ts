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
import { ExtendedRangesliderComponent } from '../pages/extendent/extended-rangeslider/extended-rangeslider.component';
import { ExtendentRatingsComponent } from '../pages/extendent/extendent-ratings/extendent-ratings.component';
import { ExtendentNotificationsComponent } from '../pages/extendent/extendent-notifications/ui-notifications.component';
import { MapsGoogleComponent } from '../pages/maps/maps-google/maps-google.component';
import { MapsLeafletComponent } from '../pages/maps/maps-leaflet/maps-leaflet.component';

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
  
  // Extended pages
  { path: 'extended-rangeslider', component: ExtendedRangesliderComponent },
  { path: 'extended-rating', component: ExtendentRatingsComponent },
  { path: 'extended-notifications', component: ExtendentNotificationsComponent },

  // Maps
  { path: 'maps-google', component: MapsGoogleComponent },
  { path: 'maps-leaflet', component: MapsLeafletComponent },
]

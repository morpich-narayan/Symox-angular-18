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
import { UiAlertsComponent } from '../pages/bootstrap-ui/ui-alerts/ui-alerts.component';
import { UiBadgesComponent } from '../pages/bootstrap-ui/ui-badges/ui-badges.component';
import { UiButtonsComponent } from '../pages/bootstrap-ui/ui-buttons/ui-buttons.component';
import { UiColorsComponent } from '../pages/bootstrap-ui/ui-colors/ui-colors.component';
import { UiCardsComponent } from '../pages/bootstrap-ui/ui-cards/ui-cards.component';
import { UiCarouselComponent } from '../pages/bootstrap-ui/ui-carousel/ui-carousel.component';
import { UiDropdownsComponent } from '../pages/bootstrap-ui/ui-dropdowns/ui-dropdowns.component';
import { UiGridComponent } from '../pages/bootstrap-ui/ui-grid/ui-grid.component';
import { UiImagesComponent } from '../pages/bootstrap-ui/ui-images/ui-images.component';
import { UiTabsComponent } from '../pages/bootstrap-ui/ui-tabs/ui-tabs.component';
import { UiAccordionsComponent } from '../pages/bootstrap-ui/ui-accordions/ui-accordions.component';
import { UiModalsComponent } from '../pages/bootstrap-ui/ui-modals/ui-modals.component';
import { UiOffcanvasComponent } from '../pages/bootstrap-ui/ui-offcanvas/ui-offcanvas.component';
import { UiPlaceholdersComponent } from '../pages/bootstrap-ui/ui-placeholders/ui-placeholders.component';
import { UiProgressComponent } from '../pages/bootstrap-ui/ui-progress/ui-progress.component';
import { UiNotificationsComponent } from '../pages/bootstrap-ui/ui-notifications/ui-notifications.component';
import { UiMediaComponent } from '../pages/bootstrap-ui/ui-media/ui-media.component';
import { UiEmbedVideoComponent } from '../pages/bootstrap-ui/ui-embed-video/ui-embed-video.component';
import { UiTypographyComponent } from '../pages/bootstrap-ui/ui-typography/ui-typography.component';
import { UiListsComponent } from '../pages/bootstrap-ui/ui-lists/ui-lists.component';
import { UiGeneralComponent } from '../pages/bootstrap-ui/ui-general/ui-general.component';
import { UiUtilitiesComponent } from '../pages/bootstrap-ui/ui-utilities/ui-utilities.component';

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

  // Bootstrap UI
  { path: 'ui-alerts', component: UiAlertsComponent},
  { path: 'ui-badges', component: UiBadgesComponent},
  { path: 'ui-buttons', component: UiButtonsComponent},
  { path: 'ui-colors', component: UiColorsComponent},
  { path: 'ui-cards', component: UiCardsComponent},
  { path: 'ui-carousel', component: UiCarouselComponent},
  { path: 'ui-dropdowns', component: UiDropdownsComponent},
  { path: 'ui-grid', component: UiGridComponent},
  { path: 'ui-images', component: UiImagesComponent},
  { path: 'ui-tabs', component: UiTabsComponent},
  { path: 'ui-accordions', component: UiAccordionsComponent},
  { path: 'ui-modals', component: UiModalsComponent},
  { path: 'ui-offcanvas', component: UiOffcanvasComponent},
  { path: 'ui-placeholders', component: UiPlaceholdersComponent},
  { path: 'ui-progress', component: UiProgressComponent},
  { path: 'ui-notifications', component: UiNotificationsComponent},
  { path: 'ui-media', component: UiMediaComponent},
  { path: 'ui-embed-video', component: UiEmbedVideoComponent},
  { path: 'ui-typography', component: UiTypographyComponent},
  { path: 'ui-lists', component: UiListsComponent},
  { path: 'ui-general', component: UiGeneralComponent},
  { path: 'ui-utilities', component: UiUtilitiesComponent},
]

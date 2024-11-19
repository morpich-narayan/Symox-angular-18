import { Routes } from "@angular/router";
import { MaintenanceComponent } from "./utility-pages/maintenance/maintenance.component";
import { ComingsoonComponent } from "./utility-pages/comingsoon/comingsoon.component";
import { InternalServerErrorComponent } from "./utility-pages/internal-server-error/internal-server-error.component";
import { PageNotFoundComponent } from "./utility-pages/page-not-found/page-not-found.component";

export const UTILITY_ROUTES: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: 'internal-server-error', component: InternalServerErrorComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
]
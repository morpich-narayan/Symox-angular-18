import { Routes } from "@angular/router";
import { AuthSigninComponent } from "./auth-pages/auth-signin/auth-signin.component";
import { AuthSignupComponent } from "./auth-pages/auth-signup/auth-signup.component";
import { AuthPassResetComponent } from "./auth-pages/auth-pass-reset/auth-pass-reset.component";
import { AuthLockscreenComponent } from "./auth-pages/auth-lockscreen/auth-lockscreen.component";
import { AuthLogoutComponent } from "./auth-pages/auth-logout/auth-logout.component";
import { AuthConfirmMailComponent } from "./auth-pages/auth-confirm-mail/auth-confirm-mail.component";
import { AuthEmailVerificationComponent } from "./auth-pages/auth-email-verification/auth-email-verification.component";
import { AuthTwoStepVerificationComponent } from "./auth-pages/two-step-verification/auth-two-step-verification.component";

export const AUTH_ROUTES: Routes = [
  { path: '', component: AuthSigninComponent },
  { path: 'auth-signin', component: AuthSigninComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'auth-pass-reset', component: AuthPassResetComponent },
  { path: 'auth-lockscreen', component: AuthLockscreenComponent },
  { path: 'auth-logout', component: AuthLogoutComponent },
  { path: 'auth-confirm-mail', component: AuthConfirmMailComponent },
  { path: 'auth-email-verification', component: AuthEmailVerificationComponent },
  { path: 'two-step-verification', component: AuthTwoStepVerificationComponent },
]
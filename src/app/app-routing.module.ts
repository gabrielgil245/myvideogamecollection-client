import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { LandingComponent } from './page/landing/landing.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password/:email', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

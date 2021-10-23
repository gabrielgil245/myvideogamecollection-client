import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilService } from './service/util.service';
import { UserService } from './service/user.service';
import { PlatformService } from './service/platform.service';
import { GameService } from './service/game.service';
import { LandingComponent } from './page/landing/landing.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtilService, UserService, PlatformService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

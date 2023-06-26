import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { LanguagesComponent } from './languages/languages.component';
import { LoginComponent } from './page/login/login.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { RegisterComponent } from './page/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

// Service


@NgModule({
  declarations: [
    LanguagesComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // SharedModule,
    // CodeInputModule
  ]
})
export class AuthModule { }
